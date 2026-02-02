import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Events | A3Intel Solutions',
  description:
    'Upcoming webinars, conferences, and events featuring A3Intel. Join us to learn about cloud, cybersecurity, healthcare IT, and digital transformation.',
}

const upcomingEvents = [
  {
    title: 'Cloud Migration Best Practices for Healthcare',
    date: 'March 15, 2025',
    time: '2:00 PM ET',
    type: 'Webinar',
    description: 'A practical session on planning and executing HIPAA-compliant cloud migrations. We will cover assessment, security, and change management.',
    cta: 'Register',
  },
  {
    title: 'HIMSS Global Health Conference',
    date: 'March 17–21, 2025',
    time: 'All day',
    type: 'Conference',
    location: 'Orlando, FL',
    description: 'Meet the A3Intel team at HIMSS. We will be discussing healthcare IT strategy, interoperability, and digital health trends.',
    cta: 'Learn more',
  },
  {
    title: 'Cybersecurity Readiness for Government Agencies',
    date: 'April 8, 2025',
    time: '11:00 AM ET',
    type: 'Webinar',
    description: 'FISMA, FedRAMP, and state compliance—what government IT leaders need to know. A discussion on risk assessment and remediation.',
    cta: 'Register',
  },
]

const pastEvents = [
  { title: 'Digital Transformation in Financial Services', date: 'January 2025', type: 'Webinar' },
  { title: 'IT Staffing Trends in Healthcare', date: 'December 2024', type: 'Webinar' },
  { title: 'Cloud Cost Optimization Workshop', date: 'November 2024', type: 'Webinar' },
]

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 md:pb-24 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <Calendar className="w-4 h-4 text-gray-400" />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Events</p>
            </div>
            <h1 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              Join us at upcoming events
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Webinars, conferences, and workshops featuring A3Intel experts. Learn about cloud migration, cybersecurity, healthcare IT, and digital transformation—and connect with our team.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-wide">
          <h2 className="font-serif text-heading-lg text-gray-900 mb-10">Upcoming events</h2>
          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium mb-4">
                      {event.type}
                    </span>
                    <h3 className="font-serif text-heading-lg text-gray-900 mb-3">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                      {event.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all"
                    >
                      {event.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="container-wide">
          <h2 className="font-serif text-heading-lg text-gray-900 mb-10">Past events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.title}
                className="p-6 rounded-2xl border border-gray-100 bg-white"
              >
                <span className="text-xs font-medium text-gray-500 mb-2 block">{event.type}</span>
                <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              Interested in hosting or sponsoring?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We partner with industry associations and events. Get in touch to discuss collaboration opportunities.
            </p>
            <Link
              href="/#contact"
              className="group inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all"
            >
              Contact us
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
