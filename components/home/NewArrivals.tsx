'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'BTS Dynamite T-Shirt',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    band: 'BTS',
    isNew: true,
    href: '/shop/bts-dynamite-t-shirt',
  },
  {
    id: 2,
    name: 'Blackpink How You Like That Tee',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    band: 'Blackpink',
    isNew: true,
    href: '/shop/blackpink-how-you-like-that-tee',
  },
  {
    id: 3,
    name: 'Twice Feel Special T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    band: 'Twice',
    isNew: true,
    href: '/shop/twice-feel-special-t-shirt',
  },
  {
    id: 4,
    name: 'Stray Kids God\'s Menu Tee',
    price: 30.99,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    band: 'Stray Kids',
    isNew: true,
    href: '/shop/stray-kids-gods-menu-tee',
  },
]

const NewArrivals = () => {
  return (
    <section className="py-20 bg-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary-100/30 to-transparent z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            New Arrivals
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Be the first to shop our latest K-pop inspired t-shirts. Fresh designs added weekly.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={product.href}>
                <div className="relative overflow-hidden rounded-xl mb-4 bg-white shadow-lg aspect-[3/4]">
                  {product.isNew && (
                    <div className="absolute top-4 left-4 z-30">
                      <span className="bg-accent-500 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                        NEW
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="relative h-full w-full">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                    <button className="bg-white text-dark w-full py-2 rounded-full font-medium hover:bg-primary-500 hover:text-white transition-colors duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-primary-600">{product.band}</span>
                    <span className="text-accent-600 font-semibold">${product.price}</span>
                  </div>
                  <h3 className="font-medium text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                    {product.name}
                  </h3>
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
            href="/new-arrivals" 
            className="btn-primary"
          >
            View All New Arrivals
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default NewArrivals