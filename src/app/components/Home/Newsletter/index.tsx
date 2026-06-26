// import withBasePath from '@/utils/basePath'
// import Image from 'next/image'

// const Newsletter = () => {
//     return (
//         <section id='join-section' className='-mb-64'>
//             <div className='relative z-10'>
//                 <div className='mx-auto max-w-2xl py-16 md:py-24 px-4 sm:px-6 md:max-w-7xl lg:px-24 bg-orange rounded-lg bg-newsletter bg-contain bg-no-repeat bg-right-bottom'>
//                     <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8'>
//                         <div>
//                             <h3 className='text-5xl font-bold mb-3'> Level Up Your Skills</h3>
//                             <h4 className='text-lg font-medium mb-7'>
//                                Get weekly updates on AI, Cloud Computing, Cybersecurity, and more. Join 10,000+ learners!
//                             </h4>
//                             <div className='flex gap-2'>
//                                 <input
//                                     type='Email address'
//                                     name='q'
//                                     className='py-4 w-full text-base px-4 bg-white transition-all duration-500 focus:border-primary focus:outline-1 rounded-lg pl-4'
//                                     placeholder='Enter your email'
//                                     autoComplete='off'
//                                 />
//                                 <button className='bg-primary cursor-pointer hover:bg-transparent border border-primary hover:text-primary text-white font-medium py-2 px-4 rounded-sm'>
//                                     Subscribe
//                                 </button>
//                             </div>
//                         </div>
//                         <div className='hidden sm:block'>
//                             <div className='float-right -mt-32'>
//                                 <Image
//                                     src={withBasePath('/images/newsletter/Free.svg')}
//                                     alt='bgimg'
//                                     width={64}
//                                     height={64}
//                                     className='w-auto'
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Newsletter




'use client'                           // ← must be a client component

import { useState } from 'react'
import withBasePath from '@/utils/basePath'
import Image from 'next/image'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setLoading(true)
    setSuccess(false)
    setError(false)

    try {
      const response = await fetch('https://formsubmit.co/ajax/dreamztouchhr@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email: email }),   // send only the email
      })

      const data = await response.json()
      if (data.success) {
        setSuccess(true)
        setEmail('')                               // clear input
        setTimeout(() => setSuccess(false), 5000)  // hide message after 5s
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id='join-section' className='-mb-64'>
      <div className='relative z-10'>
        <div className='mx-auto max-w-2xl py-16 md:py-24 px-4 sm:px-6 md:max-w-7xl lg:px-24 bg-orange rounded-lg bg-newsletter bg-contain bg-no-repeat bg-right-bottom'>
          <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8'>
            <div>
              <h3 className='text-5xl font-bold mb-3'>Level Up Your Skills</h3>
              <h4 className='text-lg font-medium mb-7'>
                Get weekly updates on AI, Cloud Computing, Cybersecurity, and more. Join 10,000+ learners!
              </h4>

              {/* ——— FORM ——— */}
              <form onSubmit={handleSubmit} className='flex gap-2'>
                <input
                  type='email'                     // ← better to use "email" type
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='py-4 w-full text-base px-4 bg-white transition-all duration-500 focus:border-primary focus:outline-1 rounded-lg pl-4'
                  placeholder='Enter your email'
                  autoComplete='off'
                  required
                  disabled={loading}
                />
                <button
                  type='submit'
                  disabled={loading || !email.trim()}
                  className={`bg-primary cursor-pointer hover:bg-transparent border border-primary hover:text-primary text-white font-medium py-2 px-4 rounded-sm transition-colors ${
                    (loading || !email.trim()) ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Subscribing…' : 'Subscribe'}
                </button>
              </form>

              {/* ——— Status Messages ——— */}
              {success && (
                <p className='mt-4 text-green-700 font-medium'>
                  ✅ Subscribed successfully! Check your inbox.
                </p>
              )}
              {error && (
                <p className='mt-4 text-red-600 font-medium'>
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </div>

            <div className='hidden sm:block'>
              <div className='float-right -mt-32'>
                <Image
                  src={withBasePath('/images/newsletter/Free.svg')}
                  alt='bgimg'
                  width={64}
                  height={64}
                  className='w-auto'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
