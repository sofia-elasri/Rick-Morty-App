import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Heart } from "lucide-react"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
  <Image
    src="/portal.png"
    alt="Rick and Morty Portal"
    fill
    className="object-cover portal-animation"
  />
</div>
          <span className="text-xl font-bold tracking-tight">Rick & Morty App</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/favorites">
            <Button variant="outline" size="sm" className="gap-2">
              <Heart className="h-4 w-4" /> Favoris
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
