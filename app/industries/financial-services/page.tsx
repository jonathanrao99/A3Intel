import type { Metadata } from 'next'
import {
  Building2,
  Shield,
  Cloud,
  Users,
  Lightbulb,
  Heart,
  Landmark,
  Wifi,
} from 'lucide-react'
import IndustryPageLayout from '@/components/IndustryPageLayout'

export const metadata: Metadata = {
  title: 'Banking & Financial Services | A3Intel Solutions',
  description:
    'Secure, compliant IT solutions for banking, insurance, and asset management. SOC 2, regulatory compliance, and digital transformation for financial institutions.',
}

export default function FinancialServicesPage() {
  return (
    <IndustryPageLayout
      title="Banking & Financial Services"
      subtitle="Secure, compliant IT solutions for banking, insurance, and asset management."
      metaLine="SOC 2 · Regulatory compliance · 50+ institutions served"
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      icon={Building2}
      iconLabel="Financial Services"
      overviewTitle="Technology that enables growth and compliance"
      overviewContent={
        <>
          <p>
            Financial institutions operate in a high-stakes environment where
            security, compliance, and reliability are non-negotiable. A3Intel
            partners with banks, insurance companies, and asset managers to
            modernize technology, strengthen security posture, and support
            digital transformation—all while meeting regulatory requirements.
          </p>
          <p>
            We understand the unique demands of financial services: core banking
            systems, insurance platforms, trading infrastructure, and
            customer-facing digital channels. Our consultants have deep
            experience with SOC 2, regulatory frameworks, and the operational
            realities of running technology in a heavily regulated industry.
          </p>
          <p>
            Our engagements often involve legacy modernization, cloud migration,
            security assessments, and digital channel development. We work with
            CIOs, CTOs, and risk and compliance leaders to ensure technology
            initiatives align with business strategy and regulatory
            expectations, and we have a track record of successful delivery for
            Fortune 500 financial institutions.
          </p>
          <p>
            Whether you are a regional bank scaling digital capabilities or a
            global insurer consolidating infrastructure, we bring the technical
            depth and industry understanding to deliver results.
          </p>
        </>
      }
      whyChooseTitle="Why financial institutions choose A3Intel"
      whyChooseItems={[
        'Deep understanding of financial regulations and compliance frameworks',
        'Experience with banking core systems, insurance platforms, and asset management',
        'SOC 2 and industry-standard security practices',
        'Proven delivery for Fortune 500 financial institutions',
      ]}
      solutionsTitle="Services we offer for financial services"
      solutionsSubtitle="End-to-end IT capabilities with security and compliance built in."
      solutions={[
        {
          title: 'IT Strategy Consulting',
          href: '/solutions/consulting',
          description:
            'Technology roadmaps aligned to regulatory requirements and business growth.',
          icon: Lightbulb,
        },
        {
          title: 'Cloud Computing Solutions',
          href: '/solutions/cloud',
          description:
            'Secure cloud architecture with compliance controls for financial workloads.',
          icon: Cloud,
        },
        {
          title: 'IT Security Services',
          href: '/solutions/cybersecurity',
          description:
            'Security assessments, penetration testing, and compliance readiness.',
          icon: Shield,
        },
        {
          title: 'Managed IT Services',
          href: '/solutions/managed-services',
          description: '24/7 monitoring and support for critical financial systems.',
          icon: Cloud,
        },
        {
          title: 'IT Staffing Solutions',
          href: '/solutions/it-staffing',
          description:
            'Vetted talent with financial services and regulatory experience.',
          icon: Users,
        },
      ]}
      sectionBelowTitle="Secure, compliant delivery for financial institutions"
      sectionBelowSubtitle="We bring security-first practices and regulatory awareness to every financial services engagement."
      sectionBelowItems={[
        {
          title: 'Security and audit readiness',
          icon: 'shield-check',
          description:
            'Financial services technology projects require rigorous attention to security, auditability, and regulatory alignment. Our team follows SOC 2 and industry best practices, and we structure engagements to support your internal controls and audit requirements. We document processes, maintain clear change management, and ensure that every deliverable meets the standards your regulators expect.',
        },
        {
          title: 'Financial systems experience',
          icon: 'database',
          description:
            'We have delivered for banks, insurers, and asset managers across core systems, digital channels, and infrastructure modernization. Our consultants understand the unique requirements of financial workloads—including low-latency trading systems, high-availability banking platforms, and data-intensive analytics environments—and we design solutions that meet both technical and compliance needs.',
        },
        {
          title: 'Vetted talent',
          icon: 'user-check',
          description:
            'Our staffing practice specializes in placing technology and security professionals who have experience in financial services. We vet for both technical skills and cultural fit, and we understand the importance of continuity and knowledge transfer in regulated environments. Whether you need project-based consultants or long-term staff augmentation, we deliver talent you can trust.',
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
          name: 'Healthcare & Life Sciences',
          href: '/industries/healthcare',
          icon: Heart,
          image:
            'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
        },
        {
          name: 'Telecommunications',
          href: '/industries/telecom',
          icon: Wifi,
          image:
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
        },
      ]}
      ctaTitle="Ready to strengthen your technology posture?"
      ctaDescription="Let's discuss how we can help your institution innovate while maintaining compliance."
    />
  )
}
