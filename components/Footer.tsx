'use client'

import Link from 'next/link'
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import ReadyToTransformCard from '@/components/ReadyToTransformCard'

export default function Footer({ hideCTA = false }: { hideCTA?: boolean }) {
  const links = {
    solutions: [
      { name: 'IT Strategy Consulting', href: '/solutions/consulting' },
      { name: 'Cloud Computing Solutions', href: '/solutions/cloud' },
      { name: 'IT Security Services', href: '/solutions/cybersecurity' },
      { name: 'Managed IT Services', href: '/solutions/managed-services' },
      { name: 'IT Staffing Solutions', href: '/solutions/it-staffing' },
      { name: 'Digital Transformation Services', href: '/solutions/digital-transformation' },
    ],
    industries: [
      { name: 'State & Federal Agencies', href: '/industries/government' },
      { name: 'Banking & Financial Services', href: '/industries/financial-services' },
      { name: 'Healthcare & Life Sciences', href: '/industries/healthcare' },
      { name: 'Telecommunications', href: '/industries/telecom' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership', href: '/about/leadership' },
      { name: 'Careers', href: '/careers' },
      { name: 'Insights', href: '/insights' },
      { name: 'Contact', href: '/#contact' },
    ],
    resources: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/resources/white-papers' },
      { name: 'Blog', href: '/insights' },
      { name: 'Events', href: '/events' },
    ]
  }

  return (
    <footer className="bg-gray-950 text-white">
      {!hideCTA && (
        <div className="relative border-b border-gray-800/60 bg-white py-10 lg:py-14">
          <div className="container-wide">
            <ReadyToTransformCard />
          </div>
        </div>
      )}

      {/* Main footer */}
      <div className="container-wide py-20 lg:py-24">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
          <div className="col-span-2 sm:col-span-4 lg:col-span-2">
            <Link href="/" className="group inline-block text-xl font-semibold tracking-[-0.02em] text-white mb-6 transition-all">
              A3Intel
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs tracking-wide">
              IT consulting and staffing for enterprise and healthcare organizations. Delivering solutions and building lasting partnerships.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center bg-gray-800/60 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/80 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center bg-gray-800/60 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/80 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium tracking-[0.08em] mb-6 text-[11px] uppercase text-gray-500">Solutions</h4>
            <ul className="space-y-3.5">
              {links.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 link-underline inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium tracking-[0.08em] mb-6 text-[11px] uppercase text-gray-500">Industries</h4>
            <ul className="space-y-3.5">
              {links.industries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 link-underline inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium tracking-[0.08em] mb-6 text-[11px] uppercase text-gray-500">Company</h4>
            <ul className="space-y-3.5">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 link-underline inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium tracking-[0.08em] mb-6 text-[11px] uppercase text-gray-500">Resources</h4>
            <ul className="space-y-3.5">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 link-underline inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-x-12 sm:gap-y-5 py-8 sm:py-10 border-t border-gray-800/80 text-sm text-gray-500 tracking-wide">
          <a href="mailto:contact@a3intel.tech" className="inline-flex items-center gap-2 hover:text-white transition-colors duration-200 group">
            <Mail className="w-4 h-4 shrink-0 group-hover:text-blue-400 transition-colors" />
            contact@a3intel.tech
          </a>
          <a href="tel:+17196942864" className="inline-flex items-center gap-2 hover:text-white transition-colors duration-200 group">
            <Phone className="w-4 h-4 shrink-0 group-hover:text-blue-400 transition-colors" />
            +1 (719) 694-2864
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0 text-blue-400" />
            Katy, TX · Hyderabad, India
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-10 border-t border-gray-800/80 gap-5 sm:gap-6">
          <p className="text-sm text-gray-500 tracking-wide">
            © {new Date().getFullYear()} A3Intel Solutions Inc. All rights reserved.
          </p>
          <div className="flex gap-10 text-sm text-gray-500 tracking-wide">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
