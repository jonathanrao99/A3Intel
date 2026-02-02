import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, FileText, Download } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'White Papers | A3Intel Solutions',
  description:
    'In-depth guides and white papers on cloud migration, healthcare IT, cybersecurity, and digital transformation. Expert insights from A3Intel.',
}

const whitePapers = [
  {
    title: 'Cloud Migration Strategy: A Practical Guide for Enterprise Leaders',
    excerpt: 'Key considerations for planning and executing a successful cloud migration. Covers assessment, security, cost management, and change management.',
    category: 'Cloud & Infrastructure',
    pdfUrl: '#',
  },
  {
    title: 'Healthcare IT Compliance: HIPAA and Beyond',
    excerpt: 'Understanding HIPAA requirements, HITRUST, and best practices for securing healthcare data. A roadmap for compliance readiness.',
    category: 'Healthcare',
    pdfUrl: '#',
  },
  {
    title: 'Building a Modern Security Program',
    excerpt: 'From vulnerability management to incident response—a structured approach to strengthening your organization\'s security posture.',
    category: 'Security',
    pdfUrl: '#',
  },
  {
    title: 'IT Staffing Best Practices for Regulated Industries',
    excerpt: 'How to source, vet, and retain IT talent for healthcare, government, and financial services. E-Verify and compliance considerations.',
    category: 'Staffing',
    pdfUrl: '#',
  },
  {
    title: 'Digital Transformation: Strategy to Execution',
    excerpt: 'A phased approach to digital transformation—from discovery and roadmap to implementation and ongoing optimization.',
    category: 'Digital Transformation',
    pdfUrl: '#',
  },
]

export default function WhitePapersPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 md:pb-24 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <FileText className="w-4 h-4 text-gray-400" />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Resources</p>
            </div>
            <h1 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              White Papers
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              In-depth guides and expert perspectives on cloud migration, healthcare IT, cybersecurity, digital transformation, and IT staffing. Download our white papers for practical insights you can apply to your organization.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="space-y-8">
            {whitePapers.map((paper) => (
              <article
                key={paper.title}
                className="group flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="flex-1">
                  <span className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 mb-4">
                    {paper.category}
                  </span>
                  <h2 className="font-serif text-heading-lg text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {paper.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {paper.excerpt}
                  </p>
                </div>
                <div className="shrink-0">
                  <a
                    href={paper.pdfUrl}
                    className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              Need a custom perspective?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our consultants can provide tailored guidance for your specific situation. Get in touch to discuss your needs.
            </p>
            <Link
              href="/#contact"
              className="group inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all"
            >
              Contact us
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
