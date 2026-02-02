import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | A3Intel Solutions',
  description: 'A3Intel Solutions terms of service and use of our website and services.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 md:pb-24 bg-gray-50">
        <div className="container-wide">
          <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
          </Link>
          <h1 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-gray-600">Last updated: February 1, 2025</p>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-wide max-w-3xl prose prose-gray">
          <div className="space-y-10 text-gray-600 leading-relaxed">
            <div>
              <h2 className="font-serif text-heading text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the A3Intel Solutions Inc. website (a3intel.tech) and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-heading text-gray-900 mb-4">2. Use of Our Website</h2>
              <p>
                You may use our website for lawful purposes only. You agree not to use our website to transmit any harmful, offensive, or unlawful content, or to interfere with the operation of our website or the use of our website by others. We reserve the right to restrict or terminate access for any user who violates these terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-heading text-gray-900 mb-4">3. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, and images, is the property of A3Intel Solutions Inc. or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-heading text-gray-900 mb-4">4. Services</h2>
              <p>
                The specific terms governing our consulting, staffing, and managed services will be set forth in separate agreements. This website is for informational purposes and does not constitute a binding offer or contract.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-heading text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
              <p>
                Our website and content are provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted, error-free, or free of harmful components.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-heading text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, A3Intel Solutions Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-heading text-gray-900 mb-4">7. Changes</h2>
              <p>
                We may update these Terms of Service from time to time. We will notify you of material changes by posting the updated terms on this page. Your continued use of our website after such changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-heading text-gray-900 mb-4">8. Contact</h2>
              <p>
                For questions about these Terms of Service, please contact us at <a href="mailto:contact@a3intel.tech" className="text-blue-600 hover:underline">contact@a3intel.tech</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer hideCTA />
    </main>
  )
}
