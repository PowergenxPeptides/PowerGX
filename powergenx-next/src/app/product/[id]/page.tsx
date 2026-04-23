import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductDetail from '@/components/ProductDetail'

// Mock product data - in a real app, this would come from a database or API
const products = {
  retatutide: {
    id: 'retatutide',
    name: 'RETATUTIDE',
    title: 'RETATUTIDE',
    description: 'Advanced GLP-1 Receptor Agonist for research purposes',
    price: '€149.99',
    originalPrice: '€179.99',
    purity: '99.8%',
    quantity: '10mg per vial',
    category: 'Peptides',
    rating: 5,
    reviews: 24,
    inStock: true,
    benefits: [
      'Advanced GLP-1 receptor agonist',
      'Research-grade purity >99%',
      'Lyophilized for stability',
      'Comprehensive testing included'
    ],
    specs: [
      { label: 'Purity', value: '99.8%' },
      { label: 'Quantity', value: '10mg per vial' },
      { label: 'Form', value: 'Lyophilized Powder' },
      { label: 'Storage', value: '2-8°C' },
      { label: 'CAS Number', value: '2381089-83-2' }
    ],
    description_full: `RETATUTIDE is an advanced GLP-1 receptor agonist designed for research and pre-clinical applications. This premium compound offers superior results and is thoroughly tested in laboratory conditions.

All batches are verified for purity and potency by independent laboratory tests. Each vial contains precisely measured 10mg of research-grade RETATUTIDE.`
  },
  'ghk-cu': {
    id: 'ghk-cu',
    name: 'GHK-CU',
    title: 'GHK-CU PEPTIDE',
    description: 'Copper Peptide Complex for anti-aging research',
    price: '€119.99',
    purity: '99.3%',
    quantity: '10mg per vial',
    category: 'Peptides',
    rating: 5,
    reviews: 18,
    inStock: true,
    benefits: [
      'Copper tripeptide complex',
      'Anti-aging properties',
      'Wound healing support',
      'Hair growth stimulation'
    ],
    specs: [
      { label: 'Purity', value: '99.3%' },
      { label: 'Quantity', value: '10mg per vial' },
      { label: 'Form', value: 'Lyophilized Powder' },
      { label: 'Storage', value: '2-8°C' },
      { label: 'CAS Number', value: '89030-95-5' }
    ],
    description_full: `GHK-CU is a naturally occurring copper peptide that has been extensively studied for its anti-aging and regenerative properties. This research compound offers multiple benefits for cellular health and tissue repair.`
  },
  'hgh-10iu': {
    id: 'hgh-10iu',
    name: 'HGH (10iu)',
    title: 'HGH FRAG 176-191',
    description: 'Human Growth Hormone Fragment',
    price: '€89.99',
    purity: '99.5%',
    quantity: '5mg per vial',
    category: 'Hormones',
    rating: 4,
    reviews: 32,
    inStock: true,
    benefits: [
      'Fat metabolism enhancement',
      'Muscle preservation',
      'Recovery acceleration',
      'Metabolic optimization'
    ],
    specs: [
      { label: 'Purity', value: '99.5%' },
      { label: 'Quantity', value: '5mg per vial' },
      { label: 'Form', value: 'Lyophilized Powder' },
      { label: 'Storage', value: '2-8°C' },
      { label: 'CAS Number', value: '66004-57-7' }
    ],
    description_full: `HGH Fragment 176-191 is a synthetic peptide derived from the C-terminal region of human growth hormone. This fragment has been shown to specifically target adipose tissue for fat metabolism without affecting growth or blood glucose levels.`
  },
  'melanotan-2': {
    id: 'melanotan-2',
    name: 'MELANOTAN 2',
    title: 'MELANOTAN II',
    description: 'Advanced Melanin Stimulator',
    price: '€99.99',
    purity: '99.7%',
    quantity: '10mg per vial',
    category: 'Peptides',
    rating: 5,
    reviews: 15,
    inStock: true,
    benefits: [
      'Melanin production stimulation',
      'Skin tanning enhancement',
      'Appetite suppression',
      'Libido enhancement'
    ],
    specs: [
      { label: 'Purity', value: '99.7%' },
      { label: 'Quantity', value: '10mg per vial' },
      { label: 'Form', value: 'Lyophilized Powder' },
      { label: 'Storage', value: '2-8°C' },
      { label: 'CAS Number', value: '121062-08-6' }
    ],
    description_full: `MELANOTAN II is a synthetic peptide analog of alpha-melanocyte stimulating hormone. It has been researched for its effects on melanin production, skin pigmentation, and various physiological responses.`
  }
}

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.id as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductDetail product={product} />
      <Footer />
    </main>
  )
}

export async function generateStaticParams() {
  return Object.keys(products).map((id) => ({
    id: id,
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = products[params.id as keyof typeof products]

  if (!product) {
    return {
      title: 'Product Not Found | POWERGENX'
    }
  }

  return {
    title: `${product.name} | POWERGENX`,
    description: product.description,
  }
}