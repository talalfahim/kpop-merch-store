import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import FeaturedCollection from '@/components/home/FeaturedCollection'
import PopularBands from '@/components/home/PopularBands'
import NewArrivals from '@/components/home/NewArrivals'
import NewsletterSignup from '@/components/home/NewsletterSignup'

const montserratBold = Montserrat({
  weight: '800',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-[#1a1a1a] z-0"></div>
        <div className="absolute inset-0 opacity-30 z-0" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1605826832916-3f0b0cf0db98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGtvcGVhbiUyMGJhbmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}></div>
        
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-500/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-secondary-500/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={`${montserratBold.className} text-gradient-primary animate-fade-in mb-6`}>
              EXPRESS YOUR K-POP PASSION WITH STYLE
            </h1>
            
            <p className="text-light/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Discover exclusive t-shirts featuring your favorite K-pop bands. High-quality merchandise designed for true fans.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link href="/shop" className="btn-primary">
                Shop Collection
              </Link>
              <Link href="/bands" className="btn-outline text-light border-light/30 hover:bg-white/10">
                Explore Bands
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent z-10"></div>
        <div className="absolute -bottom-12 left-1/4 w-24 h-24 rounded-full bg-primary-500/30 blur-xl animate-pulse"></div>
        <div className="absolute -bottom-8 right-1/3 w-16 h-16 rounded-full bg-secondary-500/20 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-6 right-1/4 w-12 h-12 rounded-full bg-accent-500/20 blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </section>
      
      {/* Featured Collections */}
      <FeaturedCollection />
      
      {/* Popular Bands */}
      <PopularBands />
      
      {/* New Arrivals */}
      <NewArrivals />
      
      {/* Newsletter Sign-up */}
      <NewsletterSignup />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}