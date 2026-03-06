"use client"

import "./globals.css"
import { Provider } from "react-redux"
import { store } from "@/store/store"
import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html>
      <body>

        <Provider store={store}>

          <Toaster position="top-right" />

          {children}

        </Provider>

      </body>
    </html>
  )
}