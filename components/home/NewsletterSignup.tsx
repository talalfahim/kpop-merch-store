'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) return
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail('')
    }, 1500)
  }
  
  return (
    <section className="py-20 relative overflow-hidden bg-dark">
      <div className="absolute inset-0 z-0" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-transparent z-10"></div>
      <div className="absolute -bottom-12 left-1/4 w-24 h-24 rounded-full bg-primary-500/20 blur-xl animate-pulse z-10"></div>
      <div className="absolute -bottom-10 right-1/3 w-32 h-32 rounded-full bg-secondary-500/20 blur-xl animate-pulse z-10" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-8 right-1/4 w-20 h-20 rounded-full bg-accent-500/20 blur-xl animate-pulse z-10" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="container-custom relative z-20">
        <motion.div 
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light neon-glow-secondary">
              Join the K-pop Merch Community
            </h2>
            <p className="text-light/80 md:text-lg max-w-xl mx-auto">
              Subscribe to get exclusive updates on new arrivals, limited editions, and special offers for your favorite K-pop bands.
            </p>
          </div>
          
          {isSubmitted ? (
            <motion.div 
              className="bg-primary-500/20 backdrop-blur-sm rounded-xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-light mb-2 neon-glow-primary">Thank You for Subscribing!</h3>
              <p className="text-light/80">You're now part of our K-pop community. Watch your inbox for exclusive updates and offers.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-light placeholder:text-white/50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary min-w-[150px] flex items-center justify-center group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      Subscribe
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
              <p className="text-white/60 text-sm mt-3 text-center sm:text-left">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          )}
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <span className="ml-2 text-light/80 text-sm">Early Access to Drops</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="ml-2 text-light/80 text-sm">Limited Edition Alerts</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <span className="ml-2 text-light/80 text-sm">Exclusive Discounts</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsletterSignup