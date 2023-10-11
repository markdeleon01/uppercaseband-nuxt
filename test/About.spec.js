import { mount } from '@vue/test-utils'
import About from '@/pages/About.vue'

describe('About', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(About)
    expect(wrapper.vm).toBeTruthy()
  })
})
