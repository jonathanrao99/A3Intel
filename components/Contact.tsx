'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

type FormErrors = {
  firstName?: string
  lastName?: string
  email?: string
  company?: string
  interest?: string
  message?: string
  form?: string
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
    website: '', // Honeypot field
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Validate email format
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required'
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select an area of interest'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setIsSubmitted(true)
    } catch (error) {
      setErrors({
        form: error instanceof Error ? error.message : 'An error occurred. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  // Get input class based on error state
  const getInputClass = (fieldName: keyof FormErrors) => {
    return `input-field ${errors[fieldName] ? 'input-error' : ''}`
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative section-spacing bg-white overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent" />
      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 sm:gap-14 lg:gap-20">
          {/* Left Column - Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <Send className="w-4 h-4 text-gray-400 shrink-0" />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
                Get in Touch
              </p>
            </div>
            <h2 id="contact-heading" className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-[-0.02em] leading-tight">
              Let&apos;s discuss your project
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Share your project requirements and we will respond within one business day.
            </p>

            {/* Contact Info */}
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" aria-hidden />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Headquarters</div>
                  <address className="text-gray-600 text-sm leading-relaxed not-italic">
                    633 E Fernhurst Dr, Suite 1002<br />
                    Katy, TX 77450
                  </address>
                </div>
              </div>

              <a href="tel:+17196942864" className="group flex items-start gap-4 text-left">
                <Phone className="w-5 h-5 text-gray-400 shrink-0 mt-0.5 transition-colors group-hover:text-blue-600" aria-hidden />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Phone</div>
                  <span className="text-gray-600 text-sm transition-colors group-hover:text-gray-900">+1 (719) 694-2864</span>
                </div>
              </a>

              <a href="mailto:contact@a3intel.tech" className="group flex items-start gap-4 text-left">
                <Mail className="w-5 h-5 text-gray-400 shrink-0 mt-0.5 transition-colors group-hover:text-blue-600" aria-hidden />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Email</div>
                  <span className="text-gray-600 text-sm transition-colors group-hover:text-gray-900">contact@a3intel.tech</span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" aria-hidden />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Business Hours</div>
                  <div className="text-gray-600 text-sm">
                    Monday – Friday: 9:00 AM – 6:00 PM CST
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {isSubmitted ? (
              <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-12 text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12),0_12px_24px_-8px_rgba(0,0,0,0.06)]">
                <motion.div
                  className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/25"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1,
                  }}
                >
                  <Check className="w-8 h-8 text-white" strokeWidth={2.5} />
                </motion.div>
                <h3 className="font-serif text-heading-lg text-gray-900 mb-3">
                  Thank you for reaching out
                </h3>
                <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                  We&apos;ve received your message and will respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50/80 border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12),0_12px_24px_-8px_rgba(0,0,0,0.06)]">
                {/* Form-level error */}
                {errors.form && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm leading-relaxed" role="alert">
                    {errors.form}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={getInputClass('firstName')}
                      aria-invalid={!!errors.firstName}
                      aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="input-error-message">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={getInputClass('lastName')}
                      aria-invalid={!!errors.lastName}
                      aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                    />
                    {errors.lastName && (
                      <p id="lastName-error" className="input-error-message">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Work email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={getInputClass('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="input-error-message">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={getInputClass('company')}
                      aria-invalid={!!errors.company}
                      aria-describedby={errors.company ? 'company-error' : undefined}
                    />
                    {errors.company && (
                      <p id="company-error" className="input-error-message">{errors.company}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      Area of interest *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className={getInputClass('interest')}
                      aria-invalid={!!errors.interest}
                      aria-describedby={errors.interest ? 'interest-error' : undefined}
                    >
                    <option value="">Select...</option>
                    <option value="it-strategy-consulting">IT Strategy Consulting</option>
                    <option value="cloud-computing">Cloud Computing Solutions</option>
                    <option value="it-security">IT Security Services</option>
                    <option value="managed-services">Managed IT Services</option>
                    <option value="it-staffing">IT Staffing Solutions</option>
                    <option value="digital-transformation">Digital Transformation Services</option>
                    <option value="other">Other</option>
                    </select>
                    {errors.interest && (
                      <p id="interest-error" className="input-error-message">{errors.interest}</p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    How can we help? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`${getInputClass('message')} resize-none`}
                    placeholder="Tell us about your project or challenge..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="input-error-message">{errors.message}</p>
                  )}
                </div>

                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="absolute -left-[9999px] opacity-0"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold tracking-tight text-white bg-blue-600 rounded-full shadow-lg shadow-blue-600/25 transition-all duration-200 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/30 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />}
                </button>

                <p className="text-xs text-gray-500 text-center mt-5 leading-relaxed">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
