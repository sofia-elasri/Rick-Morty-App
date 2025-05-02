import type { Character } from "@/types/character"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { MapPin, Users, Calendar } from "lucide-react"

interface CharacterDetailsProps {
  character: Character
}

export default function CharacterDetails({ character }: CharacterDetailsProps) {
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

  const getStatusTextColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "text-green-500"
      case "dead":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <div className="grid md:grid-cols-[300px_1fr] gap-8">
      <div>
        <Card className="overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10">
          <CardContent className="p-0 overflow-hidden">
            <div className="relative">
              <Image
                src={character.image || "/placeholder.svg"}
                alt={character.name}
                width={300}
                height={300}
                className="w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <Badge className={`${getStatusTextColor(character.status)} bg-background/80 backdrop-blur-sm`}>
                  <span className={`inline-block w-2 h-2 rounded-full ${getStatusColor(character.status)} mr-1`}></span>
                  {character.status}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">{character.name}</h2>
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-lg ${getStatusTextColor(character.status)} font-medium`}>{character.species}</span>
            {character.type && (
              <>
                <span className="text-muted-foreground">•</span>
                <span className="text-lg text-muted-foreground">{character.type}</span>
              </>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-accent/10 hover:bg-accent/20 text-sm px-3 py-1">
              {character.gender}
            </Badge>
          </div>
        </div>

        <Card className="border-2 border-primary/20">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead colSpan={2} className="text-lg">
                  Informations
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" /> Origine
                </TableCell>
                <TableCell className="font-semibold">{character.origin.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" /> Localisation
                </TableCell>
                <TableCell className="font-semibold">{character.location.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" /> Nombre d&apos;épisodes
                </TableCell>
                <TableCell className="font-semibold">{character.episode.length}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" /> Premier épisode
                </TableCell>
                <TableCell className="font-semibold">{character.episode[0].split("/").pop() || "Inconnu"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" /> Dernier épisode
                </TableCell>
                <TableCell className="font-semibold">
                  {character.episode[character.episode.length - 1].split("/").pop() || "Inconnu"}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}
