import type { Metadata } from 'next'
import {
  Landmark,
  Shield,
  Cloud,
  Users,
  Lightbulb,
  Heart,
  Building2,
  Wifi,
} from 'lucide-react'
import IndustryPageLayout from '@/components/IndustryPageLayout'

export const metadata: Metadata = {
  title: 'State & Federal Agencies | A3Intel Solutions',
  description:
    'IT solutions for government agencies. FedRAMP, FISMA compliance. Cloud migration, cybersecurity, and managed services for state and federal organizations.',
}

export default function GovernmentPage() {
  return (
    <IndustryPageLayout
      title="State & Federal Agencies"
      subtitle="IT solutions for government delivering efficiency, security, and digital innovation."
      metaLine="FedRAMP · FISMA · State compliance · 50+ agencies served"
      heroImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80"
      icon={Landmark}
      iconLabel="Government"
      overviewTitle="Technology that serves the public mission"
      overviewContent={
        <>
          <p>
            Government agencies face unique technology challenges: stringent
            security and compliance requirements, complex procurement processes,
            and the need to deliver services efficiently to citizens and
            internal stakeholders. A3Intel has spent over a decade supporting
            state and federal agencies with IT consulting, staffing, and managed
            services.
          </p>
          <p>
            We understand FedRAMP, FISMA, state-level security frameworks, and
            the operational realities of government IT. Our consultants have
            worked with departments of health, transportation, finance, and
            public safety—supporting everything from legacy modernization to
            cloud migration and cybersecurity programs.
          </p>
          <p>
            Our engagements typically involve close collaboration with agency
            leadership and IT teams to align technology investments with
            mission goals. We bring experience across civilian and defense
            agencies, state governments, and municipal organizations, with a
            practical understanding of appropriations, contract vehicles, and
            compliance timelines.
          </p>
          <p>
            Whether you are a state agency modernizing citizen-facing systems or
            a federal department consolidating infrastructure, we bring the
            expertise, compliance awareness, and execution capability you need.
          </p>
        </>
      }
      whyChooseTitle="Why government chooses A3Intel"
      whyChooseItems={[
        'FedRAMP and FISMA experience across federal and state engagements',
        'Understanding of government procurement and contract vehicles',
        'Consultants with relevant security clearances and certifications',
        'Proven track record with state agencies and federal departments',
      ]}
      solutionsTitle="Services we offer for government"
      solutionsSubtitle="End-to-end IT capabilities tailored to agency needs and compliance requirements."
      solutions={[
        {
          title: 'IT Strategy Consulting',
          href: '/solutions/consulting',
          description:
            'Technology roadmaps and modernization planning aligned to agency missions.',
          icon: Lightbulb,
        },
        {
          title: 'Cloud Computing Solutions',
          href: '/solutions/cloud',
          description: 'FedRAMP-authorized cloud migration and secure infrastructure.',
          icon: Cloud,
        },
        {
          title: 'IT Security Services',
          href: '/solutions/cybersecurity',
          description:
            'FISMA compliance, risk assessments, and security hardening.',
          icon: Shield,
        },
        {
          title: 'Managed IT Services',
          href: '/solutions/managed-services',
          description: '24/7 support, monitoring, and infrastructure management.',
          icon: Cloud,
        },
        {
          title: 'IT Staffing Solutions',
          href: '/solutions/it-staffing',
          description:
            'Vetted consultants with government experience and clearances.',
          icon: Users,
        },
      ]}
      sectionBelowTitle="Partnering with government for mission success"
      sectionBelowSubtitle="We take a collaborative, compliance-first approach to every government engagement."
      sectionBelowItems={[
        {
          title: 'Procurement and compliance',
          icon: 'file-check',
          description:
            'Our team understands that government technology projects operate under different constraints than commercial enterprises. We design solutions that work within federal and state procurement processes, respect budget cycles, and prioritize security and compliance from day one.',
        },
        {
          title: 'Experienced consultants',
          icon: 'user-check',
          description:
            'We bring consultants who have clearance and government experience, ensuring smooth onboarding and alignment with agency culture. Our delivery model supports both short-term surge capacity and long-term strategic partnerships, and we are experienced with various contract vehicles including GSA schedules and agency-specific IDIQ arrangements.',
        },
        {
          title: 'End-to-end partnership',
          icon: 'handshake',
          description:
            'From discovery and assessment through implementation and ongoing support, we work alongside your team to deliver outcomes that matter for citizens and internal stakeholders. Our goal is to be a trusted partner you can rely on for complex, mission-critical technology initiatives.',
        },
      ]}
      relatedIndustries={[
        {
          name: 'Healthcare & Life Sciences',
          href: '/industries/healthcare',
          icon: Heart,
          image:
            'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
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
      ctaTitle="Ready to discuss your agency's technology needs?"
      ctaDescription="Let's talk about how we can support your mission with proven IT solutions."
    />
  )
}
