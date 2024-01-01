import { afterAll, afterEach, beforeAll } from 'vitest'
import { QueryClient } from '@tanstack/vue-query'
import { config } from '@vue/test-utils'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'
import mockPokemon from '../../assets/mock/pokemon.json'
import { vi } from 'vitest'

export const restHandlers = [
  http.get('https://pokeapi.co/api/v2/pokemon/kakuna', () => {
    return HttpResponse.json(mockPokemon)
  })
]

const server = setupServer(...restHandlers)

beforeAll(() => {
  config.global.provide = {
    VUE_QUERY_CLIENT: new QueryClient({
      defaultOptions: {
        queries: {
          retry: 0,
          refetchOnWindowFocus: false
        }
      }
    })
  }

  // Mock the ResizeObserver
  const ResizeObserverMock = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
  }))

  // Stub the global ResizeObserver
  vi.stubGlobal('ResizeObserver', ResizeObserverMock)

  server.listen({ onUnhandledRequest: 'error' })
})

afterAll(() => server.close())

afterEach(() => server.resetHandlers())
