"use client"

import type { CharactersResponse } from "@/types/character"
import { useQuery } from "@tanstack/react-query"

const API_URL = "https://rickandmortyapi.com/api"

interface UseCharactersParams {
  page?: number
  name?: string
  status?: string
  species?: string
  gender?: string
}

export function useCharacters({
  page = 1,
  name = "",
  status = "",
  species = "",
  gender = "",
}: UseCharactersParams = {}) {
  return useQuery<CharactersResponse>({
    queryKey: ["characters", page, name, status, species, gender],
    queryFn: async () => {
      const params = new URLSearchParams()
      if (page) params.append("page", page.toString())
      if (name) params.append("name", name)
      if (status) params.append("status", status)
      if (species) params.append("species", species)
      if (gender) params.append("gender", gender)

      const response = await fetch(`${API_URL}/character?${params.toString()}`)
      if (!response.ok) {
        if (response.status === 404) {
          return { info: { count: 0, pages: 0 }, results: [] }
        }
        throw new Error("Failed to fetch characters")
      }
      return response.json()
    },
  })
}
