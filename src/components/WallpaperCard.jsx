"use client"
import process from "process";
import { useEffect, useState } from "react";

const WallpaperCard = () => {
  const [imageUrl, setImageUrl] = useState(undefined)

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY

        if (!accessKey) {
          console.error("Unsplash access key is not defined.")
          return
        }

        const res = await fetch(
          "https://api.unsplash.com/search/photos?page=1&query=wallpaper&orientation=portrait", 
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

        if (data.results && data.results.length > 0) {
          setImageUrl(data.results[0].urls.regular)
        } else {
          console.error("No images found")
        }
      } catch (error) {
        console.error("Error fetching image from Unsplash:", error)
      }
    }

    fetchImg()
  }, [])

  return (
    <div className="rid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4">
        <div className="XXX" style={{ backgroundImage: `url(${imageUrl})` }}>
          { imageUrl ? (
            <div className="XXX"></div>
            ) : (
              <div className="flex items-center justify-center">
                <p>Loading...</p>
            </div>
            )
          }
        </div>
      </div>
      <div className="p-4">text box</div>
    </div>
  )
}

export default WallpaperCard;
