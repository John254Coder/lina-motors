import CompanyOverview from '@/components/about/CompanyOverview'
import ComplianceSection from '@/components/about/ComplianceSection'
import Hero from '@/components/about/Hero'
import ValuesApproachSection from '@/components/about/Values&Approach'
import CTASection from '@/components/about/CTASection'

export default function About() {
  return (
    <>
    <Hero />
    <CompanyOverview />
    <ValuesApproachSection />
    <ComplianceSection />
    <CTASection />
    </>
  )
}
