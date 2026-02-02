import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react'
import { insights } from '@/data/insights'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Insights | A3Intel Solutions',
  description: 'Expert perspectives on IT consulting, healthcare staffing, cloud transformation, cybersecurity, and technology trends.',
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function InsightsPage() {
  const featuredInsight = insights[0]
  const otherInsights = insights.slice(1)

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero - Full-bleed (same as industry pages) */}
      <section className="relative pt-32 pb-20 md:pb-28 min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Insights"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        </div>

        <div className="relative container-wide w-full">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-white/30" aria-hidden />
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-medium text-white/60 uppercase tracking-[0.2em]">
              Insights
            </span>
          </div>

          <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight max-w-3xl">
            Expert perspectives on technology and talent
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-4 leading-relaxed">
            Stay informed with insights from our team of consultants, technology
            leaders, and industry experts.
          </p>
          <p className="text-sm text-white/50 max-w-2xl mb-8">
            Technology trends · Industry expertise · Thought leadership
          </p>

          <a
            href="#articles"
            className="group inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all shadow-lg"
          >
            Explore articles
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* Featured Article */}
      <section id="articles" className="py-12 bg-white scroll-mt-24">
        <div className="container-wide">
          <Link
            href={`/insights/${featuredInsight.slug}`}
            className="group block"
          >
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 hover:shadow-elevated transition-all duration-300">
              {/* Image - spans full height on desktop */}
              <div className="relative min-h-[240px] lg:min-h-0 lg:h-full overflow-hidden">
                <img
                  src={featuredInsight.image}
                  alt={featuredInsight.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <span className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 mb-4">
                  {featuredInsight.category}
                </span>
                <h2 className="font-serif text-heading-lg md:text-display-sm text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                  {featuredInsight.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredInsight.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {formatDate(featuredInsight.date)} · {featuredInsight.readTime}
                  </div>
                  <span className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:underline">
                    Read article
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* Other Articles */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <h2 className="font-serif text-heading-lg text-gray-900 mb-10">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherInsights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group block"
              >
                <article className="h-full border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-gray-200 hover:shadow-elevated transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 mb-3">
                      {insight.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-500">
                        {formatDate(insight.date)}
                      </span>
                      <span className="text-xs text-gray-500">
                        {insight.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
