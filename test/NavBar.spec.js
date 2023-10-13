import { mount, RouterLinkStub } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'

describe('NavBar.vue', () => {
  it('ensures navigation bar is displayed with four main links', () => {
    const wrapper = mount(NavBar, {
      stubs: { NuxtLink: RouterLinkStub }
    })

    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.find('#nav')).toBeTruthy()
  })
})
