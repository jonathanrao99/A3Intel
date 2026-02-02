import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Announcements from '@/components/Announcements'
import Services from '@/components/Services'

const WhyA3Intel = dynamic(() => import('@/components/WhyA3Intel'), { ssr: true })
const Industries = dynamic(() => import('@/components/Industries'), { ssr: true })
const Clients = dynamic(() => import('@/components/Clients'), { ssr: true })
const AwesomeFacts = dynamic(() => import('@/components/AwesomeFacts'), { ssr: true })
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Announcements />
      <Services />
      <WhyA3Intel />
      <Industries />
      <Clients />
      <AwesomeFacts />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
