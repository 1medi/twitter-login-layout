import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/Footer'
import Button1 from '@/components/Button1'
import Button2 from '@/components/Button2'
import Button3 from '@/components/Button3'
import Button4 from '@/components/Button4'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}> 
      <div>
      <div className={`${styles.image}`}>
        <Logo/>
       </div>
          <container className={`${styles.container}`}>
          <h1>Happening Now</h1>
          <h2>Join Today.</h2>
          <div><Button1/></div>
          <div><Button2/></div>
          <h3>OR</h3>
          <div><Button3/></div>
          <h3>Already have an account?</h3>
          <div><Button4/></div>
        </container>
      </div>
      </main>
      <Footer/>
    </>
  )
}