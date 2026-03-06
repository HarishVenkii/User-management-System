"use client"

import { Provider } from "react-redux"
import { store } from "@/store/store"
import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html>
      <body className="bg-gray-100">

        <Provider store={store}>

          <Toaster position="top-right" />

          {children}

        </Provider>

      </body>
    </html>
  )
}