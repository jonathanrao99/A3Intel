import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Lightbulb, Target, Zap, Users, Cloud, Shield, Briefcase, BarChart3, FileCheck, Layers } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SolutionFAQ from '@/components/SolutionFAQ'
import SolutionMetrics from '@/components/SolutionMetrics'

export const metadata: Metadata = {
  title: 'IT Strategy Consulting | A3Intel Solutions',
  description:
    'Align technology with business goals. Expert IT strategy consulting to develop comprehensive technology plans for enterprises and healthcare organizations.',
}

const capabilities = [
  {
    icon: Target,
    title: 'Strategic Technology Assessment',
    description:
      'We evaluate your current IT landscape, identify gaps, and define a roadmap that supports your business objectives and growth plans.',
  },
  {
    icon: Zap,
    title: 'Digital Transformation Roadmaps',
    description:
      'From cloud migration to modernizing legacy systems, we design phased transformation plans that minimize risk and maximize ROI.',
  },
  {
    icon: Users,
    title: 'Organizational Readiness',
    description:
      'We help align teams, processes, and governance structures so your organization can execute on the strategy we create together.',
  },
  {
    icon: BarChart3,
    title: 'Investment & Resource Planning',
    description:
      'Clear cost modeling, TCO analysis, and resource allocation recommendations so you can plan budgets and staffing with confidence.',
  },
  {
    icon: FileCheck,
    title: 'Governance & Compliance',
    description:
      'Policies, controls, and compliance frameworks tailored to your industry—healthcare, financial services, or government.',
  },
  {
    icon: Layers,
    title: 'Technology Modernization',
    description:
      'Legacy system assessment, migration planning, and modernization roadmaps to reduce technical debt and improve agility.',
  },
]

const approachSteps = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description:
      'We start by understanding your business goals, current state, and constraints. Deep-dive workshops and stakeholder interviews inform our analysis. We review existing systems, spending, and pain points to build a complete picture.',
  },
  {
    step: '02',
    title: 'Strategy & Roadmap',
    description:
      'We deliver a documented strategy and prioritized roadmap with clear milestones, investment requirements, and success metrics. You get an executive-ready presentation and a detailed plan your team can implement.',
  },
  {
    step: '03',
    title: 'Execution Support',
    description:
      'We stand alongside you during implementation—providing guidance, change management support, and hands-on execution when needed. Our involvement is flexible based on your internal capacity.',
  },
]

const relatedSolutions = [
  {
    title: 'Cloud Computing Solutions',
    href: '/solutions/cloud',
    description: 'Migration, deployment, and management.',
    icon: Cloud,
  },
  {
    title: 'IT Security Services',
    href: '/solutions/cybersecurity',
    description: 'Assessments, testing, and risk management.',
    icon: Shield,
  },
  {
    title: 'Digital Transformation',
    href: '/solutions/digital-transformation',
    description: 'Strategy, UX design, and app development.',
    icon: Briefcase,
  },
]


