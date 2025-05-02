"use client"

import { useCharacters } from "@/hooks/use-characters"
import { useEffect, useState } from "react"
import CharacterCard from "./character-card"
import CharacterFilters from "./character-filters"
import CharacterSearch from "./character-search"
import Pagination from "./pagination"
import { Button } from "./ui/button"
import { Search, AlertCircle } from "lucide-react"

export default function CharacterList() {
  const [page, setPage] = useState(1)
  const [name, setName] = useState("")
  const [status, setStatus] = useState("all")
  const [species, setSpecies] = useState("all")
  const [gender, setGender] = useState("all")
  const [debouncedName, setDebouncedName] = useState("")

  const { data, isLoading, error } = useCharacters({
    page,
    name: debouncedName,
    status: status === "all" ? "" : status,
    species: species === "all" ? "" : species,
    gender: gender === "all" ? "" : gender,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedName(name)
    }, 500)

    return () => clearTimeout(timer)
  }, [name])

  useEffect(() => {
    // Reset to page 1 when filters change
    setPage(1)
  }, [debouncedName, status, species, gender])

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleResetFilters = () => {
    setName("")
    setStatus("all")
    setSpecies("all")
    setGender("all")
    setPage(1)
  }

  return (
    <div>
      <div className="grid gap-6 mb-8">
        <CharacterSearch value={name} onChange={setName} />
        <CharacterFilters
          status={status}
          species={species}
          gender={gender}
          onStatusChange={setStatus}
          onSpeciesChange={setSpecies}
          onGenderChange={setGender}
          onReset={handleResetFilters}
        />
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="portal-loader relative mb-6"></div>
          <p className="text-lg font-medium animate-pulse">Chargement des personnages...</p>
        </div>
      ) : error ? (
        <div className="text-center py-12 bg-destructive/10 rounded-lg border border-destructive/30 p-8">
          <AlertCircle className="h-12 w-12 mx-auto mb-4 text-destructive" />
          <h2 className="text-xl font-semibold mb-2">Erreur</h2>
          <p className="text-muted-foreground mb-6">Impossible de charger les personnages.</p>
          <Button onClick={handleResetFilters} variant="destructive">
            Réinitialiser les filtres
          </Button>
        </div>
      ) : data?.results.length === 0 ? (
        <div className="text-center py-12 bg-muted/50 rounded-lg border p-8">
          <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold mb-2">Aucun résultat</h2>
          <p className="text-muted-foreground mb-6">Aucun personnage ne correspond à vos critères de recherche.</p>
          <Button onClick={handleResetFilters}>Réinitialiser les filtres</Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.results.map((character) => (
              <CharacterCard key={character.id} character={character} showFavoriteButton />
            ))}
          </div>

          {data && (
            <Pagination
              currentPage={page}
              totalPages={data.info.pages}
              onPageChange={handlePageChange}
              className="mt-8"
            />
          )}
        </>
      )}
    </div>
  )
}
