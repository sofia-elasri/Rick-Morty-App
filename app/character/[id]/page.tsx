"use client"

import CharacterDetails from "@/components/character-details"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import { useFavorites } from "@/context/favorites-context"
import { useCharacter } from "@/hooks/use-character"
import { ArrowLeft, Heart, HeartOff } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function CharacterPage() {
  const { id } = useParams()
  const { data: character, isLoading, error } = useCharacter(id as string)
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const { toast } = useToast()

  const isFavorite = favorites.some((fav) => fav.id === Number(id))

  const handleToggleFavorite = () => {
    if (character) {
      if (isFavorite) {
        removeFavorite(character.id)
        toast({
          title: "Retiré des favoris",
          description: `${character.name} a été retiré de vos favoris`,
        })
      } else {
        addFavorite(character)
        toast({
          title: "Ajouté aux favoris",
          description: `${character.name} a été ajouté à vos favoris`,
        })
      }
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/">
            <Button variant="outline" size="icon" className="mr-4">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <Skeleton className="h-8 w-48" />
        </div>
        <div className="flex justify-center items-center py-12">
          <div className="portal-loader relative"></div>
        </div>
      </div>
    )
  }

  if (error || !character) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/">
            <Button variant="outline" size="icon" className="mr-4">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Personnage non trouvé</h1>
        </div>
        <div className="text-center py-12 bg-destructive/10 rounded-lg border border-destructive/30 p-8">
          <p className="mb-4">Impossible de charger les détails du personnage.</p>
          <Link href="/">
            <Button>Retour à la liste</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Link href="/">
            <Button variant="outline" size="icon" className="mr-4 border-primary/20 hover:bg-primary/10">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Détails du personnage</h1>
        </div>
        <Button
          onClick={handleToggleFavorite}
          variant={isFavorite ? "destructive" : "default"}
          className="gap-2 favorite-button"
        >
          {isFavorite ? (
            <>
              <HeartOff className="h-4 w-4" /> Retirer des favoris
            </>
          ) : (
            <>
              <Heart className="h-4 w-4" /> Ajouter aux favoris
            </>
          )}
        </Button>
      </div>
      <CharacterDetails character={character} />
    </div>
  )
}
