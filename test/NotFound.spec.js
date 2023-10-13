import { toInclude } from 'jest-extended'
import { mount, RouterLinkStub } from '@vue/test-utils'
import NotFound from '@/pages/NotFound.vue'

expect.extend({ toInclude })

describe('NotFound', () => {
  test('is a Vue instance', () => {
    const section = 'section'
    const wrapper = mount(NotFound, {
      data () {
        return {
          resource: section
        }
      },
      stubs: { NuxtLink: RouterLinkStub }
    })

    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.find('.not-found').exists()).toBeTruthy()
    expect(wrapper.find('h1').exists()).toBeTruthy()
    expect(wrapper.find('h3').exists()).toBeTruthy()
    expect(wrapper.find('h3').text()).toInclude('The section you\'re looking for is not available.')
    expect(wrapper.find('.back').exists()).toBeTruthy()
  })
})
