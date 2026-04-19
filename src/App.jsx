import { useEffect } from 'react'
import SiteNav from './components/SiteNav'
import HeroSection from './components/HeroSection'
import MarqueeStrip from './components/MarqueeStrip'
import ServicesSection from './components/ServicesSection'
import StackSection from './components/StackSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import SiteFooter from './components/SiteFooter'

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) }
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <SiteNav />
      <HeroSection />
      <MarqueeStrip />
      <ServicesSection />
      <StackSection />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
    </>
  )
}
