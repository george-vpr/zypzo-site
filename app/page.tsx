import { Hero } from "@/components/landing/hero"
import { WorkModes } from "@/components/landing/work-modes"
import { ExecutionModes } from "@/components/landing/execution-modes"
import { BuildWithoutHiring } from "@/components/landing/build-without-hiring"
import { PlatformControl } from "@/components/landing/platform-control"
import { HowItWorks } from "@/components/landing/how-it-works"
import { ProductPreview } from "@/components/landing/product-preview"
import { Features } from "@/components/landing/features"
import { Categories } from "@/components/landing/categories"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Page sections */}
      <Hero />
      <WorkModes />
      <ExecutionModes />
      <BuildWithoutHiring />
      <PlatformControl />
      <HowItWorks />
      <ProductPreview />
      <Features />
      <Categories />
      <CTA />
      <Footer />
    </main>
  )
}
