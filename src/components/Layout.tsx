import Head from "next/head"
import Header from "./Header"

import { Poppins } from "next/font/google"
const poppins = Poppins({
    weight: ["300", "500", "700"],
    subsets: ['latin']
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={`w-full h-screen bg-dark ${poppins.className}`}>
            <Head>
                <title>Task Manager</title>
            </Head>
            <header>
                <Header/>
            </header>
            <main className="">
                {children}
            </main>
            <footer></footer>
        </div>
    )
}