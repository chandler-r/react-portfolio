import { useState, useEffect } from 'react'
import './index.scss'

const ImageGallery = () => {
  const [currentSet, setCurrentSet] = useState(0)

  const imageSets = [
    {
      id: 1,
      images: [
        {
          src: `${process.env.PUBLIC_URL}/images/gallery/test4.jpg`,
          size: 'small',
        },
        {
          src: `${process.env.PUBLIC_URL}/images/gallery/image1.jpg`,
          size: 'medium',
        },
        {
          src: `${process.env.PUBLIC_URL}/images/gallery/image2.jpg`,
          size: 'small',
        },
        {
          src: `${process.env.PUBLIC_URL}/images/gallery/image3.jpg`,
          size: 'large',
        },
      ],
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % imageSets.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [imageSets.length])

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {imageSets[currentSet].images.map((image, index) => (
          <div key={index} className={`gallery-item ${image.size}`}>
            <img src={image.src} alt={`Gallery ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
