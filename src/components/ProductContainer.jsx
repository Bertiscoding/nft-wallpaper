"use client"
import { useState } from 'react'
import WallpaperCollection from './Wallpaper/WallpaperCollection'


const ProductContainer = () => {
  const [watchView, setWatchView] = useState(false)

  const handleWatchViewChange = () => {
    setWatchView(!watchView)
  }

  return (
    <>
      <div className="flex flex-col w-full">

        <div className="pt-11">
          <div className="relative p-[1px] bg-gradient-funky rounded-[30px] w-[244px]">
            <div className="flex items-center justify-center bg-midnight rounded-[30px] w-[242px] h-[40px]">
              <p className="text-center text-white text-body-sm">Introducing NFT Wallpapers</p>
            </div>
          </div>
        </div>
        <h1 className="text-display-sm md:text-display-lg text-white py-6">CC0 NFT Assets <br/> as wallpapers</h1>
        <h2 className="text-body-md md:text-title-sm text-lavender font-extralight md:font-extralight pb-6">Grab the NFT you like for your phone wallpaper</h2>

        <label className="flex cursor-pointer select-none items-center w-full md:w-fit pb-12">
          <div className="relative">
            <input
              type="checkbox"
              checked={watchView}
              onChange={handleWatchViewChange}
              className="sr-only"
            />
            <div className="h-10 w-[340px] md:w-[138px] rounded-full border border-clay bg-steel flex items-center justify-between px-1">
              <span
                className={`w-1/2 text-center text-caption-md transition duration-300 ${
                  watchView ? "text-lavender hover:text-white" : "text-steel"
                }`}
              >
                Phone
              </span>
              <span
                className={`w-1/2 text-center text-caption-md transition duration-300 ${
                  watchView ? "text-steel" : "text-lavender hover:text-white"
                }`}
              >
                Watch
              </span>
            </div>
            <div
              className={`absolute top-0.5 h-9 w-[168px] md:w-[67px] text-caption-md rounded-full bg-white flex items-center justify-center text-steel transition-transform duration-300 ${
                watchView ? "translate-x-[168px] md:translate-x-[69px]" : "translate-x-0"
              }`}
            >
              {watchView ? "Watch" : "Phone"}
            </div>
          </div>
        </label>

      </div>
      <WallpaperCollection watchView={watchView}/>
    </>
  )
}

export default ProductContainer
