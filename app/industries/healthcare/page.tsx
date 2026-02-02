import type { Metadata } from 'next'
import {
  Heart,
  Shield,
  Cloud,
  Users,
  Lightbulb,
  Landmark,
  Building2,
  Wifi,
} from 'lucide-react'
import IndustryPageLayout from '@/components/IndustryPageLayout'

export const metadata: Metadata = {
  title: 'Healthcare & Life Sciences | A3Intel Solutions',
  description:
    'HIPAA-compliant IT solutions for hospitals, health systems, and life sciences. Clinical systems, data analytics, digital health, and healthcare staffing.',
}

export default function HealthcarePage() {
  return (
    <IndustryPageLayout
      title="Healthcare & Life Sciences"
      subtitle="HIPAA-compliant IT solutions for hospitals, health systems, and life sciences."
      metaLine="HIPAA · HITRUST · 200+ healthcare clients"
      heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80"
      icon={Heart}
      iconLabel="Healthcare"
      overviewTitle="Technology that supports patient care"
      overviewContent={
        <>
          <p>
            Healthcare organizations face unprecedented pressure to modernize
            technology while protecting patient data and meeting stringent
            regulatory requirements. A3Intel has spent over fifteen years
            partnering with hospitals, health systems, payers, and life sciences
            companies to deliver IT consulting, staffing, and managed services
            that support both clinical and operational excellence.
          </p>
          <p>
            We understand EHR ecosystems, interoperability standards (FHIR,
            HL7), clinical workflows, and the operational demands of healthcare
            IT. Our consultants have deep experience with Epic, Cerner, and
            other major platforms—as well as the security and compliance
            requirements that govern healthcare data.
          </p>
          <p>
            Our work spans clinical systems implementation, data analytics,
            digital health initiatives, and infrastructure modernization. We
            collaborate closely with clinical and IT leadership to ensure
            technology decisions support care delivery, improve patient
            outcomes, and maintain the trust required when handling sensitive
            health information.
          </p>
          <p>
            Whether you are a regional hospital upgrading clinical systems or a
            life sciences company building data infrastructure, we bring the
            healthcare-specific expertise and compliance awareness you need.
          </p>
        </>
      }
      whyChooseTitle="Why healthcare chooses A3Intel"
      whyChooseItems={[
        'HIPAA expertise and healthcare compliance built into every engagement',
        'Experience with Epic, Cerner, and major EHR and clinical systems',
        'Understanding of clinical workflows and interoperability standards',
        '200+ healthcare clients across hospitals, payers, and life sciences',
      ]}
      solutionsTitle="Services we offer for healthcare"
      solutionsSubtitle="End-to-end healthcare IT capabilities with HIPAA compliance built in."
      solutions={[
        {
          title: 'IT Strategy Consulting',
          href: '/solutions/consulting',
          description:
            'Technology roadmaps for EHR, interoperability, and digital health initiatives.',
          icon: Lightbulb,
        },
        {
          title: 'Cloud Computing Solutions',
          href: '/solutions/cloud',
          description:
            'HIPAA-compliant cloud migration and secure healthcare infrastructure.',
          icon: Cloud,
        },
        {
          title: 'IT Security Services',
          href: '/solutions/cybersecurity',
          description:
            'HIPAA risk assessments, security hardening, and compliance support.',
          icon: Shield,
        },
        {
          title: 'Managed IT Services',
          href: '/solutions/managed-services',
          description: '24/7 support for clinical and business systems.',
          icon: Cloud,
        },
        {
          title: 'IT Staffing Solutions',
          href: '/solutions/it-staffing',
          description:
            'Clinical informatics, health data analysts, and healthcare IT specialists.',
          icon: Users,
        },
      ]}
      sectionBelowTitle="Healthcare technology expertise you can trust"
      sectionBelowSubtitle="We combine HIPAA compliance, clinical systems knowledge, and operational excellence in every engagement."
      sectionBelowItems={[
        {
          title: 'Technical and domain expertise',
          icon: 'cpu',
          description:
            'Healthcare IT requires a balance of technical depth and domain understanding. Our consultants bring both: they know how to configure and integrate EHR systems, design secure data pipelines, and implement interoperability solutions, while also understanding the workflows and priorities of clinical and operational teams.',
        },
        {
          title: 'Compliance built in',
          icon: 'shield-check',
          description:
            'We adhere to HIPAA, HITRUST, and other healthcare-specific frameworks as a baseline for all work. Our engagements include security and compliance considerations from the start, so you avoid costly rework and reduce audit risk. We have supported hospitals, health systems, payers, and life sciences organizations across the full technology lifecycle.',
        },
        {
          title: 'Specialized talent',
          icon: 'user-plus',
          description:
            'Our staffing practice specializes in clinical informatics, healthcare data analysts, and IT professionals with experience in regulated environments. Whether you need short-term project support or long-term strategic partnerships, we deliver talent that fits your culture and your compliance requirements.',
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
          name: 'Telecommunications',
          href: '/industries/telecom',
          icon: Wifi,
          image:
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
        },
      ]}
      ctaTitle="Ready to modernize your healthcare technology?"
      ctaDescription="Let's discuss how we can support your clinical and operational goals."
    />
  )
}
