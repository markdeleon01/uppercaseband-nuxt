import { mount, RouterLinkStub } from '@vue/test-utils'
import NetworkIssue from '@/pages/NetworkIssue.vue'

describe('NotFound', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NetworkIssue, {
      stubs: { NuxtLink: RouterLinkStub }
    })

    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.find('.network-issue').exists()).toBeTruthy()
    expect(wrapper.find('h1').exists()).toBeTruthy()
    expect(wrapper.find('h3').exists()).toBeTruthy()
    expect(wrapper.find('h3').text()).toContain(
      'Unable to retrieve page content.'
    )
    expect(wrapper.find('.back').exists()).toBeTruthy()
  })
})
