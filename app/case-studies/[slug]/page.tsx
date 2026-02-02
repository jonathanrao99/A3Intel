import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { caseStudies, getCaseStudy, getAllCaseStudySlugs } from '@/data/case-studies'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  
  if (!study) {
    return { title: 'Case Study Not Found | A3Intel Solutions' }
  }
  
  return {
    title: `${study.title} | A3Intel Solutions`,
    description: study.outcome,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  
  if (!study) {
    notFound()
  }

  // Get related case studies (different from current)
  const relatedStudies = caseStudies
    .filter((s) => s.slug !== slug)
    .slice(0, 2)

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pb-28">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        </div>

        <div className="relative container-wide">
          {/* Back Link */}
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All case studies
          </Link>

          <div className="max-w-3xl">
            {/* Industry Badge */}
            <span className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6">
              {study.industry}
            </span>

            {/* Title */}
            <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight">
              {study.title}
            </h1>

            {/* Client Info */}
            <div className="flex items-center gap-4 mb-8">
              {study.clientLogo && (
                <img
                  src={study.clientLogo}
                  alt={study.client}
                  className="h-8 max-w-[120px] object-contain brightness-0 invert opacity-80"
                />
              )}
              <span className="text-white/70">{study.client}</span>
            </div>

            {/* Outcome */}
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full">
              <span className="text-sm font-semibold text-gray-900">{study.outcome}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Challenge */}
              <div className="mb-12">
                <h2 className="font-serif text-heading-lg text-gray-900 mb-4">
                  The Challenge
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-12">
                <h2 className="font-serif text-heading-lg text-gray-900 mb-4">
                  Our Solution
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Results */}
              <div className="mb-12">
                <h2 className="font-serif text-heading-lg text-gray-900 mb-6">
                  The Results
                </h2>
                <ul className="space-y-4">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 flex items-center justify-center bg-gray-900 text-white text-xs font-semibold rounded-full mr-4 flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              {study.quote && (
                <div className="relative bg-gray-50 rounded-2xl p-8 lg:p-10">
                  <Quote className="w-10 h-10 text-gray-200 absolute top-8 left-8" />
                  <blockquote className="relative pl-8">
                    <p className="font-serif text-heading text-gray-900 mb-6 leading-relaxed">
                      &ldquo;{study.quote.text}&rdquo;
                    </p>
                    <footer>
                      <div className="font-semibold text-gray-900">{study.quote.author}</div>
                      <div className="text-sm text-gray-500">{study.quote.role}</div>
                    </footer>
                  </blockquote>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                {/* CTA Card */}
                <div className="bg-gray-900 rounded-2xl p-8 mb-8">
                  <h3 className="font-serif text-heading text-white mb-4">
                    Want similar results?
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Let&apos;s discuss how we can help your organization achieve its goals.
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Start a conversation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                {/* Related Case Studies */}
                {relatedStudies.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Related Case Studies
                    </h3>
                    <div className="space-y-4">
                      {relatedStudies.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/case-studies/${related.slug}`}
                          className="block group"
                        >
                          <div className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 hover:shadow-soft transition-all">
                            <span className="text-xs text-gray-500 mb-1 block">
                              {related.industry}
                            </span>
                            <h4 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors text-sm">
                              {related.title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
