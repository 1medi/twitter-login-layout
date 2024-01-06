import Image from 'next/image'
import twitter from '/public/logo-white.png'
 
export default function Responsive() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <Image
        alt="Twitter Logo"
        // Importing an image will
        // automatically set the width and height
        src={twitter}
        // Make the image display full width
        style={{
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  )
}