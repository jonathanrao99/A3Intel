import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Users } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Leadership | A3Intel Solutions',
  description:
    'Meet the A3Intel leadership team. Experienced technology and business leaders guiding our mission to deliver IT consulting and staffing excellence.',
}

const leaders = [
  {
    name: 'Jonathan Thota',
    role: 'Founder & CEO',
    bio: 'Jonathan leads A3Intel\'s vision and strategy, bringing deep experience in IT consulting and enterprise technology. He founded A3Intel to deliver pragmatic, results-driven technology solutions to organizations that need expertise without bureaucracy.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Leadership Team',
    role: 'Technology & Operations',
    bio: 'Our leadership team combines decades of experience across consulting, staffing, and managed services. We have led technology transformations at Fortune 500 companies, government agencies, and healthcare organizations—and we bring that expertise to every A3Intel engagement.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80',
  },
]

export default function LeadershipPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 md:pb-24 bg-gray-50">
        <div className="container-wide">
          <Link href="/about" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to About
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <Users className="w-4 h-4 text-gray-400" />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Leadership</p>
            </div>
            <h1 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              Meet our leadership
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experienced technology and business leaders guiding our mission to deliver IT consulting and staffing excellence for enterprise and healthcare organizations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="space-y-20">
            {leaders.map((leader) => (
              <div key={leader.name} className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-2">
                  <div className="relative aspect-square max-w-sm rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <h2 className="font-serif text-heading-lg md:text-display-sm text-gray-900 mb-2 tracking-tight">
                    {leader.name}
                  </h2>
                  <p className="text-blue-600 font-medium mb-6">{leader.role}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              Join our team
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We are always looking for talented individuals who share our commitment to excellence and partnership.
            </p>
            <Link
              href="/careers"
              className="group inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all"
            >
              View open positions
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
