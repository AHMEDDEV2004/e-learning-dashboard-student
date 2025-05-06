"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ErrorDemo() {
  const [shouldError, setShouldError] = useState(false)

  if (shouldError) {
    throw new Error("This is a demo error to show the error page scrolling behavior")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-6 text-2xl font-bold">Error Page Demo</h1>
      <p className="mb-6 max-w-md text-center">
        Click the button below to trigger an error and see the error page with proper scrolling behavior.
      </p>
      <Button onClick={() => setShouldError(true)}>Trigger Error</Button>
    </div>
  )
}
