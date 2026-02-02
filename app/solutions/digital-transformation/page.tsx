import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Sparkles, Layout, Code, Zap, Target, PenTool, Lightbulb, Cloud, Shield } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SolutionFAQ from '@/components/SolutionFAQ'
import SolutionMetrics from '@/components/SolutionMetrics'

export const metadata: Metadata = {
  title: 'Digital Transformation Services | A3Intel Solutions',
  description:
    'Digital strategy, UX design, and app development for modern workflows. Transform your business with user-centered technology solutions.',
}

const capabilities = [
  {
    icon: Target,
    title: 'Digital Strategy',
    description:
      'We help define digital vision, prioritize initiatives, and align technology investments with business outcomes.',
  },
  {
    icon: PenTool,
    title: 'UX Research & Design',
    description:
      'User research, journey mapping, and interface design to create intuitive, effective digital experiences.',
  },
  {
    icon: Code,
    title: 'Application Development',
    description:
      'Custom web and mobile applications built with modern stacks. From MVPs to enterprise systems.',
  },
  {
    icon: Layout,
    title: 'Process Automation',
    description:
      'Workflow automation, integration, and digitization to reduce manual effort and improve efficiency.',
  },
  {
    icon: Zap,
    title: 'Platform Modernization',
    description:
      'Modernizing legacy applications and workflows to improve usability, performance, and maintainability.',
  },
  {
    icon: Sparkles,
    title: 'Change Management',
    description:
      'Training, communication, and adoption support so your team embraces new tools and processes.',
  },
]

const approachSteps = [
  {
    step: '01',
    title: 'Discover & Define',
    description:
      'We research user needs, map current processes, and define scope, priorities, and success metrics.',
  },
  {
    step: '02',
    title: 'Design & Develop',
    description:
      'We design the experience, validate with users, and build in iterative cycles. You see progress early and often.',
  },
  {
    step: '03',
    title: 'Deploy & Evolve',
    description:
      'We launch, train users, and support adoption. We also help plan for ongoing enhancements and iteration.',
  },
]

const relatedSolutions = [
  { title: 'IT Strategy Consulting', href: '/solutions/consulting', description: 'Technology roadmaps.', icon: Lightbulb },
  { title: 'Cloud Computing Solutions', href: '/solutions/cloud', description: 'Cloud infrastructure.', icon: Cloud },
  { title: 'IT Security Services', href: '/solutions/cybersecurity', description: 'Secure by design.', icon: Shield },
]

const faqItems = [
  {
    id: 'scope',
    question: 'What does a digital transformation engagement typically include?',
    answer:
      'It varies—from strategy and discovery only to full design and development. We tailor scope to your goals, budget, and timeline. Many engagements start with a discovery phase before committing to build.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 'platforms',
    question: 'What platforms and technologies do you use?',
    answer:
      'We use modern web and mobile stacks—React, Next.js, Node, cloud-native services, and more. We choose based on your requirements, existing systems, and long-term maintainability.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
  },
  {
    id: 'healthcare',
    question: 'Do you work with healthcare and regulated industries?',
    answer:
      'Yes. We have experience building solutions for healthcare, government, and financial services—with compliance and security built in from the start.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    id: 'mvp',
    question: 'Can you build an MVP or proof of concept?',
    answer:
      'Yes. We often start with MVPs or POCs to validate ideas before full investment. We design for iteration so you can scale what works.',
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80',
  },
]

export default function DigitalTransformationPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pb-28 min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Digital Transformation"
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
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-medium text-white/60 uppercase tracking-[0.2em]">Digital Transformation</span>
          </div>
          <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight max-w-3xl">
            Digital Transformation Services
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-4 leading-relaxed">
            Digital strategy, UX design, and app development for modern workflows.
          </p>
          <p className="text-sm text-white/50 max-w-2xl mb-8">
            Strategy to delivery • Healthcare and enterprise
          </p>
          <Link href="/#contact" className="group inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all shadow-lg">
            Start a conversation <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <SolutionMetrics
        stats={[
          { value: 50, suffix: '+', label: 'Digital projects delivered' },
          { value: 40, suffix: '%', label: 'Average efficiency gain' },
          { value: 95, suffix: '%', label: 'User satisfaction (post-launch)' },
          { staticValue: 'MVP', label: 'To enterprise scale' },
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
                Modern technology for modern workflows
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We help enterprises and healthcare organizations transform how they work through digital strategy, user-centered design, and custom application development. From defining a digital vision to building and launching products, we bring end-to-end capability.
                </p>
                <p>
                  Our approach starts with users and processes—we understand the problem before we build the solution. We design iteratively, deliver in increments, and support adoption so change sticks.
                </p>
                <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Common challenges we help solve</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Manual, paper-based processes</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Legacy systems that limit agility</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Poor user experience and adoption</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Need for custom applications</li>
                  </ul>
                </div>
                <p>
                  Whether you need strategy only, design and development, or full transformation support, we adapt our engagement to your goals and constraints.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                  <h3 className="font-semibold text-gray-900 mb-2">Ideal for</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Organizations ready to digitize processes and build modern applications.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Process digitization</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Custom application development</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />UX and workflow improvement</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />MVP and product validation</li>
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
              From strategy to design to development and beyond.
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
              User-centered, iterative, and outcome-focused.
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

      <SolutionFAQ items={faqItems} subtitle="Answers to questions we hear most often about digital transformation." />

      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Related</p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">Related solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore other services that complement digital transformation.
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
              Ready to transform how you work?
            </h2>
            <p className="text-lg md:text-xl text-white/75 mb-14 leading-relaxed">
              Let&apos;s discuss your digital goals and how we can help.
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
