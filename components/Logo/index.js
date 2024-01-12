import Image from 'next/image'
import twitter from '/public/logo-white.png'
import styles from './Logo.module.css'
 
export default function ResponsiveLogo() {
  return (
    <div className={styles.logo}style={{ display: 'fill', flexDirection: 'row'}}>
      <Image
        alt="Twitter Logo"
        src={twitter}
        style={{
          width: '60%',
          height: '60%',
        }}
      />
    </div>
  )
}