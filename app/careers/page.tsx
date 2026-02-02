import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Briefcase, MapPin, Clock, Heart, Zap, Users, Globe } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Careers | A3Intel Solutions',
  description:
    'Join A3Intel. We are hiring IT consultants, project managers, and technology professionals. Explore our culture, benefits, and open positions.',
}

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision benefits for you and your family. We invest in your wellbeing.',
  },
  {
    icon: Zap,
    title: 'Growth & Development',
    description: 'Training, certifications, and learning opportunities. We support your career growth with real investment.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Work with talented colleagues and respected clients. We build teams that learn from each other.',
  },
  {
    icon: Globe,
    title: 'Flexibility',
    description: 'Remote and hybrid options where applicable. We believe in outcomes, not face time.',
  },
]

const openRoles = [
  {
    title: 'IT Consultant',
    department: 'Consulting',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    href: '/#contact',
  },
  {
    title: 'Cloud Solutions Architect',
    department: 'Cloud & Infrastructure',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    href: '/#contact',
  },
  {
    title: 'Cybersecurity Analyst',
    department: 'Security',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    href: '/#contact',
  },
  {
    title: 'Healthcare IT Specialist',
    department: 'Healthcare',
    type: 'Full-time / Contract',
    location: 'Remote / On-site',
    href: '/#contact',
  },
  {
    title: 'Project Manager',
    department: 'Delivery',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    href: '/#contact',
  },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pb-28 min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="A3Intel Careers"
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
            <Briefcase className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-medium text-white/60 uppercase tracking-[0.2em]">Careers</span>
          </div>
          <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight max-w-3xl">
            Build your career with us
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-8 leading-relaxed">
            Join a team that values expertise, partnership, and results. We are always looking for talented technology professionals who want to make an impact.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gray-300" aria-hidden />
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Why A3Intel</p>
              </div>
              <h2 className="font-serif text-heading-lg md:text-display-sm text-gray-900 mb-6 tracking-tight">
                Work with purpose
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  At A3Intel, you will work on meaningful projects with enterprise and healthcare organizations that depend on technology to serve their missions. Our consultants help government agencies modernize systems, healthcare organizations improve patient care, and financial institutions strengthen security—work that matters.
                </p>
                <p>
                  We believe in treating people well. That means competitive compensation, real benefits, and a culture that values work-life balance. We invest in training and certifications because we want you to grow. We listen to feedback because we want to improve. And we celebrate wins because we know success is a team effort.
                </p>
                <p>
                  We are headquartered in Katy, Texas, with a presence in Hyderabad, India. We support remote and hybrid work where it makes sense for the role. We are E-Verify compliant and committed to building a diverse, inclusive workplace.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                  <h3 className="font-semibold text-gray-900 mb-4">What we offer</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      Competitive compensation
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      Health, dental, vision benefits
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      Training and certification support
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      Remote and hybrid options
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      Diverse, client-facing projects
                    </li>
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
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Benefits</p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              We take care of our people
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Competitive benefits and a supportive culture so you can do your best work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((item) => {
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
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Open Positions</p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              Join our team
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are actively hiring for the following roles. Don&apos;t see a fit? Get in touch—we are always interested in talented technology professionals.
            </p>
          </div>
          <div className="space-y-4">
            {openRoles.map((role) => (
              <Link
                key={role.title}
                href={role.href}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{role.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {role.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {role.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {role.location}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-36 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-gray-900 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(59,130,246,0.12),transparent_50%)]" />
        <div className="container-wide relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-display-sm md:text-display lg:text-display-lg text-white mb-6 tracking-tight">
              Don&apos;t see the right role?
            </h2>
            <p className="text-lg md:text-xl text-white/75 mb-14 leading-relaxed">
              We are always interested in hearing from talented technology professionals. Send us your resume and tell us about yourself.
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
