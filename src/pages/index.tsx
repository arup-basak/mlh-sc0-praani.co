import React from 'react'
import Head from 'next/head'
import Heading from '@/components/Heading'
import Button from '@/components/Button'

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <main>
        <Heading
          text='Revolutionizing healthcare one click at a time.'
        />
        <section>
          <Heading
            text='Emerge as a Victor'
          />
        </section>
        <section>
          <div className='text-2xl'>
            Our emergency page provides real-time location tracking, so help is never far away. Filter hospitals by distance, bed availability, and more to find the perfect match.
          </div>
          <div className='text-2xl'>
            Stay connected and never miss a beat with Hospital Connect. Schedule visits, access facilities, and manage appointments seamlessly.
          </div>
          <div className='text-2xl'>
            Simplify your life with our pathology services! Book tests, retrieve results, and gain insights into your health.
          </div>
        </section>
        <section>
          <Heading
            text='Ready to transform your healthcare experience? Join now!'
          />
          <div>
            <Button
              text='Sign Up'
              onClick={() => { }}
            />
            <Button
              text='Learn More'
              onClick={() => { }}
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home