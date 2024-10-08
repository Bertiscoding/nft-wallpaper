"use client"

const CardDetails = (props) => {
  const { type, alt, downloadUrl, watchView } = props

  const capFirstLetter = (el) => (el.charAt(0).toUpperCase()+el.slice(1))

  const handleDownload = (url) => {
    const a = document.createElement("a")
    a.href = url
    a.setAttribute("download", "image.jpg")
    document.body.appendChild(a)
    a.click();
    document.body.removeChild(a)
  }

  return (
      <div className={`bg-steel rounded-md ${watchView ? 'h-[240px] w-[200px] p-4' : 'h-[520px] w-[300px] p-6'}`}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className={`text-caption-${watchView ? 'md' : 'lg'} text-lavender`}> Wallpapers of Unsplash</h2>
            <h1 className={`text-body-${watchView ? 'sm py-2' : 'md py-4'} text-white`}>Human and Machine</h1>
            <div className={`text-caption-${watchView ? 'md' : 'lg'} text-lavender pb-2`}>{capFirstLetter(alt)}</div>
            { !watchView && (
              <div className="divide-y divide-clay">
                <div className="text-caption-md text-lavender pb-2 pt-4 flex justify-between">
                  <span>Total Assets:</span><span className="text-white">4,000</span> 
                </div>
                <div className="text-caption-md text-lavender pt-2 flex justify-between">
                  <span>Asset Type:</span><span className="text-white">{capFirstLetter(type)}</span> 
                </div>
              </div>
            )}

          </div>
          <div className="flex justify-between">
            { !watchView && (
              <div className="border border-smokey focus:border-white focus:bg-smokey active:bg-clay hover:bg-smokey disabled:border-smokey flex justify-center items-center rounded-lg h-10 w-10 hover:cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.10016 0.833313C3.60669 0.833313 2.85995 0.833313 2.28952 1.12396C1.78776 1.37962 1.37981 1.78757 1.12415 2.28934C0.833496 2.85977 0.833496 3.60651 0.833496 5.09998V6.89998C0.833496 8.39345 0.833496 9.14019 1.12415 9.71062C1.37981 10.2124 1.78776 10.6203 2.28952 10.876C2.85995 11.1666 3.60669 11.1666 5.10016 11.1666H6.90016C8.39364 11.1666 9.14037 11.1666 9.7108 10.876C10.2126 10.6203 10.6205 10.2124 10.8762 9.71062C11.1668 9.14019 11.1668 8.39345 11.1668 6.89998V5.09998C11.1668 3.60651 11.1668 2.85977 10.8762 2.28934C10.6205 1.78757 10.2126 1.37962 9.7108 1.12396C9.14037 0.833313 8.39364 0.833313 6.90016 0.833313H5.10016Z" fill="white"/>
                  <path d="M12.0001 4.83331V6.66665C12.0001 8.53349 12.0001 9.46691 11.6368 10.1799C11.3172 10.8072 10.8073 11.3171 10.18 11.6367C9.46701 12 8.53359 12 6.66675 12H4.8335C4.8335 12.4644 4.8335 12.6967 4.86236 12.8913C5.03471 14.0531 5.947 14.9654 7.10888 15.1378C7.30346 15.1666 7.53569 15.1666 8.00016 15.1666H10.9002C12.3936 15.1666 13.1404 15.1666 13.7108 14.876C14.2126 14.6203 14.6205 14.2124 14.8762 13.7106C15.1668 13.1402 15.1668 12.3935 15.1668 10.9V8.00006C15.1668 7.53551 15.1668 7.30324 15.138 7.10864C14.9656 5.9468 14.0533 5.03455 12.8915 4.86218C12.6969 4.83331 12.4646 4.83331 12.0001 4.83331Z" fill="white"/>
                </svg>
              </div>
            )}

            <button className="text-caption-lg text-white bg-gradient-royal focus:border-white active:text-smokey hover:bg-gradient-royal-light disabled:bg-gradient-royal-dark w-[205px] h-10 flex justify-center items-center rounded-lg hover:cursor-pointer" // normally I'd create a separate, reusable component for all form elements like buttons and switch-toggles
              onClick={()=>{handleDownload(downloadUrl)}}
            >
            Download
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
