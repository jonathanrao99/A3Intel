'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Landmark, Building2, ShieldCheck } from 'lucide-react'

function GovernmentClientCard({
  name,
  logo,
  abbr,
}: {
  name: string
  logo: string
  abbr: string
}) {
  const [imageError, setImageError] = useState(false)
  return (
    <div className="group flex flex-col items-center justify-center gap-3">
      <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
        {!imageError ? (
          <img
            src={logo}
            alt=""
            width={64}
            height={64}
            className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 w-16 h-16"
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="w-12 h-12 bg-blue-600 text-white text-sm font-semibold rounded-lg flex items-center justify-center">
            {abbr}
          </span>
        )}
      </div>
      <span className="text-sm text-gray-600 text-center font-medium">{name}</span>
    </div>
  )
}

function EnterpriseClientCard({ name }: { name: string }) {
  return (
    <div className="group flex items-center justify-center py-2">
      <span className="font-serif text-xl md:text-2xl text-gray-400 group-hover:text-gray-900 transition-colors duration-300 text-center font-medium tracking-tight">
        {name}
      </span>
    </div>
  )
}

export default function Clients() {
  // Government seals: Wikimedia Commons (public domain). Alternate paths where original didn't load; referrerPolicy on img.
  const governmentClients = [
    { name: "Virginia IT Agency", abbr: "VITA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Seal_of_Virginia.svg/200px-Seal_of_Virginia.svg.png" },
    { name: "State of Colorado", abbr: "CO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Colorado-StateSeal.svg/200px-Colorado-StateSeal.svg.png" },
    { name: "State of Connecticut", abbr: "CT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Seal_of_Connecticut.svg/200px-Seal_of_Connecticut.svg.png" },
    { name: "State of Michigan", abbr: "MI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Michigan_state_seal.png" },
    { name: "State of Oregon", abbr: "OR", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Seal_of_Oregon.svg/200px-Seal_of_Oregon.svg.png" },
    { name: "City of Atlanta", abbr: "ATL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Seal_of_Atlanta.png/200px-Seal_of_Atlanta.png" },
  ]

  const enterpriseClients = [
    "Johnson & Johnson",
    "Mohawk Industries",
    "Prudential Financial",
    "Splunk",
    "Tableau",
    "ExxonMobil",
    "NextEra Energy",
    "TEKsystems",
    "Gexa Energy",
    "Jackson National",
  ]

  const certifications = [
    { name: 'E-Verify', desc: 'Participating Employer' },
    { name: 'ISO 27001', desc: 'Certified' },
    { name: 'HIPAA', desc: 'Compliant' },
    { name: 'SOC 2', desc: 'Type II' },
    { name: 'CMMI', desc: 'Level 3' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section className="relative section-spacing bg-gray-50 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent" />
      <div className="container-wide relative">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gray-300" aria-hidden />
            <Building2 className="w-4 h-4 text-gray-400 shrink-0" />
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
              Our Clients
            </p>
          </div>
          <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-[-0.02em] leading-tight">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            We partner with state and federal agencies and Fortune 500 companies. A3Intel is an E-Verify participating employer.
          </p>
        </motion.div>

        {/* Government Clients */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center justify-center gap-2 mb-10">
            <Landmark className="w-4 h-4 text-blue-600" />
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
              Government & Public Sector
            </p>
          </div>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {governmentClients.map((client) => (
              <motion.div key={client.name} variants={itemVariants}>
                <GovernmentClientCard
                  name={client.name}
                  logo={client.logo}
                  abbr={client.abbr}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enterprise Clients */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 mb-10">
            <Building2 className="w-4 h-4 text-blue-600" />
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
              Enterprise Partners
            </p>
          </div>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {enterpriseClients.map((name) => (
              <motion.div key={name} variants={itemVariants}>
                <EnterpriseClientCard name={name} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          className="pt-12 border-t border-gray-200"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
              Certifications & Compliance
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300"
              >
                <span className="text-sm font-semibold text-gray-900">{cert.name}</span>
                <span className="text-xs text-gray-500 border-l border-gray-300 pl-2">{cert.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
