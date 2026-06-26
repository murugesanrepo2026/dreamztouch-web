// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { Icon } from '@iconify/react/dist/iconify.js'
// import { useEffect, useState } from 'react'
// import { FooterLinkType } from '@/app/types/footerlinks'
// import withBasePath from '@/utils/basePath'

// const Footer = () => {
//     const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([])

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await fetch(withBasePath('/data/data.json'))
//                 if (!res.ok) throw new Error('Failed to fetch')
//                 const data = await res.json()
//                 SetFooterlink(data.FooterLinkData)
//             } catch (error) {
//                 console.error('Error fetching services:', error)
//             }
//         }
//         fetchData()
//     }, [])

//     return (
//         <div className='bg-primary' id='first-section'>
//             <div className='container pt-60 pb-10'>
//                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 xl:gap-8'>
//                     <div className='col-span-4 flex flex-col gap-5'>
//                         <div>
//                             <Image
//                                 src={withBasePath('/images/logo/logo2.svg')}
//                                 alt='Logo'
//                                 width={48}
//                                 height={64}
//                             />
//                         </div>
//                         <p className='text-white text-lg font-medium leading-7'>
//                             {' '}
//                             Level up your skills, and get dream <br /> job with passion.{' '}
//                         </p>
//                         <div className='flex gap-4'>
//                             <Link
//                                 //href='#!'
//                                 href='https://www.instagram.com/dreamztouch/'
//                                 scroll={false}
//                                 className='bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300'>
//                                 <Icon
//                                     icon='tabler:brand-instagram'
//                                     className='text-2xl inline-block'
//                                 />
//                             </Link>
//                             <Link
//                                 href='https://dribbble.com/dreamztouch'
//                                 scroll={false}
//                                 className='bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300'>
//                                 <Icon
//                                     icon='tabler:brand-dribbble'
//                                     className='text-2xl inline-block'
//                                 />
//                             </Link>
//                             <Link
//                                 href='https://twitter.com/dreamztouch'
//                                 scroll={false}
//                                 className='bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300'>
//                                 <Icon
//                                     icon='tabler:brand-twitter-filled'
//                                     className='text-2xl inline-block'
//                                 />
//                             </Link>
//                             <Link
//                                 href='https://youtube.com/@dreamztouch'
//                                 scroll={false}
//                                 className='bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300'>
//                                 <Icon
//                                     icon='tabler:brand-youtube-filled'
//                                     className='text-2xl inline-block'
//                                 />
//                             </Link>
//                         </div>
//                     </div>

//                     {/* CLOUMN-2/3 */}
//                     <div className='col-span-4'>
//                         <div className='flex gap-20'>
//                             {footerlink.map((product, i) => (
//                                 <div key={i} className='group relative col-span-2'>
//                                     <p className='text-white text-xl font-semibold mb-9'>
//                                         {product.section}
//                                     </p>
//                                     <ul>
//                                         {product.links.map((item, i) => (
//                                             <li key={i} className='mb-3'>
//                                                 <Link
//                                                     href={item.href}
//                                                     scroll={item.href !== "/"}
//                                                     className='text-white/60 hover:text-white text-sm font-normal mb-6'>
//                                                     {item.label}
//                                                 </Link>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     {/* CLOUMN-4 */}

//                     <div className='col-span-4'>
//                         <h3 className='text-white text-xl font-semibold mb-6'>
//                             Stay up to date
//                         </h3>
//                         <div className='relative text-white focus-within:text-white flex flex-row-reverse w-[50%] lg:w-full'>
//                             <input
//                                 type='Email address'
//                                 name='q'
//                                 className='py-4 text-sm w-full text-white bg-white/15 rounded-md pl-4 focus:outline-hidden bg-emailbg focus:text-white'
//                                 placeholder='Your email address'
//                                 autoComplete='off'
//                             />
//                             <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
//                                 <button
//                                     type='submit'
//                                     className='p-1 focus:outline-hidden focus:shadow-outline'>
//                                     <Icon
//                                         icon='tabler:send'
//                                         className='text-white text-2xl inline-block me-2'
//                                     />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='py-3'>
//                 <h3 className='text-center text-white/60'>
//                     @2013 - All Rights Reserved by{' '}
//                     <Link
//                         href='https://dreamztouch.in/'
//                         target='_blank'
//                         className='hover:text-white'>
//                         {' '}
//                         www.dreamztouch.in {' '}
//                     </Link>
//                     {/* • Distributed by{' '} */}
//                     {/* <Link
//                         href='https://themewagon.com/'
//                         target='_blank'
//                         className='hover:text-white'>
//                         {' '}
//                         ThemeWagon
//                     </Link> */}
//                 </h3>
//             </div>
//         </div>
//     )
// }

