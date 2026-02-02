import type { Metadata } from 'next'
import {
  Wifi,
  Cloud,
  Shield,
  Users,
  Lightbulb,
  Heart,
  Landmark,
  Building2,
} from 'lucide-react'
import IndustryPageLayout from '@/components/IndustryPageLayout'

export const metadata: Metadata = {
  title: 'Telecommunications | A3Intel Solutions',
  description:
    'IT solutions for telecom operators, network infrastructure, and digital services. Cloud, 5G, security, and digital transformation for the telecom industry.',
}

export default function TelecomPage() {
  return (
    <IndustryPageLayout
      title="Telecommunications"
      subtitle="IT solutions for telecom operators, network infrastructure, and digital services."
      metaLine="Cloud · 5G · Security · 30+ telecom partners"
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
      icon={Wifi}
      iconLabel="Telecommunications"
      overviewTitle="Technology that powers connectivity"
      overviewContent={
        <>
          <p>
            Telecommunications operators are at the forefront of digital
            infrastructure—delivering connectivity, cloud services, and digital
            platforms to consumers and enterprises. A3Intel partners with
            telecom companies to modernize IT, scale operations, and secure
            their technology estate as they evolve toward 5G, cloud-native
            architectures, and next-generation services.
          </p>
          <p>
            We understand the telecom ecosystem: OSS/BSS platforms, network
            management systems, B2B and B2C digital channels, and the
            operational demands of running always-on infrastructure. Our
            consultants bring experience with cloud migration, security
            hardening, and the talent strategies needed to support rapid
            innovation.
          </p>
          <p>
            Our work spans network evolution, digital transformation, and
            operational support. We have supported regional and national
            carriers with cloud adoption, BSS/OSS modernization, and security
            initiatives, and we understand the uptime and scalability
            requirements that come with running critical connectivity
            infrastructure.
          </p>
          <p>
            Whether you are a regional carrier scaling digital services or a
            national operator consolidating infrastructure, we bring the
            technical depth and industry context to deliver results.
          </p>
        </>
      }
      whyChooseTitle="Why telecom chooses A3Intel"
      whyChooseItems={[
        'Experience with telecom OSS/BSS, network management, and B2B platforms',
        'Understanding of 5G, cloud-native networking, and digital transformation',
        'Proven delivery for regional and national telecom operators',
        'Security and scalability focus for high-availability environments',
      ]}
      solutionsTitle="Services we offer for telecommunications"
      solutionsSubtitle="End-to-end IT capabilities for telecom operators and digital services."
      solutions={[
        {
          title: 'IT Strategy Consulting',
          href: '/solutions/consulting',
          description:
            'Technology roadmaps for network evolution and digital services.',
          icon: Lightbulb,
        },
        {
          title: 'Cloud Computing Solutions',
          href: '/solutions/cloud',
          description:
            'Cloud-native infrastructure and hybrid cloud for telecom workloads.',
          icon: Cloud,
        },
        {
          title: 'IT Security Services',
          href: '/solutions/cybersecurity',
          description:
            'Network security, threat detection, and compliance for telecom.',
          icon: Shield,
        },
        {
          title: 'Managed IT Services',
          href: '/solutions/managed-services',
          description: '24/7 monitoring and support for telecom infrastructure.',
          icon: Cloud,
        },
        {
          title: 'IT Staffing Solutions',
          href: '/solutions/it-staffing',
          description:
            'Network engineers, cloud architects, and telecom specialists.',
          icon: Users,
        },
      ]}
      sectionBelowTitle="Scaling telecom technology for the next generation"
      sectionBelowSubtitle="We help operators modernize infrastructure, secure networks, and deliver digital experiences at scale."
      sectionBelowItems={[
        {
          title: 'Cloud-native and always-on',
          icon: 'zap',
          description:
            'Telecom operators are under pressure to evolve from legacy infrastructure to cloud-native, software-defined networks while maintaining 99.99% uptime and meeting increasingly complex security and compliance requirements. Our team understands these demands and brings experience with OSS/BSS platforms, network function virtualization, and the operational models required for always-on services.',
        },
        {
          title: 'Transformation at scale',
          icon: 'trending-up',
          description:
            'We support cloud migration, 5G readiness, and digital channel development for carriers of all sizes. Our consultants have worked on network transformation, customer experience platforms, and security hardening initiatives, and we design solutions that scale with your growth and your customers\' expectations.',
        },
        {
          title: 'Specialized telecom talent',
          icon: 'users',
          description:
            'Our staffing practice specializes in placing network engineers, cloud architects, and telecom IT professionals who understand both the technology and the business of connectivity. We help you build teams that can drive innovation while maintaining the reliability that your subscribers and enterprise customers depend on.',
        },
      ]}
      relatedIndustries={[
        {
          name: 'State & Federal Agencies',
          href: '/industries/government',
          icon: Landmark,
          image:
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
        },
        {
          name: 'Banking & Financial Services',
          href: '/industries/financial-services',
          icon: Building2,
          image:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        },
        {
          name: 'Healthcare & Life Sciences',
          href: '/industries/healthcare',
          icon: Heart,
          image:
            'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
        },
      ]}
      ctaTitle="Ready to accelerate your telecom technology?"
      ctaDescription="Let's discuss how we can support your network evolution and digital services."
    />
  )
}
