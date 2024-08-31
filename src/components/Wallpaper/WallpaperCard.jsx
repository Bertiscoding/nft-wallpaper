"use client"

const WallpaperCard = (props) => {
  const { imageUrl } = props

  return (
    <div className="h-[520px] w-[300px] bg-cover bg-center bg-no-repeat rounded-md hover:cursor-pointer" style={{
      backgroundImage: `url(${imageUrl})`
    }}>
      { imageUrl ? (
        <div className="w-full h-full"></div>
        ) : (
          <div className="flex items-center justify-center">
            <p>Loading...</p>
        </div>
        )
      }
    </div>
  )
}

export default WallpaperCard;
