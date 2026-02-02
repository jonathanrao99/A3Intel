import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react'
import { getInsight, getAllInsightSlugs, getRelatedInsights } from '@/data/insights'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const insight = getInsight(slug)
  
  if (!insight) {
    return { title: 'Article Not Found | A3Intel Solutions' }
  }
  
  return {
    title: `${insight.title} | A3Intel Solutions`,
    description: insight.excerpt,
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

// Simple markdown-like content renderer
function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: JSX.Element[] = []
  let key = 0

  for (const line of lines) {
    const trimmedLine = line.trim()
    
    if (!trimmedLine) {
      continue
    }

    if (trimmedLine.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="font-serif text-heading-lg text-gray-900 mt-12 mb-4">
          {trimmedLine.slice(3)}
        </h2>
      )
    } else if (trimmedLine.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="font-semibold text-heading text-gray-900 mt-8 mb-3">
          {trimmedLine.slice(4)}
        </h3>
      )
    } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
      elements.push(
        <p key={key++} className="font-semibold text-gray-900 mt-6 mb-2">
          {trimmedLine.slice(2, -2)}
        </p>
      )
    } else if (trimmedLine.startsWith('- ')) {
      elements.push(
        <li key={key++} className="text-gray-700 mb-2 ml-6">
          {trimmedLine.slice(2)}
        </li>
      )
    } else {
      elements.push(
        <p key={key++} className="text-gray-700 mb-6 leading-relaxed">
          {trimmedLine}
        </p>
      )
    }
  }

  return elements
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params
  const insight = getInsight(slug)
  
  if (!insight) {
    notFound()
  }

  const relatedInsights = getRelatedInsights(slug, 2)

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/insights"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              All insights
            </Link>

            {/* Category Badge */}
            <span className="inline-flex items-center px-4 py-1.5 bg-gray-200 rounded-full text-sm font-medium text-gray-700 mb-6">
              {insight.category}
            </span>

            {/* Title */}
            <h1 className="font-serif text-display-sm md:text-display text-gray-900 mb-6">
              {insight.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(insight.date)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {insight.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[2/1] rounded-2xl overflow-hidden">
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="max-w-3xl prose-custom">
                {renderContent(insight.content)}
              </div>

              {/* Author */}
              <div className="max-w-3xl mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-gray-600">
                      {insight.author.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{insight.author.name}</div>
                    <div className="text-sm text-gray-500">{insight.author.role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                {/* CTA Card */}
                <div className="bg-gray-900 rounded-2xl p-6 mb-8">
                  <h3 className="font-semibold text-white mb-3">
                    Need expert guidance?
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Our team can help you implement these strategies.
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Contact us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                {/* Related Articles */}
                {relatedInsights.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedInsights.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/insights/${related.slug}`}
                          className="block group"
                        >
                          <div className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 hover:shadow-soft transition-all">
                            <span className="text-xs text-gray-500 mb-1 block">
                              {related.category}
                            </span>
                            <h4 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors text-sm line-clamp-2">
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
