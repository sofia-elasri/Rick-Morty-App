"use client"

import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Filter, X } from "lucide-react"

interface CharacterFiltersProps {
  status: string
  species: string
  gender: string
  onStatusChange: (value: string) => void
  onSpeciesChange: (value: string) => void
  onGenderChange: (value: string) => void
  onReset: () => void
}

export default function CharacterFilters({
  status,
  species,
  gender,
  onStatusChange,
  onSpeciesChange,
  onGenderChange,
  onReset,
}: CharacterFiltersProps) {
  const statusOptions = [
    { value: "all", label: "Tous" },
    { value: "alive", label: "Vivant" },
    { value: "dead", label: "Mort" },
    { value: "unknown", label: "Inconnu" },
  ]

  const speciesOptions = [
    { value: "all", label: "Toutes" },
    { value: "human", label: "Humain" },
    { value: "alien", label: "Alien" },
    { value: "humanoid", label: "Humanoïde" },
    { value: "poopybutthole", label: "Poopybutthole" },
    { value: "mythological", label: "Mythologique" },
    { value: "animal", label: "Animal" },
    { value: "robot", label: "Robot" },
    { value: "cronenberg", label: "Cronenberg" },
    { value: "disease", label: "Maladie" },
    { value: "unknown", label: "Inconnu" },
  ]

  const genderOptions = [
    { value: "all", label: "Tous" },
    { value: "male", label: "Masculin" },
    { value: "female", label: "Féminin" },
    { value: "genderless", label: "Sans genre" },
    { value: "unknown", label: "Inconnu" },
  ]

  const hasActiveFilters = status !== "all" || species !== "all" || gender !== "all"

  return (
    <Card className="filter-card border-2 border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            <CardTitle>Filtres</CardTitle>
          </div>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={onReset} className="h-8 gap-1">
              <X className="h-4 w-4" /> Réinitialiser
            </Button>
          )}
        </div>
        <CardDescription>Filtrer les personnages par statut, espèce et genre</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="status-filter" className="text-sm font-medium flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-gray-500"></span>
              Statut
            </label>
            <Select value={status} onValueChange={onStatusChange}>
              <SelectTrigger id="status-filter" className="bg-background/50 backdrop-blur-sm">
                <SelectValue placeholder="Tous les statuts" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="species-filter" className="text-sm font-medium">
              Espèce
            </label>
            <Select value={species} onValueChange={onSpeciesChange}>
              <SelectTrigger id="species-filter" className="bg-background/50 backdrop-blur-sm">
                <SelectValue placeholder="Toutes les espèces" />
              </SelectTrigger>
              <SelectContent>
                {speciesOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="gender-filter" className="text-sm font-medium">
              Genre
            </label>
            <Select value={gender} onValueChange={onGenderChange}>
              <SelectTrigger id="gender-filter" className="bg-background/50 backdrop-blur-sm">
                <SelectValue placeholder="Tous les genres" />
              </SelectTrigger>
              <SelectContent>
                {genderOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
