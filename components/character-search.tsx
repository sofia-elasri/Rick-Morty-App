"use client"

import { Search } from "lucide-react"
import { Input } from "./ui/input"

interface CharacterSearchProps {
  value: string
  onChange: (value: string) => void
}

export default function CharacterSearch({ value, onChange }: CharacterSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="text"
        placeholder="Rechercher un personnage..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-background/80 backdrop-blur-sm border-2 border-primary/20 h-12 text-lg"
      />
    </div>
  )
}
