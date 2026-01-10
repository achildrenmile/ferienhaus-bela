import { useState } from 'react'
import './Gallery.css'

interface GalleryProps {
  images: { src: string; alt: string }[]
}

const Gallery = ({ images }: GalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'ArrowLeft') goToPrev()
  }

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(index)}
            aria-label={`Bild ${index + 1} vergrößern`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <div className="gallery-item-overlay">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
              </svg>
            </div>
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Schließen"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); goToPrev() }}
            aria-label="Vorheriges Bild"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentIndex]?.src}
              alt={images[currentIndex]?.alt}
            />
            <p className="lightbox-caption">
              {currentIndex + 1} / {images.length}
            </p>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); goToNext() }}
            aria-label="Nächstes Bild"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      )}
    </>
  )
}

export default Gallery
