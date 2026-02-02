export interface CaseStudy {
  slug: string
  title: string
  client: string
  clientLogo?: string
  industry: string
  outcome: string
  image: string
  challenge: string
  solution: string
  results: string[]
  quote?: {
    text: string
    author: string
    role: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'mohawk-industries-cloud-transformation',
    title: 'Cloud-First Digital Transformation',
    client: 'Mohawk Industries',
    clientLogo: 'https://logo.clearbit.com/mohawkind.com',
    industry: 'Manufacturing',
    outcome: '40% reduction in infrastructure costs',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80',
    challenge: 'Mohawk Industries, a leading global flooring manufacturer, faced significant challenges with their legacy on-premises infrastructure. System downtime was impacting production schedules, and the IT team spent excessive time on maintenance rather than strategic initiatives. They needed a scalable, reliable cloud solution that could support their global operations while maintaining strict security and compliance requirements.',
    solution: 'A3Intel partnered with Mohawk to design and implement a comprehensive cloud migration strategy. We conducted a thorough assessment of their existing infrastructure, identified critical workloads, and developed a phased migration plan. Our team implemented a hybrid cloud architecture using Microsoft Azure, established robust disaster recovery protocols, and deployed automation frameworks to streamline operations. We also provided extensive training to ensure the internal team could manage the new environment effectively.',
    results: [
      '40% reduction in infrastructure costs within the first year',
      '99.9% uptime achieved across all critical systems',
      '60% faster deployment of new applications',
      'Improved security posture with zero breaches post-migration',
      'IT team productivity increased by 35%',
    ],
    quote: {
      text: 'A3Intel brought the technical expertise and deep understanding we needed for our cloud transformation. Their automation framework made implementation seamless, and the results exceeded our expectations.',
      author: 'Tim Holton',
      role: 'Chief Technology Officer, Mohawk Industries',
    },
  },
  {
    slug: 'prudential-healthcare-staffing',
    title: 'Enterprise Healthcare IT Staffing Program',
    client: 'Prudential Financial',
    clientLogo: 'https://logo.clearbit.com/prudential.com',
    industry: 'Financial Services',
    outcome: 'Staffed 50+ IT roles in 6 months',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    challenge: 'Prudential Financial was expanding their healthcare benefits technology division and needed to rapidly scale their IT workforce. They required specialized talent with expertise in healthcare regulations, benefits administration systems, and enterprise integration. Traditional recruiting methods were too slow, and they struggled to find candidates with the unique combination of technical and domain expertise required.',
    solution: 'A3Intel established a dedicated staffing partnership with Prudential, leveraging our extensive network of pre-vetted healthcare IT professionals. We implemented a customized recruitment strategy that combined targeted sourcing, rigorous technical assessments, and cultural fit evaluations. Our team worked closely with Prudential\'s hiring managers to understand specific role requirements and quickly identify qualified candidates. We also provided ongoing support and performance management throughout engagements.',
    results: [
      'Filled 50+ specialized IT positions within 6 months',
      'Reduced time-to-hire from 45 days to 18 days average',
      '92% consultant retention rate over 12 months',
      'Cost savings of 25% compared to previous staffing vendors',
      'Established ongoing preferred vendor relationship',
    ],
    quote: {
      text: 'The A3Intel team takes a thoughtful, consultative approach to understanding both our needs and our consultants\' capabilities. They consistently deliver services that exceed expectations and build lasting partnerships.',
      author: 'Navneeth Damani',
      role: 'VP of Technology, Prudential Financial',
    },
  },
  {
    slug: 'virginia-it-agency-managed-services',
    title: 'Statewide IT Managed Services Partnership',
    client: 'Virginia IT Agency (VITA)',
    clientLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Seal_of_Virginia.svg/200px-Seal_of_Virginia.svg.png',
    industry: 'Government',
    outcome: 'Supporting 65+ state agencies',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80',
    challenge: 'The Virginia Information Technologies Agency (VITA) needed a reliable partner to provide IT staffing and managed services across multiple state agencies. They required consultants who could navigate complex government procurement processes, maintain security clearances, and deliver consistent service quality across diverse technology environments. The scope included supporting legacy systems while driving modernization initiatives.',
    solution: 'A3Intel became a preferred vendor for VITA\'s IT staffing and managed services programs. We established a dedicated team to support government engagements, including professionals with relevant clearances and certifications. Our consultants provided expertise in areas including application development, infrastructure management, cybersecurity, and project management. We implemented robust quality assurance processes and maintained compliance with all state and federal requirements.',
    results: [
      'Successfully supporting 65+ state agencies',
      'Maintained 100% compliance with security requirements',
      'Deployed 100+ consultants across various projects',
      'Achieved preferred vendor status with multi-year contract',
      'Contributed to multiple successful modernization initiatives',
    ],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug)
}
