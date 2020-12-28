import { shallowMount } from '@vue/test-utils'
import Gifs from '@/components/Gifs.vue'

describe('Gifs', () => {
    it('renders gifs', () => {
        const gifs = [
            {
                id: 'test-id',
                title: 'test-title',
                preview: 'test-preview',
                url: 'test-url'
            }
        ]

        const wrapper = shallowMount(Gifs, {
            propsData: { gifs }
        })

        expect(wrapper.find('.gif').attributes('href')).toBe(gifs[0].url)
    })
})
