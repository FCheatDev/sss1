//一個React元件會有的特徵

import { Span } from "next/dist/trace";
import { space } from "postcss/lib/list";

// 1.必須要是一個function
// 2.必須要回傳一個長得像HTML的東西(JSX)


//輸出元件讓其他檔案可引用

export default function TripCard({ trip }) {
    const { name, price, image, discountPrice, isDiscounted } = trip;
    return (
        <div className="shadow-xl shadow-neutral-900/20 rounded-xl">
            <img className="w-full" src={image} alt={name} />
            <div className="p-3">
                <h2 className="text-pink-500">{name}</h2>
                <p className="text-neutral-500">$ {
                    isDiscounted ?

                        <span className="text-red-500 font-bold mx-1">
                            <span className="line-through opacity-30">{price}</span>
                            {discountPrice}</span> :
                        <span className="mx-1">{price}</span>
                }
                    NT</p>
            </div>

        </div>
    )
}


