import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Solar PV Partners',
  description: 'Take control of your energy costs with Solar PV Partners',
  openGraph: {
    title: 'Solar PV Partners',
    description: 'Take control of your energy costs with Solar PV Partners',
    images: [{ url: '/images/logo_horizontal.png' }],
  },
}

export default function HomePage() {
  return (
    <div className="h-screen w-full relative">
      <Image
        src={'/images/home_image_2.jpg'}
        alt="Solar PV Background"
        fill
        className="object-cover "
        priority
      />
      <div className="absolute inset-0 bg-black/50">
        <div className="container mx-auto h-full">
          <div className="h-full flex flex-col justify-center items-start px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Take control of your energy costs with Solar PV Partners
            </h1>
            <p className="text-white text-xl mb-8">
              We create renewable energy solutions for a sustainable future
            </p>
            <Link
              href="/solutions"
              className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
            >
              Global Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
