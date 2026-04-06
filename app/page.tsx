import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { SpecialOffer } from "@/components/special-offer"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <SpecialOffer />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  )
}
