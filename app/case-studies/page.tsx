import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Briefcase } from 'lucide-react'
import { caseStudies } from '@/data/case-studies'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Case Studies | A3Intel Solutions',
  description: 'Explore how A3Intel has helped organizations transform their technology and talent strategies with real-world success stories.',
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-20 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-4 h-4 text-gray-400" />
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                Case Studies
              </p>
            </div>
            <h1 className="font-serif text-display-sm md:text-display text-gray-900 mb-6">
              Real results for real organizations
            </h1>
            <p className="text-body-lg text-gray-600 leading-relaxed">
              Discover how we&apos;ve helped Fortune 500 companies and government agencies 
              solve complex technology and talent challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group block"
              >
                <article className="h-full border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-gray-200 hover:shadow-elevated transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                    {/* Industry Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                        {study.industry}
                      </span>
                    </div>
                    {/* Client Logo */}
                    {study.clientLogo && (
                      <div className="absolute bottom-4 left-4">
                        <img
                          src={study.clientLogo}
                          alt={study.client}
                          className="h-6 max-w-[100px] object-contain brightness-0 invert"
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors pr-4">
                        {study.title}
                      </h2>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      {study.client}
                    </p>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium text-gray-900">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gray-900">
        <div className="container-wide text-center">
          <h2 className="font-serif text-display-sm md:text-display text-white mb-6">
            Ready to write your success story?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Let&apos;s discuss how A3Intel can help you achieve similar results for your organization.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 hover:scale-[1.02] transition-all duration-200"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
