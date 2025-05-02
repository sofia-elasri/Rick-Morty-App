"use client"

import type React from "react"

import { useFavorites } from "@/context/favorites-context"
import type { Character } from "@/types/character"
import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { useToast } from "./ui/use-toast"

interface CharacterCardProps {
  character: Character
  showFavoriteButton?: boolean
}

export default function CharacterCard({ character, showFavoriteButton = false }: CharacterCardProps) {
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const { toast } = useToast()

  const isFavorite = favorites.some((fav) => fav.id === character.id)

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

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

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "bg-green-500"
      case "dead":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Link href={`/character/${character.id}`}>
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-2 character-card">
        <div className="relative">
          <div className="overflow-hidden">
            <Image
              src={character.image || "/placeholder.svg"}
              alt={character.name}
              width={300}
              height={300}
              className="w-full object-cover character-image"
            />
          </div>
          {showFavoriteButton && (
            <Button
              variant={isFavorite ? "default" : "outline"}
              size="icon"
              className={`absolute top-2 right-2 rounded-full favorite-button ${
                isFavorite ? "bg-primary text-primary-foreground" : "bg-background/80 backdrop-blur-sm"
              }`}
              onClick={handleToggleFavorite}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
            </Button>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h2 className="font-bold text-lg text-white truncate">{character.name}</h2>
          </div>
        </div>
        <CardContent className="pt-4 pb-2 space-y-2">
          <div className="flex items-center gap-2">
            <span className={`inline-block w-3 h-3 rounded-full ${getStatusColor(character.status)}`}></span>
            <span className="font-medium">
              {character.status} - {character.species}
            </span>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Dernière localisation:</p>
            <p className="font-medium truncate">{character.location.name}</p>
          </div>
        </CardContent>
        <CardFooter className="pt-0 pb-4 flex gap-2 flex-wrap">
          <Badge variant="outline" className="bg-accent/10 hover:bg-accent/20">
            {character.gender}
          </Badge>
          {character.type && (
            <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">
              {character.type}
            </Badge>
          )}
        </CardFooter>
      </Card>
    </Link>
  )
}
