"use client"

const CardDetails = (props) => {
  const { type, alt, downloadUrl } = props
  return (
    <div className="h-[520px] w-[300px] bg-steel rounded-md p-6">
      <h2 className="text-caption-lg text-lavender"> Wallpapers of Unsplash</h2>
      <h1 className="text-body-md text-white">Human and Machine</h1>
      <div className="text-caption-lg text-lavender pb-2 pt-4">{alt}</div>
      <div className="divide-y divide-clay">
        <div className="text-caption-md text-lavender pb-2 pt-4 flex justify-between">
          <span>Total Assets:</span><span>4,000</span> 
        </div>
        <div className="text-caption-md text-lavender pt-2 flex justify-between">
          <span>Asset Type:</span><span>{type}</span> 
        </div>
      </div>
      {/* <p className="text-caption-lg text-lavender">{downloadUrl}</p> */}
    </div>
  )
}
export default CardDetails

