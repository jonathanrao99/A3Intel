import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Users, FileSearch, Calendar, Award, Briefcase, Lightbulb, Cloud, Server, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SolutionFAQ from '@/components/SolutionFAQ'
import SolutionMetrics from '@/components/SolutionMetrics'

export const metadata: Metadata = {
  title: 'IT Staffing Solutions | A3Intel Solutions',
  description:
    'Vetted IT professionals for full-time, part-time, or contract roles. Enterprise and healthcare staffing with E-Verify compliance.',
}

const capabilities = [
  {
    icon: FileSearch,
    title: 'Talent Sourcing',
    description:
      'We source and screen IT professionals across development, infrastructure, security, and data roles.',
  },
  {
    icon: Award,
    title: 'Vetting & Assessment',
    description:
      'Technical assessments, reference checks, and skill validation to ensure fit for your environment.',
  },
  {
    icon: Calendar,
    title: 'Flexible Engagement',
    description:
      'Full-time, part-time, contract, or contract-to-hire. We match the engagement model to your needs.',
  },
  {
    icon: Users,
    title: 'Specialized Roles',
    description:
      'Developers, cloud architects, security analysts, project managers, and more. Healthcare and government experience available.',
  },
  {
    icon: Briefcase,
    title: 'Onboarding Support',
    description:
      'We help smooth onboarding—background checks, compliance, and coordination with your HR and IT teams.',
  },
  {
    icon: CheckCircle,
    title: 'Retention & Quality',
    description:
      'High retention rates and ongoing support to ensure long-term success. E-Verify compliant.',
  },
]

const approachSteps = [
  {
    step: '01',
    title: 'Define',
    description:
      'We clarify role requirements, skills, experience, and engagement type. We understand your team, culture, and timeline.',
  },
  {
    step: '02',
    title: 'Source & Match',
    description:
      'We identify and vet candidates from our network. You review profiles and interview shortlisted candidates.',
  },
  {
    step: '03',
    title: 'Place & Support',
    description:
      'We facilitate onboarding and stay engaged to ensure a smooth start. We support retention and extension decisions.',
  },
]

const relatedSolutions = [
  { title: 'IT Strategy Consulting', href: '/solutions/consulting', description: 'Technology roadmaps.', icon: Lightbulb },
  { title: 'Managed IT Services', href: '/solutions/managed-services', description: 'Infrastructure support.', icon: Server },
  { title: 'Digital Transformation', href: '/solutions/digital-transformation', description: 'Project-based teams.', icon: Briefcase },
]

const faqItems = [
  {
    id: 'types',
    question: 'What types of roles do you staff?',
    answer:
      'We staff across IT: developers, cloud architects, security analysts, project managers, DBAs, DevOps, and more. We specialize in enterprise and healthcare environments.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
  {
    id: 'engagement',
    question: 'What engagement models do you offer?',
    answer:
      'Full-time, part-time, contract, and contract-to-hire. We tailor the model to your project timeline and hiring preferences.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
  },
  {
    id: 'everify',
    question: 'Are you E-Verify compliant?',
    answer:
      'Yes. We are E-Verify compliant and can support clients with employment eligibility verification requirements.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    id: 'timeline',
    question: 'How long does it take to place a candidate?',
    answer:
      'It varies by role and requirements. For most positions we can present qualified candidates within 1–2 weeks of engagement.',
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80',
  },
]

export default function ITStaffingPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pb-28 min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="IT Staffing"
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
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-medium text-white/60 uppercase tracking-[0.2em]">Staffing</span>
          </div>
          <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight max-w-3xl">
            IT Staffing Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-4 leading-relaxed">
            Vetted IT professionals for full-time, part-time, or contract roles.
          </p>
          <p className="text-sm text-white/50 max-w-2xl mb-8">
            E-Verify compliant • Healthcare and government experience
          </p>
          <Link href="/#contact" className="group inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all shadow-lg">
            Start a conversation <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <SolutionMetrics
        stats={[
          { value: 200, suffix: '+', label: 'Consultants deployed' },
          { value: 98, suffix: '%', label: 'Client retention rate' },
          { value: 10, suffix: '+', label: 'Years in IT staffing' },
          { staticValue: 'E-Verify', label: 'Compliant' },
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
                IT talent that fits your team
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We help enterprises and healthcare organizations find and place vetted IT professionals. Whether you need developers, cloud architects, security analysts, or project managers, we source, assess, and match talent to your requirements.
                </p>
                <p>
                  Our network includes professionals with experience in healthcare, government, and regulated industries. We are E-Verify compliant and support both contract and direct-hire placements.
                </p>
                <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Common challenges we help solve</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Difficulty finding qualified IT talent</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Project-based staffing needs</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Healthcare and compliance requirements</li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">•</span> Need for flexible engagement models</li>
                  </ul>
                </div>
                <p>
                  We focus on fit—technical skills, cultural alignment, and long-term success. Our high retention rate reflects our commitment to quality placements.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                  <h3 className="font-semibold text-gray-900 mb-2">Ideal for</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Organizations that need IT talent without the overhead of recruiting in-house.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Project-based staffing</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Healthcare and government</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Contract-to-hire</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />Specialized skill gaps</li>
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
              End-to-end IT staffing from sourcing to placement and support.
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
              A straightforward process from requirements to placement.
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

      <SolutionFAQ items={faqItems} subtitle="Answers to questions we hear most often about IT staffing." />

      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Related</p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">Related solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore other services that complement IT staffing.
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
              Ready to find the right IT talent?
            </h2>
            <p className="text-lg md:text-xl text-white/75 mb-14 leading-relaxed">
              Let&apos;s discuss your staffing needs and how we can help.
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
