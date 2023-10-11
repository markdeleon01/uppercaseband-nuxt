import { mount } from '@vue/test-utils'
import Events from '@/pages/Events.vue'

describe('Events', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Events)
    expect(wrapper.vm).toBeTruthy()
  })
})
