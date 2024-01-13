import styles from './Button.module.css'

export default function Button({
  title="Sign in With Google",
  color,
  backgroundColor,
  fontWeight
}) {
  return( 
  <button className={styles.button} style={({color: color, backgroundColor: backgroundColor, fontWeight: fontWeight})}>{title}</button>
  )
}