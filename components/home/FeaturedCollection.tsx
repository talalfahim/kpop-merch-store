'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const collections = [
  {
    id: 1,
    name: 'BTS Collection',
    description: 'Iconic t-shirts featuring the global phenomenon BTS',
    image: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    color: 'from-purple-500/20 to-blue-500/20',
    href: '/collections/bts',
  },
  {
    id: 2,
    name: 'Blackpink Collection',
    description: 'Stylish designs celebrating the queens of K-pop',
    image: 'https://images.unsplash.com/photo-1605288230082-d2f3f5c4bb68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    color: 'from-pink-500/20 to-purple-500/20',
    href: '/collections/blackpink',
  },
  {
    id: 3,
    name: 'Twice Collection',
    description: 'Bright and colorful tees inspired by Twice',
    image: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    color: 'from-orange-500/20 to-yellow-500/20',
    href: '/collections/twice',
  }
]

const FeaturedCollection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-light">
      <div className="absolute inset-0 bg-gradient-to-b from-dark/5 to-transparent z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Collections
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Explore our exclusive collections featuring your favorite K-pop bands, designed for true fans who appreciate quality and style.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div 
              key={collection.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={collection.href} className="block">
                <div className="relative h-96 overflow-hidden rounded-2xl">
                  <div className={`absolute inset-0 bg-gradient-radial ${collection.color} opacity-70 z-10 transition-opacity duration-300 group-hover:opacity-90`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20"></div>
                  <Image 
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 z-30 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 neon-glow-accent">{collection.name}</h3>
                    <p className="text-white/80 mb-4">{collection.description}</p>
                    <div className="inline-flex items-center text-white font-medium group/btn">
                      <span>Explore Collection</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
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
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/collections" 
            className="btn-secondary"
          >
            View All Collections
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedCollection