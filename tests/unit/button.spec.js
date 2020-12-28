import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Gifs', () => {
    const text = 'Show More'

    const wrapper = shallowMount(Button, {
        slots: {
            default: text
        }
    })

    it('renders button text', () => {
        expect(wrapper.text()).toBe(text)
    })

    it('emits event when click', () => {
        wrapper.trigger('click')

        expect(wrapper.emitted()).toHaveProperty('click')
    })
})
