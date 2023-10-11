import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Home from '@/pages/index.vue'

describe('Home.vue', () => {
  it('ensures the home page is rendered containing key sections', () => {
    const wrapper = shallowMount(Home, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.find('.home').exists()).toBeTruthy()
    expect(wrapper.find('.home > .band-logo').exists()).toBeTruthy()
    expect(wrapper.find('.home > .page-content').exists()).toBeTruthy()
  })
})
