"use client"

const WallpaperCard = (props) => {
  const { imageUrl, watchView } = props

  return (
    <div className={`bg-cover bg-center bg-no-repeat rounded-md hover:cursor-pointer 
                     ${watchView ? 'h-[240px] w-[200px]' : 'h-[520px] w-[300px]'}`}
        style={{backgroundImage: `url(${imageUrl})`}}>
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
