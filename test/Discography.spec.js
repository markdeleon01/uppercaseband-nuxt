import { mount } from '@vue/test-utils'
import Discography from '@/pages/Discography.vue'

describe('Discography', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Discography)
    expect(wrapper.vm).toBeTruthy()
  })
})
