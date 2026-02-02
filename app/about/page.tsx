import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, Zap, Shield, Heart, Building2 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us | A3Intel Solutions',
  description:
    'A3Intel delivers IT consulting, staffing, and managed services to enterprise and healthcare organizations. Learn about our mission, values, and team.',
}

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We deliver on our commitments and operate with transparency in every engagement. Our clients trust us because we earn it.',
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'We bring deep expertise and a commitment to quality in everything we do. We don\'t settle for good enough—we aim for exceptional.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We succeed when our clients succeed. We work alongside you as an extension of your team, not as a vendor checking boxes.',
  },
  {
    icon: Heart,
    title: 'Care',
    description: 'We care about the people we work with—our clients, our consultants, and the communities we serve. It shows in how we operate.',
  },
]

const stats = [
  { value: '500+', label: 'Projects delivered' },
  { value: '200+', label: 'Consultants' },
  { value: '98%', label: 'Client retention' },
  { value: '10+', label: 'Years in business' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pb-28 min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="A3Intel Team"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        </div>
        <div className="relative container-wide w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-white/30" aria-hidden />
            <Building2 className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-medium text-white/60 uppercase tracking-[0.2em]">About</span>
          </div>
          <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight max-w-3xl">
            Building lasting partnerships through technology
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-8 leading-relaxed">
            A3Intel delivers IT consulting, staffing, and managed services to enterprise and healthcare organizations. We combine deep technical expertise with a commitment to understanding your business—so we can deliver solutions that matter.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gray-300" aria-hidden />
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Our Story</p>
              </div>
              <h2 className="font-serif text-heading-lg md:text-display-sm text-gray-900 mb-6 tracking-tight">
                Who we are
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  A3Intel was founded on a simple belief: technology should serve business outcomes, not the other way around. We started with a focus on delivering pragmatic IT consulting and staffing to organizations that needed expertise without the overhead of large consultancies.
                </p>
                <p>
                  Over the years, we have grown into a trusted partner for enterprises and healthcare organizations across government, financial services, healthcare, and telecommunications. Our team of consultants brings decades of collective experience—from cloud migration and cybersecurity to clinical systems and digital transformation.
                </p>
                <p>
                  We are headquartered in Katy, Texas, with a presence in Hyderabad, India, enabling us to support clients across time zones and geographies. We are E-Verify compliant and committed to building a diverse, inclusive team that reflects the communities we serve.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                  <h3 className="font-semibold text-gray-900 mb-4">By the numbers</h3>
                  <div className="space-y-6">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="font-serif text-2xl text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">What we believe</p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              Our values
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              These principles guide how we work with clients, consultants, and each other.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-blue-600 mb-5" />
                  <h3 className="font-serif text-lg text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gray-300" aria-hidden />
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Our Mission</p>
              </div>
              <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
                Technology solutions that deliver results
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our mission is to help organizations leverage technology to achieve their goals—whether that means modernizing infrastructure, scaling talent, or transforming how they work. We believe in solutions that are practical, secure, and built for the long term.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about/leadership"
                  className="group inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
                >
                  Meet our leadership
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/careers"
                  className="group inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all"
                >
                  Join our team
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="A3Intel office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-36 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-gray-900 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(59,130,246,0.12),transparent_50%)]" />
        <div className="container-wide relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight">
              Ready to work with us?
            </h2>
            <p className="text-lg md:text-xl text-white/75 mb-14 leading-relaxed">
              Let&apos;s discuss how A3Intel can help your organization achieve its technology goals.
            </p>
            <Link href="/#contact" className="group inline-flex items-center px-10 py-4 text-base font-semibold text-gray-900 bg-white rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
              Get in touch <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
