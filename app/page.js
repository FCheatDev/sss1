// 寫註解可使用快捷鍵: ctrl + / (cmd + /)

// JavaScript命名慣例:
//大駝峰  TripList -> 元件(component) 或 類別(class)
//小駝峰  tripList -> 資料(data) 或 一般非函式(function)
import Link from "next/link";
import Image from 'next/image'
import TripCard from '@/components/TripCard'
import tripList from '@/data/trip-list'
export default function Home() {

  //陣列.map() 透過map迴圈函式能夠將陣列內的資料逐一取出做加工
  // 傳統函式 function(trip){}
  // 箭頭函式 (trip) => {}
  // cards 表示一個陣列
  const cards = tripList.map(trip => {
    //迴圈內重複執行的邏輯
    console.log("一個行程", trip)
    return <TripCard trip={trip} key={trip.id} />
  })


  return (
    <>
      <header className="bg-neutral-200 py-10 text-center">
        <div className="container mx-auto px-4">
          <h1 className="import-title">HTML &amp; CSS</h1>
          <p className="text-center">關於HTML標籤的更多資訊可參考 <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">W3Schools HTML</a></p>
          <Link href="/about" className="inline-block mt-4 px-4 py-2  transition duration-300">關於本站</Link>
          <Link href="/faq" className="inline-block mt-4 px-4 py-2  transition duration-300">常見問題</Link>
        </div>
      </header>
      <section id="tripListSection" className="my-4">
        <div className="container">
          <div className="px-10 grid mx-auto sm:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-4">
            {/* TODO: 請在此處放入一系列的產品卡片 */}
            {cards}
            {/*一個旅程的卡片 */}
          </div>

        </div>
      </section>
      <section id="htmlTagsSection" className="my-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-4">HTML標籤</h1>
          <p className="mb-6">用以表達你想在網頁上放入的各種內容</p>
          {/* TODO: 請嘗試在此處放入HTML標籤 */}
          <div className="space-y-4">
            <h1>標題字</h1>
            <h1>heading1</h1>
            <h2>heading2</h2>
            <h3>heading3</h3>
            <h4>heading4</h4>
            <h5>heading5</h5>
            <h6>heading6</h6>
            <p>Paragraph</p>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a>
            <div className="relative h-48 w-full">
              <Image
                src="/images/image1.jpg"
                alt="Sample image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="py-6 bg-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">
            CopyRight &copy; 2024
          </p>
        </div>
      </footer>
    </>
  );
}
