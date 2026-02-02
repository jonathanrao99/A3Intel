import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Server, Headphones, Shield, Zap, Monitor, Wifi, Lightbulb, Cloud, Users } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SolutionFAQ from '@/components/SolutionFAQ'
import SolutionMetrics from '@/components/SolutionMetrics'

export const metadata: Metadata = {
  title: 'Managed IT Services | A3Intel Solutions',
  description:
    'Network monitoring, help desk, and server maintenance to reduce downtime. 24/7 managed IT support for enterprise and healthcare.',
}

const capabilities = [
  {
    icon: Monitor,
    title: 'Help Desk & Support',
    description:
      'Tier 1–3 support for end users and systems. Fast response times and escalation paths for critical issues.',
  },
  {
    icon: Server,
    title: 'Server & Infrastructure',
    description:
      'Proactive monitoring, patch management, and maintenance for servers, storage, and network equipment.',
  },
  {
    icon: Wifi,
    title: 'Network Management',
    description:
      'Monitoring, configuration, and optimization of networks to ensure availability and performance.',
  },
  {
    icon: Shield,
    title: 'Backup & Recovery',
    description:
      'Automated backups, disaster recovery planning, and tested restore procedures to protect your data.',
  },
  {
    icon: Zap,
    title: 'Proactive Monitoring',
    description:
      '24/7 monitoring of systems, applications, and infrastructure to detect and resolve issues before they impact users.',
  },
  {
    icon: Headphones,
    title: 'Vendor Management',
    description:
      'Coordination with carriers, cloud providers, and software vendors to simplify your IT operations.',
  },
]

const approachSteps = [
  {
    step: '01',
    title: 'Onboarding',
    description:
      'We assess your environment, document systems, and establish monitoring, ticketing, and escalation processes.',
  },
  {
    step: '02',
    title: 'Operate',
    description:
      'We handle day-to-day support, monitoring, and maintenance. You get a single point of contact and predictable SLAs.',
  },
  {
    step: '03',
    title: 'Optimize',
    description:
      'We continuously improve processes, reduce incidents, and recommend enhancements to your infrastructure.',
  },
]

const relatedSolutions = [
  { title: 'IT Strategy Consulting', href: '/solutions/consulting', description: 'Technology roadmaps.', icon: Lightbulb },
  { title: 'Cloud Computing Solutions', href: '/solutions/cloud', description: 'Cloud infrastructure.', icon: Cloud },
  { title: 'IT Staffing Solutions', href: '/solutions/it-staffing', description: 'Augment your team.', icon: Users },
]

const faqItems = [
  {
    id: 'scope',
    question: 'What is included in managed IT services?',
    answer:
      'Typically: 24/7 monitoring, help desk support, patch management, backup verification, and proactive maintenance. Scope is customized to your environment and needs.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 'slas',
    question: 'What SLAs do you offer?',
    answer:
      'We offer tiered SLAs based on severity—from critical (15–30 min response) to low (next business day). Uptime and resolution targets are defined in your agreement.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
  },
  {
    id: 'healthcare',
    question: 'Do you support healthcare organizations?',
    answer:
      'Yes. We have experience with HIPAA-compliant environments and understand the requirements for healthcare IT operations.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    id: 'hybrid',
    question: 'Can you manage hybrid (on-prem + cloud) environments?',
    answer:
      'Yes. We manage both on-premises infrastructure and cloud resources, with a unified view and single support experience.',
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80',
  },
]

export default function ManagedServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pb-28 min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
            alt="Managed IT Services"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        </div>
        <div className="relative container-wide w-full">
          <Link href="/#services" className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> All solutions
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-white/30" aria-hidden />
            <Server className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-medium text-white/60 uppercase tracking-[0.2em]">Managed Services</span>
          </div>
          <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight max-w-3xl">
            Managed IT Services
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-4 leading-relaxed">
            Network monitoring, help desk, and server maintenance to reduce downtime.
          </p>
          <p className="text-sm text-white/50 max-w-2xl mb-8">
            24/7 support • Healthcare and enterprise
          </p>
          <Link href="/#contact" className="group inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all shadow-lg">
            Start a conversation <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <SolutionMetrics
        stats={[
          { value: 98, suffix: '%', label: 'Uptime SLA' },
          { value: 200, suffix: '+', label: 'Systems under management' },
          { staticValue: '15 min', label: 'Avg response time (critical)' },
          { staticValue: '24/7', label: 'Monitoring and support' },
        ]}
      />

      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gray-300" aria-hidden />
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Overview</p>
              </div>
              <h2 className="font-serif text-heading-lg md:text-display-sm text-gray-900 mb-6 tracking-tight">
                Reliable IT operations, predictable costs
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We provide managed IT services so you can focus on your business instead of infrastructure. From help desk to 24/7 monitoring, we handle the day-to-day so your systems stay up and your team stays productive.
                </p>
                <p>
                  Our approach combines proactive monitoring with fast response times. We fix issues before they become outages, and when something does happen, we resolve it quickly with clear communication.
                </p>
                <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Common challenges we help solve</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Unpredictable downtime and fires</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Limited in-house IT capacity</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Inconsistent support quality</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Rising IT operational costs</li>
                  </ul>
                </div>
                <p>
                  Whether you need full managed services or augmenting an existing team, we tailor the scope to your environment and budget.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                  <h3 className="font-semibold text-gray-900 mb-2">Ideal for</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Organizations that want predictable IT support without growing headcount.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Small to mid-size enterprises</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Healthcare practices</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Government agencies</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Teams with limited IT staff</li>
                  </ul>
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
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">What we offer</p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">Capabilities</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Comprehensive managed IT services tailored to your environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all duration-300">
                  <Icon className="w-6 h-6 text-blue-600 mb-5" />
                  <h3 className="font-serif text-lg text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">How we work</p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">Our approach</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A structured onboarding and ongoing operations model.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {approachSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-6">
                  <span className="font-serif text-3xl text-gray-300 tracking-tight shrink-0">{step.step}</span>
                  <div>
                    <h3 className="font-serif text-heading text-gray-900 mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolutionFAQ items={faqItems} subtitle="Answers to questions we hear most often about managed IT services." />

      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Related</p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">Related solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore other services that complement managed IT.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedSolutions.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.title} href={item.href} className="group flex items-center gap-4 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] transition-all duration-300">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-gray-700 shrink-0 transition-colors" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-0.5 group-hover:text-gray-700 transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-36 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-gray-900 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(59,130,246,0.12),transparent_50%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container-wide relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight">
              Ready for predictable IT operations?
            </h2>
            <p className="text-lg md:text-xl text-white/75 mb-14 leading-relaxed">
              Let&apos;s discuss your IT needs and how we can help.
            </p>
            <Link href="/#contact" className="group inline-flex items-center px-10 py-4 text-base font-semibold text-gray-900 bg-white rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
              Start a conversation <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer hideCTA />
    </main>
  )
}
