import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import IndustryApproachSection, { type ApproachItem } from '@/components/IndustryApproachSection'

export type IndustrySolution = {
  title: string
  href: string
  description: string
  icon: LucideIcon
  image?: string
}

export type RelatedIndustry = {
  name: string
  href: string
  icon: LucideIcon
  image: string
}

type IndustryPageLayoutProps = {
  title: string
  subtitle: string
  metaLine: string
  heroImage: string
  icon: LucideIcon
  iconLabel: string
  overviewTitle: string
  overviewContent: ReactNode
  whyChooseTitle: string
  whyChooseItems: string[]
  solutionsTitle: string
  solutionsSubtitle: string
  solutions: IndustrySolution[]
  sectionBelowTitle: string
  sectionBelowSubtitle: string
  sectionBelowItems: ApproachItem[]
  relatedIndustries: RelatedIndustry[]
  ctaTitle: string
  ctaDescription: string
}

export default function IndustryPageLayout({
  title,
  subtitle,
  metaLine,
  heroImage,
  icon: Icon,
  iconLabel,
  overviewTitle,
  overviewContent,
  whyChooseTitle,
  whyChooseItems,
  solutionsTitle,
  solutionsSubtitle,
  solutions,
  sectionBelowTitle,
  sectionBelowSubtitle,
  sectionBelowItems,
  relatedIndustries,
  ctaTitle,
  ctaDescription,
}: IndustryPageLayoutProps) {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero - Full-bleed (same as services pages) */}
      <section className="relative pt-32 pb-20 md:pb-28 min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        </div>

        <div className="relative container-wide w-full">
          <Link
            href="/industries"
            className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All industries
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-white/30" aria-hidden />
            <Icon className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-medium text-white/60 uppercase tracking-[0.2em]">
              {iconLabel}
            </span>
          </div>

          <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight max-w-3xl">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-4 leading-relaxed">
            {subtitle}
          </p>
          <p className="text-sm text-white/50 max-w-2xl mb-8">
            {metaLine}
          </p>

          <Link
            href="/#contact"
            className="group inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all shadow-lg"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* Overview - Alternating layout */}
      <section className="section-spacing bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gray-300" aria-hidden />
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
                  Overview
                </p>
              </div>
              <h2 className="font-serif text-heading-lg md:text-display-sm text-gray-900 mb-6 tracking-tight">
                {overviewTitle}
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-6">
                {overviewContent}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-32 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{whyChooseTitle}</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {whyChooseItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions - Visual cards with imagery (bento style) */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
                Solutions
              </p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              {solutionsTitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">{solutionsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item) => {
              const SolIcon = item.icon
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col rounded-2xl border border-gray-100 bg-gray-50/50 overflow-hidden hover:border-gray-200 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all duration-300"
                >
                  <div className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-colors">
                      <SolIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <IndustryApproachSection
        label="Our approach"
        title={sectionBelowTitle}
        subtitle={sectionBelowSubtitle}
        items={sectionBelowItems}
      />

      {/* Related Industries - Visual grid with images */}
      <section className="section-spacing bg-gray-50">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
                Related
              </p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              Other industries we serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedIndustries.map((item) => {
              const RelIcon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group block rounded-2xl overflow-hidden border border-gray-100 bg-white hover:border-gray-200 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <RelIcon className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA - Same dark section as services for consistency */}
      <section className="relative py-28 md:py-36 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-gray-900 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(59,130,246,0.12),transparent_50%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container-wide relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight">
              {ctaTitle}
            </h2>
            <p className="text-lg md:text-xl text-white/75 mb-14 leading-relaxed">
              {ctaDescription}
            </p>
            <Link
              href="/#contact"
              className="group inline-flex items-center px-10 py-4 text-base font-semibold text-gray-900 bg-white rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Start a conversation
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer hideCTA />
    </main>
  )
}
