import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"로또 1등 도달 시뮬레이터",description:"매주 100장씩 구매했을 때 로또 1등은 언제 찾아올까요?"};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ko"><body>{children}</body></html>}