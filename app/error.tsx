"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertCircle, ArrowLeft, RefreshCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-3xl">
        <Card className="overflow-hidden">
          <CardHeader className="bg-red-50 pb-4">
            <div className="flex items-center gap-2 text-red-600">
              <AlertCircle className="h-6 w-6" />
              <CardTitle>Something went wrong</CardTitle>
            </div>
            <CardDescription className="text-red-600/80">
              We encountered an error while processing your request
            </CardDescription>
          </CardHeader>

          <div className="max-h-[60vh] overflow-y-auto p-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <CardContent className="p-4 pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-medium">Error Details</h3>
                  <div className="rounded-md bg-gray-100 p-3">
                    <p className="font-mono text-sm">{error.message || "An unexpected error occurred"}</p>
                    {error.digest && <p className="mt-2 text-xs text-gray-500">Error ID: {error.digest}</p>}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-2 font-medium">Troubleshooting Steps</h3>
                  <ul className="ml-5 list-disc space-y-2 text-sm">
                    <li>Refresh the page and try again</li>
                    <li>Clear your browser cache and cookies</li>
                    <li>Check your internet connection</li>
                    <li>Try accessing the page at a later time</li>
                    <li>If you're using a VPN or proxy, try disabling it temporarily</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-2 font-medium">Technical Information</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      This error has been logged with a unique identifier and our technical team has been notified. If
                      you continue to experience this issue, please contact support with the Error ID shown above.
                    </p>
                    <p>Additional information about this error may be available in your browser's developer console.</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-2 font-medium">Common Causes</h3>
                  <ul className="ml-5 list-disc space-y-2 text-sm">
                    <li>Temporary server issues or maintenance</li>
                    <li>Network connectivity problems</li>
                    <li>Browser compatibility issues</li>
                    <li>Outdated cached resources</li>
                    <li>Session timeout or authentication issues</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-2 font-medium">Still Need Help?</h3>
                  <p className="text-sm">
                    If you've tried the troubleshooting steps and are still experiencing issues, please contact our
                    support team for assistance. Be sure to include the Error ID in your communication.
                  </p>
                </div>
              </div>
            </CardContent>
          </div>

          <CardFooter className="flex flex-col gap-2 border-t bg-gray-50 p-4 sm:flex-row">
            <Button variant="outline" className="w-full gap-1 sm:w-auto" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Return Home
              </Link>
            </Button>
            <Button className="w-full gap-1 sm:w-auto" onClick={reset}>
              <RefreshCcw className="h-4 w-4" />
              Try Again
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
