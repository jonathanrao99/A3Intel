'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setMobileExpanded(null)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const navigation = [
    {
      name: 'Solutions',
      href: '/#services',
      children: [
        { name: 'IT Strategy Consulting', href: '/solutions/consulting' },
        { name: 'Cloud Computing Solutions', href: '/solutions/cloud' },
        { name: 'IT Security Services', href: '/solutions/cybersecurity' },
        { name: 'Managed IT Services', href: '/solutions/managed-services' },
        { name: 'IT Staffing Solutions', href: '/solutions/it-staffing' },
        { name: 'Digital Transformation Services', href: '/solutions/digital-transformation' },
      ]
    },
    {
      name: 'Industries',
      href: '/#industries',
      children: [
        { name: 'State & Federal Agencies', href: '/industries/government' },
        { name: 'Banking & Financial Services', href: '/industries/financial-services' },
        { name: 'Healthcare & Life Sciences', href: '/industries/healthcare' },
        { name: 'Telecommunications', href: '/industries/telecom' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { name: 'Careers', href: '/careers' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled || isMenuOpen
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
        : 'bg-transparent'
    }`}>
      <nav className="container-wide">
        <div className="flex items-center justify-between h-[4.5rem]">
          {/* Logo */}
          <Link href="/" className="relative z-10 group">
            <span className={`text-lg font-semibold tracking-[-0.02em] transition-all duration-300 ${
              isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'
            }`}>
              A3Intel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-2.5 text-[13px] font-medium tracking-[0.02em] transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-gray-500 hover:text-gray-900' 
                      : 'text-white/75 hover:text-white'
                  }`}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className={`w-3.5 h-3.5 ml-0.5 opacity-70 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>
                
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-52 bg-white rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100/80 py-1.5 animate-fade-in-up">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 transition-colors duration-150"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/#contact"
              className={`group inline-flex items-center px-5 py-2.5 text-[13px] font-semibold tracking-[0.02em] rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-white bg-blue-600 hover:bg-blue-500 shadow-[0_2px_8px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_12px_rgba(37,99,235,0.3)]'
                  : 'text-gray-900 bg-white/95 hover:bg-white border border-white/20 hover:border-white/40'
              }`}
            >
              Contact Us
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 relative z-10 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className={`w-6 h-6 transition-colors duration-200 ${isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation - portaled to body, clean professional design */}
        {typeof document !== 'undefined' &&
          isMenuOpen &&
          createPortal(
            <AnimatePresence>
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
                className="lg:hidden fixed inset-0 top-[4.5rem] left-0 right-0 bottom-0 z-[9999] overflow-y-auto overscroll-contain bg-white"
              >
                <div className="container-wide py-6">
                  <div className="divide-y divide-gray-100">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.children ? (
                          <>
                            <button
                              type="button"
                              onClick={() =>
                                setMobileExpanded(
                                  mobileExpanded === item.name ? null : item.name
                                )
                              }
                              className="flex w-full items-center justify-between py-4 text-[15px] font-medium text-gray-900"
                            >
                              {item.name}
                              <motion.span
                                animate={{
                                  rotate: mobileExpanded === item.name ? 180 : 0,
                                }}
                                transition={{
                                  duration: 0.25,
                                  ease: [0.32, 0.72, 0, 1],
                                }}
                              >
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                              </motion.span>
                            </button>
                            <AnimatePresence initial={false}>
                              {mobileExpanded === item.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{
                                    duration: 0.25,
                                    ease: [0.32, 0.72, 0, 1],
                                  }}
                                  className="overflow-hidden"
                                >
                                  <div className="pb-3 pl-1 space-y-0">
                                    {item.children.map((child) => (
                                      <Link
                                        key={child.name}
                                        href={child.href}
                                        className="block py-2.5 pl-4 text-[14px] text-gray-600 hover:text-gray-900 transition-colors duration-150"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {child.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className="block py-4 text-[15px] font-medium text-gray-900 hover:text-gray-600 transition-colors duration-150"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="pt-6">
                    <Link
                      href="/#contact"
                      className="block w-full py-3.5 text-center text-[14px] font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-150"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>,
            document.body
          )}
      </nav>
    </header>
  )
}
