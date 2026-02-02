import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Cloud, Server, Database, Lock, Zap, RefreshCw, Lightbulb, Shield, Briefcase } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SolutionFAQ from '@/components/SolutionFAQ'
import SolutionMetrics from '@/components/SolutionMetrics'

export const metadata: Metadata = {
  title: 'Cloud Computing Solutions | A3Intel Solutions',
  description:
    'Cloud migration, deployment, and management. Cut costs and improve agility with AWS, Azure, and hybrid cloud solutions for enterprise and healthcare.',
}

const capabilities = [
  {
    icon: Server,
    title: 'Cloud Migration',
    description:
      'Lift-and-shift or refactoring strategies for moving workloads to AWS, Azure, or hybrid environments with minimal disruption.',
  },
  {
    icon: Database,
    title: 'Cloud Architecture',
    description:
      'Design and implement scalable, resilient architectures optimized for performance, cost, and compliance.',
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    description:
      'Identity management, encryption, and compliance controls for HIPAA, FedRAMP, and industry regulations.',
  },
  {
    icon: Zap,
    title: 'Cost Optimization',
    description:
      'Right-sizing, reserved capacity, and FinOps practices to reduce cloud spend while maintaining performance.',
  },
  {
    icon: RefreshCw,
    title: 'DevOps & Automation',
    description:
      'CI/CD pipelines, infrastructure as code, and automation to accelerate delivery and reduce manual effort.',
  },
  {
    icon: Cloud,
    title: 'Managed Cloud Operations',
    description:
      '24/7 monitoring, incident response, and ongoing management so you can focus on your business.',
  },
]

const approachSteps = [
  {
    step: '01',
    title: 'Assessment & Planning',
    description:
      'We evaluate your current infrastructure, applications, and goals to create a migration and cloud strategy that fits your needs.',
  },
  {
    step: '02',
    title: 'Design & Build',
    description:
      'We design the target architecture, set up environments, and migrate workloads using proven methodologies.',
  },
  {
    step: '03',
    title: 'Operate & Optimize',
    description:
      'We support ongoing operations, monitor performance, and continuously optimize for cost and efficiency.',
  },
]

const relatedSolutions = [
  { title: 'IT Strategy Consulting', href: '/solutions/consulting', description: 'Technology roadmaps and planning.', icon: Lightbulb },
  { title: 'IT Security Services', href: '/solutions/cybersecurity', description: 'Security assessments and hardening.', icon: Shield },
  { title: 'Digital Transformation', href: '/solutions/digital-transformation', description: 'Modern apps and workflows.', icon: Briefcase },
]

const faqItems = [
  {
    id: 'providers',
    question: 'Which cloud providers do you work with?',
    answer:
      'We work with AWS, Microsoft Azure, and Google Cloud, as well as hybrid and multi-cloud setups. We recommend based on your workload, compliance, and existing investments.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
  {
    id: 'timeline',
    question: 'How long does a cloud migration take?',
    answer:
      'It depends on scope—from weeks for focused workloads to months for full enterprise migrations. We phase migrations to deliver value early and reduce risk.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
  },
  {
    id: 'healthcare',
    question: 'Do you support healthcare and regulated workloads?',
    answer:
      'Yes. We have experience with HIPAA, HITRUST, and FedRAMP requirements. We design for compliance from the start.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    id: 'hybrid',
    question: 'Can you support hybrid or multi-cloud?',
    answer:
      'Absolutely. Many clients keep some workloads on-premises or spread across providers. We design and manage hybrid and multi-cloud architectures.',
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80',
  },
]

export default function CloudPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pb-28 min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
            alt="Cloud Computing"
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
            <Cloud className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-medium text-white/60 uppercase tracking-[0.2em]">Cloud</span>
          </div>
          <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight max-w-3xl">
            Cloud Computing Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-4 leading-relaxed">
            Migration, deployment, and management to cut costs and improve agility.
          </p>
          <p className="text-sm text-white/50 max-w-2xl mb-8">
            AWS, Azure, hybrid • Healthcare & government compliant
          </p>
          <Link href="/#contact" className="group inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all shadow-lg">
            Start a conversation <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <SolutionMetrics
        stats={[
          { value: 100, suffix: '+', label: 'Cloud migrations completed' },
          { value: 15, suffix: '%', label: 'Average cost reduction' },
          { value: 99, suffix: '.9%', label: 'Uptime SLA' },
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
                Cloud infrastructure that scales with your business
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We help enterprises and healthcare organizations move to the cloud, optimize spend, and operate with confidence. From migration planning to ongoing management, we bring deep experience across AWS, Azure, and hybrid environments.
                </p>
                <p>
                  Our approach balances speed and risk—we phase migrations to deliver value early while protecting critical workloads. We design for security and compliance from day one, with HIPAA, FedRAMP, and industry standards in mind.
                </p>
                <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Common challenges we help solve</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Legacy systems blocking cloud adoption</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Unpredictable cloud costs</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Compliance and security concerns</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Limited in-house cloud expertise</li>
                  </ul>
                </div>
                <p>
                  Whether you are modernizing applications, consolidating data centers, or scaling for growth, we provide the strategy, execution, and ongoing support you need.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                  <h3 className="font-semibold text-gray-900 mb-2">Ideal for</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Organizations ready to leverage cloud for cost savings, agility, and scalability.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Data center consolidation</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Application modernization</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Healthcare and government</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Scaling for growth</li>
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
              End-to-end cloud services from migration to ongoing management.
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
              A phased, risk-managed process for cloud adoption.
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

      <SolutionFAQ items={faqItems} subtitle="Answers to questions we hear most often about cloud computing." />

      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Related</p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">Related solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore other services that complement cloud computing.
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
              Ready to move to the cloud?
            </h2>
            <p className="text-lg md:text-xl text-white/75 mb-14 leading-relaxed">
              Let&apos;s discuss your infrastructure goals and how we can help you get there.
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
