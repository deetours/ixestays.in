import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getProperty, getAllPropertySlugs } from "@/lib/properties"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PropertyDetail } from "./property-detail"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPropertySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const property = getProperty(slug)
  if (!property) return { title: "Not Found" }

  return {
    title: `${property.title} | IxeStays`,
    description: property.subtitle,
  }
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params
  const property = getProperty(slug)

  if (!property) {
    notFound()
  }

  return (
    <main>
      <Navigation />
      <PropertyDetail property={property} />
      <Footer />
    </main>
  )
}
