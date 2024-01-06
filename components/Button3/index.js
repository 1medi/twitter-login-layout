import styles from './Button.module.css'

export default function Button() {
  return( 
  <button className={styles.button} onClick={() => console.log("Hello")}>Create Account</button>
  )
}