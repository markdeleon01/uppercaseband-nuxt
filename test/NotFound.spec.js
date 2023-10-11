import { mount, RouterLinkStub } from '@vue/test-utils'
import NotFound from '@/pages/NotFound.vue'

describe('NotFound', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NotFound, {
      stubs: { NuxtLink: RouterLinkStub }
    })

    expect(wrapper.vm).toBeTruthy()
  })
})
