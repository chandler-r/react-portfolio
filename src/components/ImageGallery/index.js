import { useState, useEffect } from 'react'
import './index.scss'

const ImageGallery = () => {
  const [currentSet, setCurrentSet] = useState(0)

  const imageSets = [
    {
      id: 1,
      images: [
        { src: 'https://github.com/chandler-r/react-portfolio/blob/main/public/images/gallery/image3.jpg', size: 'small' },
        { src: 'https://picsum.photos/400/400', size: 'medium' },
        { src: 'https://picsum.photos/400/400', size: 'small' },
        { src: 'https://picsum.photos/400/400', size: 'large' },
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
