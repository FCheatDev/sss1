
import Link from "next/link";
import faqList from "@/data/faq-list";

export default function FAQ() {
    return (
        <>
            <header className="py-10 bg-neutral-100 text-center">
                <h1>常見問題</h1>
                <p>以下是一些常見問題的解答...</p>
                <Link href="/" className="my-4 inline-block">返回首頁</Link>
            </header>
            <section className="bg-neutral-200 py-10">
                <div className="container mx-auto px-4">
                    <div className="space-y-6">
                        {
                            faqList.map(faq => {
                                return (
                                    <div className="bg-white mb-4 rounded-md shadow-md" key={faq.id}>
                                        <h2 className="p-4">{faq.question}</h2>
                                        <h3 className="p-4 border-t border-neutral-300 text-neutral-400">{faq.answer}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

