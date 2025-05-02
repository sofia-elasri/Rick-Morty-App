"use client"

import type { Character } from "@/types/character"
import { useQuery } from "@tanstack/react-query"

const API_URL = "https://rickandmortyapi.com/api"

export function useCharacter(id: string) {
  return useQuery<Character>({
    queryKey: ["character", id],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/character/${id}`)
      if (!response.ok) {
        throw new Error("Failed to fetch character")
      }
      return response.json()
    },
  })
}