// export default Footer





'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useEffect, useState } from 'react'
import { FooterLinkType } from '@/app/types/footerlinks'
import withBasePath from '@/utils/basePath'

const Footer = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([])
  // --- NEW: state for the newsletter ---
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(withBasePath('/data/data.json'))
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        SetFooterlink(data.FooterLinkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  // --- NEW: submit handler ---
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setLoading(true)
    setSuccess(false)
    setError(false)

    try {
      const response = await fetch('https://formsubmit.co/ajax/dreamztouchhr@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email: email }),
      })

      const data = await response.json()
      if (data.success) {
        setSuccess(true)
        setEmail('')
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='bg-primary' id='first-section'>
      <div className='container pt-60 pb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 xl:gap-8'>
          {/* Column 1 – logo & socials (unchanged) */}
          <div className='col-span-4 flex flex-col gap-5'>
            <div>
              <Image
                src={withBasePath('/images/logo/logo2.svg')}
                alt='Logo'
                width={48}
                height={64}
              />
            </div>
            <p className='text-white text-lg font-medium leading-7'>
              Level up your skills, and get dream <br /> job with passion.
            </p>
            <div className='flex gap-4'>
              <Link
                href='https://www.instagram.com/dreamztouch/'
                scroll={false}
                className='bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300'
              >
                <Icon icon='tabler:brand-instagram' className='text-2xl inline-block' />
              </Link>
              <Link
                href='https://dribbble.com/dreamztouch'
                scroll={false}
                className='bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300'
              >
                <Icon icon='tabler:brand-dribbble' className='text-2xl inline-block' />
              </Link>
              <Link
                href='https://twitter.com/dreamztouch'
                scroll={false}
                className='bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300'
              >
                <Icon icon='tabler:brand-twitter-filled' className='text-2xl inline-block' />
              </Link>
              <Link
                href='https://youtube.com/@dreamztouch'
                scroll={false}
                className='bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300'
              >
                <Icon icon='tabler:brand-youtube-filled' className='text-2xl inline-block' />
              </Link>
            </div>
          </div>

          {/* Columns 2 & 3 – footer links (unchanged) */}
          <div className='col-span-4'>
            <div className='flex gap-20'>
              {footerlink.map((product, i) => (
                <div key={i} className='group relative col-span-2'>
                  <p className='text-white text-xl font-semibold mb-9'>{product.section}</p>
                  <ul>
                    {product.links.map((item, i) => (
                      <li key={i} className='mb-3'>
                        <Link
                          href={item.href}
                          scroll={item.href !== '/'}
                          className='text-white/60 hover:text-white text-sm font-normal mb-6'
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4 – Stay up to date (UPDATED) */}
          <div className='col-span-4'>
            <h3 className='text-white text-xl font-semibold mb-6'>Stay up to date</h3>

            {/* ——— NEW FORM ——— */}
            <form onSubmit={handleSubscribe} className='relative text-white focus-within:text-white flex flex-row-reverse w-[50%] lg:w-full'>
              <input
                type='email'                         // ← corrected type
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='py-4 text-sm w-full text-white bg-white/15 rounded-md pl-4 focus:outline-hidden bg-emailbg focus:text-white'
                placeholder='Your email address'
                autoComplete='off'
                required
                disabled={loading}
              />
              <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
                <button
                  type='submit'
                  disabled={loading || !email.trim()}
                  className={`p-1 focus:outline-hidden focus:shadow-outline ${
                    (loading || !email.trim()) ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Icon
                    icon='tabler:send'
                    className='text-white text-2xl inline-block me-2'
                  />
                </button>
              </div>
            </form>

            {/* ——— Feedback messages ——— */}
            {success && (
              <p className='mt-3 text-green-300 text-sm font-medium'>
                ✅ Subscribed! Check your inbox.
              </p>
            )}
            {error && (
              <p className='mt-3 text-red-300 text-sm font-medium'>
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Footer bottom (unchanged) */}
      <div className='py-3'>
        <h3 className='text-center text-white/60'>
          @2013 - All Rights Reserved by{' '}
          <Link href='https://dreamztouch.in/' target='_blank' className='hover:text-white'>
            www.dreamztouch.in
          </Link>
        </h3>
      </div>
    </div>
  )
}

export default Footer
