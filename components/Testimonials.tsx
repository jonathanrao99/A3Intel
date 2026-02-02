'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react'

export default function Testimonials() {
  // Avatars: 320px @ q=95 for sharp 80px display. Hero images: 1600px @ q=95 for high quality.
  const testimonials = [
    {
      quote: "A3Intel brought the technical expertise and deep understanding of HIPAA compliance we needed for our cloud transformation. Their automation framework made implementation seamless, and the results exceeded our expectations.",
      author: "Tim Holton",
      role: "Chief Technology Officer",
      company: "Mohawk Industries",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=320&q=95",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=95",
      logo: "https://logo.clearbit.com/mohawkind.com"
    },
    {
      quote: "The A3Intel team takes a thoughtful, consultative approach to understanding both our needs and our consultants' capabilities. They consistently deliver services that exceed expectations and build lasting partnerships.",
      author: "Navneeth Damani",
      role: "VP of Technology",
      company: "Prudential Financial",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&q=95",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=95",
      logo: "https://logo.clearbit.com/prudential.com"
    },
    {
      quote: "A3Intel has become integral to our security education and penetration testing programs. Their work is thorough, professional, and provides actionable insights that have materially improved our security posture.",
      author: "John Harper",
      role: "Chief Information Security Officer",
      company: "Jackson National",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320&q=95",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&q=95",
      logo: "https://logo.clearbit.com/jackson.com"
    },
    {
      quote: "We've worked with A3Intel for consulting, advisory, and talent development initiatives. Many successful IT professionals I know started their careers with A3Intel's guidance and mentorship.",
      author: "Siva Kumar",
      role: "Senior Director, IT",
      company: "Johnson & Johnson",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=320&q=95",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=95",
      logo: "https://logo.clearbit.com/jnj.com"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [testimonials.length, isPaused])

  const next = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 24 : -24,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 24 : -24,
      opacity: 0,
    }),
  }

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative section-spacing bg-gray-50 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent" />
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Hero image: fixed box, logo anchored to image */}
            <div className="relative order-2 lg:order-1 w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] lg:max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                <div
                  data-testimonial-hero
                  className="absolute inset-0"
                  style={{ animation: 'kenBurns 10s ease-in-out infinite alternate' }}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={testimonials[currentIndex].image}
                      alt=""
                      width={500}
                      height={625}
                      className="absolute inset-0 w-full h-full object-cover object-center scale-105"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.4 } }}
                      exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    />
                  </AnimatePresence>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right - Testimonial: fixed-height slide area so section doesn't resize */}
            <div className="order-1 lg:order-2 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gray-300" aria-hidden />
                <MessageSquare className="w-4 h-4 text-gray-400 shrink-0" />
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
                  Client Testimonials
                </p>
              </div>
              <h2 id="testimonials-heading" className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-[-0.02em] leading-tight">
                What our clients say
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
                Hear directly from leaders at state and federal agencies, Fortune 500 companies, and healthcare organizations.
              </p>

              <div
                className="relative min-h-[280px] sm:min-h-[320px]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsPaused(false) }}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0 left-0 pl-8 border-l-4 border-blue-600 flex flex-col"
                  >
                    <blockquote className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-gray-900 leading-snug pt-2 pb-3 pr-4 flex-1 overflow-y-auto">
                      <span className="text-4xl font-serif text-gray-900 leading-none align-top select-none mr-0.5" aria-hidden="true">&ldquo;</span>
                      {testimonials[currentIndex].quote}
                      <span className="text-3xl font-serif text-gray-900 leading-none align-top select-none" aria-hidden="true">&rdquo;</span>
                    </blockquote>
                    <div className="flex items-center gap-4 pt-2 shrink-0">
                      <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden ring-2 ring-white shadow-md bg-gray-100">
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].author}
                          width={64}
                          height={64}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 tracking-tight truncate">
                          {testimonials[currentIndex].author}
                        </div>
                        <div className="text-gray-500 text-sm tracking-wide truncate">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="text-blue-600 text-sm font-medium truncate">
                          {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1)
                        setCurrentIndex(index)
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                        index === currentIndex ? 'w-10 bg-blue-600' : 'w-4 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                      aria-current={index === currentIndex ? 'true' : undefined}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-11 h-11 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-xl hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-[0.98]"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={next}
                    className="w-11 h-11 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-xl hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-[0.98]"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ken Burns animation keyframes; disabled when user prefers reduced motion */}
      <style jsx global>{`
        @keyframes kenBurns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.08) translate(-1%, -1%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-testimonial-hero] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
