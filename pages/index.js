import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/Footer'
import Button1 from '@/components/Button1'
import Logo from '@/components/Logo'


export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" height="16px" width="16px" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={`${styles.primary}`}>
          <div className={`${styles.image}`}>
            <Logo />
          </div>
          <container className={`${styles.container}`}>
            <h1>Happening Now</h1>
            <h2>Join Today.</h2>
            <div><Button1 fontWeight={"bold"} /></div>
            <div><Button1 fontWeight={"bold"} title="Sign in With Apple" backgroundColor="white" color="black" /></div>
            <h3>OR</h3>
            <div><Button1 title="Create Account" backgroundColor="rgb(29, 161, 242)" color="White" /></div>
            <h3>Already have an account?</h3>
            <div><Button1 title="Sign In" backgroundColor="black" color="rgb(29, 161, 242)" fontWeight={"bold"} /></div>
          </container>
        </div>
      </main>
      <Footer />
    </>
  )
}
