import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Layers, Landmark, Building2, Heart, Wifi } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Industries We Serve | A3Intel Solutions',
  description:
    'A3Intel delivers IT consulting, staffing, and managed services to government, financial services, healthcare, and telecommunications organizations.',
}

const industries = [
  {
    name: 'State & Federal Agencies',
    description: 'IT solutions for government delivering efficiency, security, and digital innovation. We support agencies at every level with FedRAMP, FISMA, and state compliance.',
    href: '/industries/government',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80',
    metric: '50+',
    metricLabel: 'Agencies',
    icon: Landmark,
  },
  {
    name: 'Banking & Financial Services',
    description: 'Secure, compliant IT solutions for banking, insurance, and asset management. We help financial institutions modernize infrastructure while meeting regulatory requirements.',
    href: '/industries/financial-services',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    metric: '50+',
    metricLabel: 'Institutions',
    icon: Building2,
  },
  {
    name: 'Healthcare & Life Sciences',
    description: 'HIPAA-compliant IT solutions for hospitals, health systems, and life sciences. We support clinical systems, data analytics, and digital health initiatives.',
    href: '/industries/healthcare',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
    metric: '200+',
    metricLabel: 'Clients',
    icon: Heart,
  },
  {
    name: 'Telecommunications',
    description: 'IT solutions for telecom operators, network infrastructure, and digital services. We help carriers modernize, scale, and secure their technology platforms.',
    href: '/industries/telecom',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    metric: '30+',
    metricLabel: 'Partners',
    icon: Wifi,
  },
]

export default function IndustriesIndexPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 md:pb-24 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <Layers className="w-4 h-4 text-gray-400" />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Industries</p>
            </div>
            <h1 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              Markets we serve
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We serve state and federal government, banking and financial services, healthcare, and telecommunications with industry-specific expertise. Our consultants understand your regulatory environment, operational constraints, and strategic priorities.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <Link
                  key={industry.name}
                  href={industry.href}
                  className="group block"
                >
                  <article className="h-full border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-gray-200 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] transition-all duration-300">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={industry.image}
                        alt={industry.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className="w-5 h-5 text-blue-400" />
                          <span className="text-sm text-white/80">
                            {industry.metric} {industry.metricLabel}
                          </span>
                        </div>
                        <h2 className="font-serif text-heading-lg md:text-display-sm text-white mb-4">
                          {industry.name}
                        </h2>
                        <span className="inline-flex items-center text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                          Explore solutions
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <p className="text-gray-600 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              Not sure where to start?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our team can help you identify the right solutions for your organization, regardless of industry.
            </p>
            <Link
              href="/#contact"
              className="group inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all shadow-lg"
            >
              Get in touch
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