export default function ConsultingPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pb-28 min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=1920&q=80"
            alt="IT Strategy Consulting"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        </div>

        <div className="relative container-wide w-full">
          <Link
            href="/#services"
            className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All solutions
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-white/30" aria-hidden />
            <Lightbulb className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-medium text-white/60 uppercase tracking-[0.2em]">
              Consulting
            </span>
          </div>

          <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight max-w-3xl">
            IT Strategy Consulting
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-4 leading-relaxed">
            Align technology with business goals. We build IT plans that fit your needs and deliver measurable outcomes.
          </p>
          <p className="text-sm text-white/50 max-w-2xl mb-8">
            Typical engagements: 4–12 weeks • Government, healthcare, financial services
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

      {/* Metrics */}
      <SolutionMetrics
        stats={[
          { value: 50, suffix: '+', label: 'Strategy engagements delivered' },
          { value: 10, suffix: '+', label: 'Years of consulting experience' },
          { value: 98, suffix: '%', label: 'Client retention rate' },
          { staticValue: '4–12', label: 'Weeks typical engagement' },
        ]}
      />

      {/* Overview */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gray-300" aria-hidden />
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
                  Overview
                </p>
              </div>
              <h2 className="font-serif text-heading-lg md:text-display-sm text-gray-900 mb-6 tracking-tight">
                Technology strategy that drives business results
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Effective IT strategy goes beyond tools and platforms—it connects technology investments to business outcomes. Our consultants work with you to assess your current state, define a clear vision, and build a roadmap that your organization can execute.
                </p>
                <p>
                  We serve enterprises and healthcare organizations that need pragmatic, actionable plans—not shelf-ware. Our approach combines deep technical expertise with an understanding of operational realities, governance, and change management.
                </p>
                <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Common challenges we help solve</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      Misaligned tech spend and unclear ROI
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      Cloud migration stalled or lacking direction
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      Board and leadership needing clarity on strategy
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      Legacy systems blocking growth and agility
                    </li>
                  </ul>
                </div>
                <p>
                  Whether you are planning a cloud migration, consolidating systems, or aligning IT with a new business strategy, we bring structure and clarity to the process. Our deliverables are designed to be used—by your leadership team, board, and implementation partners.
                </p>
                <p>
                  We focus on what matters: clear priorities, realistic timelines, and investment levels that align with your budget. Every recommendation is backed by industry best practices and our experience across government, healthcare, and financial services.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ideal for
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Organizations and leaders who need a practical, executable technology strategy.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      CIOs and IT leaders planning transformation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      Organizations preparing for cloud migration
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      Healthcare and regulated industries
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      Teams aligning IT with business strategy
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      Boards and leadership needing clarity on tech spend
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-spacing bg-gray-50">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
                What we offer
              </p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              Capabilities
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our IT strategy consulting spans assessment, roadmap development, and execution support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-blue-600 mb-5" />
                  <h3 className="font-serif text-lg text-gray-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
                How we work
              </p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              Our approach
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A structured, collaborative process that produces strategies you can act on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {approachSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-6">
                  <span className="font-serif text-3xl text-gray-300 tracking-tight shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-heading text-gray-900 mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <SolutionFAQ
        items={[
          {
            id: 'scope',
            question: 'What does an IT strategy engagement typically include?',
            answer:
              'Our engagements typically include a discovery phase (stakeholder interviews, current-state assessment), strategy development (vision, priorities, roadmap), and documentation (written strategy, investment requirements, success metrics). We can also provide execution support during implementation.',
            image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80',
          },
          {
            id: 'timeline',
            question: 'How long does an IT strategy project take?',
            answer:
              'Most strategy engagements run 4–12 weeks depending on scope and organization size. A focused assessment might take 4–6 weeks; a comprehensive strategy with roadmap and governance can take 8–12 weeks. We tailor the timeline to your needs.',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
          },
          {
            id: 'deliverables',
            question: 'What deliverables can we expect?',
            answer:
              'You will receive a documented strategy, prioritized roadmap with milestones, investment and resource estimates, governance recommendations, and a presentation for leadership. We also provide implementation support options if you want hands-on help during rollout.',
            image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
          },
          {
            id: 'industries',
            question: 'Do you work with regulated industries?',
            answer:
              'Yes. We have extensive experience in healthcare (HIPAA), financial services, and government. Our approach incorporates compliance and regulatory considerations from the start.',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
          },
        ]}
        subtitle="Answers to questions we hear most often about IT strategy consulting."
      />

      {/* Related solutions */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
                Related
              </p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              Related solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore other services that complement IT strategy consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedSolutions.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center gap-4 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-gray-700 shrink-0 transition-colors" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-0.5 group-hover:text-gray-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-36 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-gray-900 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(59,130,246,0.12),transparent_50%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container-wide relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight">
              Ready to align your IT with your business?
            </h2>
            <p className="text-lg md:text-xl text-white/75 mb-14 leading-relaxed">
              Let&apos;s discuss your goals and how we can help you build a technology strategy that delivers.
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
