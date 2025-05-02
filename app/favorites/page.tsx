"use client"

import CharacterCard from "@/components/character-card"
import { Button } from "@/components/ui/button"
import { useFavorites } from "@/context/favorites-context"
import { ArrowLeft, Heart } from "lucide-react"
import Link from "next/link"

export default function FavoritesPage() {
  const { favorites } = useFavorites()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link href="/">
          <Button variant="outline" size="icon" className="mr-4 border-primary/20 hover:bg-primary/10">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Personnages favoris</h1>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-12 bg-muted/50 rounded-lg border p-8">
          <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold mb-2">Aucun favori</h2>
          <p className="text-muted-foreground mb-6">Vous n&apos;avez pas encore ajouté de personnages à vos favoris.</p>
          <Link href="/">
            <Button>Parcourir les personnages</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((character) => (
            <CharacterCard key={character.id} character={character} showFavoriteButton />
          ))}
        </div>
      )}
    </div>
  )
}
