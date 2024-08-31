import ProductContainer from '@/components/ProductContainer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative p-1 bg-gradient-to-r from-[#FF00A8] to-[#00E0FF] rounded-lg">
        <div className="flex items-center justify-center h-full bg-white rounded-lg">
          <p className="text-center">Introducing NFT Wallpapers</p>
        </div>
      </div>
      <ProductContainer />
    </main>
  )
}
