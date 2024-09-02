"use client"
import { useEffect, useState } from 'react'
import WallpaperCard from './WallpaperCard'
import CardDetails from '../CardDetails'

const WallpaperCollection = (props) => {
  const { watchView } = props
  const [showDetails, setShowDetails] = useState([])
  const [imageUrls, setImageUrls] = useState([])
  const [metaData, setMetaData] = useState({
    type: [],
    description: [],
    downloadUrl: []
  })

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
        const collectionId = '4979360'

        if (!accessKey) {
          console.error("Unsplash access key is not defined.")
          return
        }
        // I've used the Unsplash-API instead of 'tailwindcss-unsplash', because that package turned out to bebuggy and unreliable. 
        // But the positive side effect here is less dependencies and vulnerabilities.
        const res = await fetch( 
          `https://api.unsplash.com/collections/${collectionId}/photos?per_page=11`,
          {
            headers: {
              Authorization: `Client-ID ${accessKey}`,
              "Accept-Version": "v1",
            },
          }
        )

        if (!res.ok) {
          throw new Error(`Error fetching data from Unsplash: ${res.statusText}`)
        }

        const data = await res.json()

        const imageDetails = data.map((img) => ({
          url: img.urls.regular,
          assetType: img.asset_type,
          description: img.alt_description,
          downloadUrl: img.links.download
        }))
        // in a "real" project I would've added lazy loading for this images, considering the size and amount of hidden elements on load.
        setImageUrls(imageDetails.map((detail) => detail.url))
        setMetaData({
          ...metaData,
          type: imageDetails.map((detail) => detail.assetType),
          description: imageDetails.map((detail) => detail.description),
          downloadUrl: imageDetails.map((detail) => detail.downloadUrl),
        })
        setShowDetails(new Array(imageDetails.length).fill(false))
      } catch (error) {
        console.error("Error fetching images from Unsplash:", error)
      }
    }

    fetchImg()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFlip = (index) => {
    setShowDetails((prevShowDetails) =>
      prevShowDetails.map((show, i) => (i === index ? !show : show))
    )
  }

  return (
    <div className="overflow-x-scroll flex gap-4 scroll-smooth mb-20 w-[inherit] mx-[6vw]">
        {imageUrls.length > 0 ? (
          imageUrls.map((url, index) => (
            <div
              key={index}
              className={`flex-none ${watchView ? 'w-[210px]' : 'w-[300px]'}`}
              onClick={() => handleFlip(index)}
            >
              {showDetails[index] ? (
                <CardDetails
                key={index}
                type={metaData.type[index]}
                alt={metaData.description[index]}
                downloadUrl={metaData.downloadUrl[index]}
                watchView={watchView}
              />
              ):(
                <WallpaperCard key={index} imageUrl={url} watchView={watchView}/> // this is very close to prop-drilling. Without time constraint, useContext would've been the choice
              )}
              </div>    
            ))
          ) : (
            <p className='text-white'>Loading...</p>
        )}
    </div>

  )
}

export default WallpaperCollection
