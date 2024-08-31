import ProductContainer from '@/components/ProductContainer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">

      <div className="flex flex-col w-full">
        <div className="pt-11">
          <div className="relative p-[1px] bg-gradient-to-r from-[#FF00A8] to-[#00E0FF] rounded-[30px] w-[244px]">
            <div className="flex items-center justify-center bg-midnight rounded-[30px] w-[242px] h-[40px]">
              <p className="text-center text-white body-sm">Introducing NFT Wallpapers</p>
            </div>
          </div>
        </div>

        <h1 className="text-display-lg text-white py-6">CCO NFT Assets <br/> as wallpapers</h1>
        <h2 className="text-title-sm text-lavender font-extralight py-6">Grab the NFT you like for your phone wallpaper</h2>

      </div>


      <ProductContainer />
    </main>
  )
}
