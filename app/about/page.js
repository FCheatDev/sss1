
import Link from "next/link";


export default function About() {
    return (
        <>
            <header className="py-10 bg-neutral-100 text-center">
                <h1>關於本站</h1>
                <p>網站簡介....</p>
                <Link href="/" className="my-4 inline-block ">返回首頁</Link>
            </header>
        </>
    )

}

