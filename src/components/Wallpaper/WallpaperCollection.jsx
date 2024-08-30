"use client"
import { useEffect, useState } from 'react'
import WallpaperCard from './WallpaperCard'
import CardDetails from '../CardDetails'

const WallpaperCollection = () => {
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

        setImageUrls(imageDetails.map((detail) => detail.url))
        setMetaData({
          ...metaData,
          type: imageDetails.map((detail) => detail.assetType),
          description: imageDetails.map((detail) => detail.description),
          downloadUrl: imageDetails.map((detail) => detail.downloadUrl),
        })
      } catch (error) {
        console.error("Error fetching images from Unsplash:", error)
      }
    }

    fetchImg()
  }, [])

  return (
    <>
      <div className='overflow-x-scroll flex gap-4 p-4 scroll-smooth'>
      {metaData.type.length > 0 ? (
        metaData.type.map((value, index) =>  (
          <div key={index} className="flex-none w-[300px]">
            <CardDetails
              key={index}
              type={value}
              alt={metaData.description[index]}
              downloadUrl={metaData.downloadUrl[index]}
            />
          </div>
        ))
      ) : (
        <p className='text-white'>Loading...</p>
      )}
      </div>
{/* 
      <div className="overflow-x-scroll flex gap-4 p-4 scroll-smooth ml-[120px]">
        {imageUrls.length > 0 ? (
          imageUrls.map((url, index) => (
            <div key={index} className="flex-none w-[300px]">
              <WallpaperCard key={index} imageUrl={url} />
            </div>
          ))
        ) : (
          <p className='text-white'>Loading...</p>
        )}
      </div> */}
    </>
  )
}

export default WallpaperCollection
