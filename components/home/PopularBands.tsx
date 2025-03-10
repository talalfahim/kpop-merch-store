'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const bands = [
  {
    id: 1,
    name: 'BTS',
    members: 7,
    description: 'Global superstars known for their powerful performances and meaningful music.',
    image: 'https://images.unsplash.com/photo-1631512234863-41c29f13121e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    color: 'bg-gradient-to-r from-purple-500 to-blue-500',
    totalProducts: 24,
    href: '/bands/bts',
  },
  {
    id: 2,
    name: 'Blackpink',
    members: 4,
    description: 'Revolutionary girl group known for their fierce style and catchy hits.',
    image: 'https://images.unsplash.com/photo-1606767411513-41475274d0a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    color: 'bg-gradient-to-r from-pink-500 to-purple-500',
    totalProducts: 18,
    href: '/bands/blackpink',
  },
  {
    id: 3,
    name: 'Twice',
    members: 9,
    description: 'Charming group bringing joy with their bright concepts and catchy tunes.',
    image: 'https://images.unsplash.com/photo-1624970662566-536bac6c958d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    color: 'bg-gradient-to-r from-orange-500 to-pink-500',
    totalProducts: 15,
    href: '/bands/twice',
  },
  {
    id: 4,
    name: 'Stray Kids',
    members: 8,
    description: 'Self-producing group known for their intense performances and unique sound.',
    image: 'https://images.unsplash.com/photo-1618923052485-b53ec7bb398a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    color: 'bg-gradient-to-r from-red-500 to-orange-500',
    totalProducts: 12,
    href: '/bands/stray-kids',
  },
]

const PopularBands = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-dark">
      <div className="absolute inset-0 opacity-10 z-0" style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></div>
      
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-light neon-glow-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Popular K-pop Bands
          </motion.h2>
          <motion.p 
            className="text-lg text-light/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Express your fandom with merchandise from these trending K-pop groups. Each piece is designed to capture the essence of your favorite band.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bands.map((band, index) => (
            <motion.div 
              key={band.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={band.href} className="block relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="relative h-60">
                    <Image 
                      src={band.image}
                      alt={band.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className={`px-3 py-1 text-xs rounded-full font-medium text-white inline-block ${band.color}`}>
                        {band.members} Members
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-2 neon-glow-accent">{band.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-light/80 mb-4 line-clamp-2">{band.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-light/70 text-sm">{band.totalProducts} Products</span>
                      <span className="text-accent-500 group-hover:translate-x-1 transition-transform duration-300 flex items-center">
                        View Collection
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/bands" 
            className="btn-outline text-light border-light/30 hover:bg-white/10"
          >
            Explore All Bands
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PopularBands