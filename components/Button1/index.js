import styles from './Button.module.css'

export default function Button({
  title="Sign in With Google",
  color,
  backgroundColor 
}) {
  return( 
  <button className={styles.button} style={({color: color, backgroundColor: backgroundColor})}>{title}</button>
  )
}