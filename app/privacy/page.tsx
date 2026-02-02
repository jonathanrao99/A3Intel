import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | A3Intel Solutions',
  description: 'A3Intel Solutions privacy policy. How we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 md:pb-24 bg-gray-50">
        <div className="container-wide">
          <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
          </Link>
          <h1 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: February 1, 2025</p>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-wide max-w-3xl prose prose-gray">
          <div className="space-y-10 text-gray-600 leading-relaxed">
            <div>
              <h2 className="font-serif text-heading text-gray-900 mb-4">1. Introduction</h2>
              <p>
                A3Intel Solutions Inc. (&quot;A3Intel,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at a3intel.tech or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-heading text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, job title, and any other information you provide when contacting us or filling out forms on our website.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on our site.</li>
                <li><strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to enhance your experience. See our <Link href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</Link> for details.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-heading text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you information about our services, with your consent</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-heading text-gray-900 mb-4">4. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with service providers who assist us in operating our website and business, subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-heading text-gray-900 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is completely secure.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-heading text-gray-900 mb-4">6. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, or delete your personal information. You may also opt out of marketing communications. To exercise these rights, contact us at contact@a3intel.tech.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-heading text-gray-900 mb-4">7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at <a href="mailto:contact@a3intel.tech" className="text-blue-600 hover:underline">contact@a3intel.tech</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer hideCTA />
    </main>
  )
}
