import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory store for demo purposes
// In production, use a database or email service like Resend/SendGrid
const submissions: Array<{
  id: string
  timestamp: string
  data: Record<string, string>
}> = []

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Rate limiting - simple in-memory implementation
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 5 // requests
const RATE_WINDOW = 60 * 1000 // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW })
    return false
  }
  
  if (record.count >= RATE_LIMIT) {
    return true
  }
  
  record.count++
  return false
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'company', 'interest', 'message']
    const missingFields = requiredFields.filter(field => !body[field]?.trim())
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }
    
    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // Honeypot check (if a hidden field is filled, it's likely a bot)
    if (body.website) {
      // Silently reject but return success to confuse bots
      return NextResponse.json({ success: true })
    }
    
    // Store submission
    const submission = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      data: {
        firstName: body.firstName.trim(),
        lastName: body.lastName.trim(),
        email: body.email.trim().toLowerCase(),
        company: body.company.trim(),
        phone: body.phone?.trim() || '',
        interest: body.interest.trim(),
        message: body.message.trim(),
      }
    }
    
    submissions.push(submission)
    
    // In production, you would:
    // 1. Send email via Resend/SendGrid/Nodemailer
    // 2. Store in database
    // 3. Send to CRM/webhook
    
    // Example with Resend (uncomment and add RESEND_API_KEY to env):
    /*
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      
      await resend.emails.send({
        from: 'A3Intel Contact <noreply@a3intel.tech>',
        to: ['contact@a3intel.tech'],
        subject: `New Contact: ${submission.data.firstName} ${submission.data.lastName} - ${submission.data.interest}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${submission.data.firstName} ${submission.data.lastName}</p>
          <p><strong>Email:</strong> ${submission.data.email}</p>
          <p><strong>Company:</strong> ${submission.data.company}</p>
          <p><strong>Phone:</strong> ${submission.data.phone || 'Not provided'}</p>
          <p><strong>Interest:</strong> ${submission.data.interest}</p>
          <p><strong>Message:</strong></p>
          <p>${submission.data.message}</p>
        `,
      })
    }
    */
    
    console.log('Contact form submission:', submission)
    
    return NextResponse.json({ 
      success: true,
      message: 'Thank you for your message. We will be in touch shortly.'
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to check API health
export async function GET() {
  return NextResponse.json({ 
    status: 'ok',
    submissions: submissions.length 
  })
}
