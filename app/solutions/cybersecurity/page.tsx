import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Shield, Lock, Search, FileCheck, Server, Eye, Lightbulb, Cloud, Briefcase } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SolutionFAQ from '@/components/SolutionFAQ'
import SolutionMetrics from '@/components/SolutionMetrics'

export const metadata: Metadata = {
  title: 'IT Security Services | A3Intel Solutions',
  description:
    'Security assessments, vulnerability testing, and risk management for enterprise and healthcare organizations. Protect your systems and data.',
}

const capabilities = [
  {
    icon: Search,
    title: 'Security Assessments',
    description:
      'Comprehensive evaluations of your infrastructure, applications, and policies to identify gaps and recommend improvements.',
  },
  {
    icon: Lock,
    title: 'Vulnerability Testing',
    description:
      'Penetration testing, vulnerability scans, and red team exercises to find and fix weaknesses before attackers do.',
  },
  {
    icon: FileCheck,
    title: 'Compliance & Audits',
    description:
      'HIPAA, SOC 2, FedRAMP, and other frameworks. We help you prepare for audits and maintain compliance.',
  },
  {
    icon: Server,
    title: 'Identity & Access Management',
    description:
      'IAM design, MFA rollout, and access controls to ensure the right people have the right access.',
  },
  {
    icon: Eye,
    title: 'Security Monitoring',
    description:
      'SIEM, threat detection, and incident response to detect and respond to threats in real time.',
  },
  {
    icon: Shield,
    title: 'Security Strategy',
    description:
      'Security roadmaps, policy development, and program maturity to align security with business goals.',
  },
]

const approachSteps = [
  {
    step: '01',
    title: 'Assess',
    description:
      'We evaluate your current security posture, identify risks, and prioritize findings based on impact and likelihood.',
  },
  {
    step: '02',
    title: 'Remediate',
    description:
      'We help you fix vulnerabilities, harden systems, and implement controls to reduce risk.',
  },
  {
    step: '03',
    title: 'Monitor & Sustain',
    description:
      'We establish ongoing monitoring, incident response, and processes to maintain security over time.',
  },
]

const relatedSolutions = [
  { title: 'IT Strategy Consulting', href: '/solutions/consulting', description: 'Technology roadmaps and planning.', icon: Lightbulb },
  { title: 'Cloud Computing Solutions', href: '/solutions/cloud', description: 'Secure cloud architecture.', icon: Cloud },
  { title: 'Managed IT Services', href: '/solutions/managed-services', description: '24/7 monitoring and support.', icon: Server },
]

const faqItems = [
  {
    id: 'assessments',
    question: 'What does a security assessment include?',
    answer:
      'Assessments typically cover infrastructure, applications, policies, and access controls. We deliver a findings report with prioritized recommendations and remediation guidance.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  },
  {
    id: 'pen-testing',
    question: 'Do you offer penetration testing?',
    answer:
      'Yes. We conduct controlled penetration tests to identify exploitable vulnerabilities. We work with you to scope the engagement and remediate findings.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
  },
  {
    id: 'compliance',
    question: 'Can you help with HIPAA or FedRAMP compliance?',
    answer:
      'Yes. We have experience with healthcare (HIPAA) and government (FedRAMP, FISMA) requirements. We help you assess gaps and implement controls.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    id: 'ongoing',
    question: 'Do you provide ongoing security support?',
    answer:
      'Yes. We offer managed security services including monitoring, incident response, and periodic assessments to maintain your security posture.',
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80',
  },
]

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pb-28 min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80"
            alt="IT Security"
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
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-medium text-white/60 uppercase tracking-[0.2em]">Security</span>
          </div>
          <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight max-w-3xl">
            IT Security Services
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-4 leading-relaxed">
            Security assessments, vulnerability testing, and risk management.
          </p>
          <p className="text-sm text-white/50 max-w-2xl mb-8">
            HIPAA, FedRAMP, SOC 2 • Enterprise and healthcare
          </p>
          <Link href="/#contact" className="group inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all shadow-lg">
            Start a conversation <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <SolutionMetrics
        stats={[
          { value: 75, suffix: '+', label: 'Security assessments completed' },
          { value: 99, suffix: '%', label: 'Critical findings remediated' },
          { value: 50, suffix: '+', label: 'Healthcare and government clients' },
          { staticValue: '24/7', label: 'Incident response available' },
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
                Protect your systems and data
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We help enterprises and healthcare organizations assess, strengthen, and sustain their security posture. From vulnerability assessments to compliance readiness and ongoing monitoring, we bring practical expertise to reduce risk.
                </p>
                <p>
                  Our approach is tailored to your industry and risk profile. We prioritize findings based on impact, work with your team on remediation, and help you build processes that keep security strong over time.
                </p>
                <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Common challenges we help solve</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Unknown vulnerabilities and exposure</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Compliance and audit readiness</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Limited security expertise in-house</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Incident detection and response</li>
                  </ul>
                </div>
                <p>
                  Whether you need a one-time assessment, penetration test, or ongoing security support, we deliver actionable results that fit your budget and timeline.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                  <h3 className="font-semibold text-gray-900 mb-2">Ideal for</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Organizations that need to strengthen security and meet compliance requirements.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Healthcare (HIPAA)</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Government (FedRAMP)</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Financial services</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Pre-audit preparation</li>
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
              End-to-end security services from assessment to ongoing monitoring.
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
              A risk-based approach to security improvement.
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

      <SolutionFAQ items={faqItems} subtitle="Answers to questions we hear most often about IT security services." />

      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Related</p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">Related solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore other services that complement IT security.
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
              Ready to strengthen your security?
            </h2>
            <p className="text-lg md:text-xl text-white/75 mb-14 leading-relaxed">
              Let&apos;s discuss your security goals and how we can help.
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
