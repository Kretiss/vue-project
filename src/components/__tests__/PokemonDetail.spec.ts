import { describe, it, expect } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import PokemonDetail from '../PokemonDetail.vue'

describe('PokemonDetail', () => {
  it('Pokemon card renders properly', async () => {
    const wrapper = mount(PokemonDetail, { props: { pokemonName: 'kakuna' } })

    await flushPromises()

    await wrapper.get('[data-test="open-card-button"]').trigger('click')

    const header = document.querySelector('[data-test="dialog-panel"] h2')

    expect(header?.innerHTML).toContain('kakuna')
  })
})
