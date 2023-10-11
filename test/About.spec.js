import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import About from '@/pages/About.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('About.vue', () => {
  let state
  let store

  beforeEach(() => {
    // mock the state
    state = {
      members: [
        {
          name: 'Mark de Leon',
          role: 'vocals, guitars',
          'image-url': 'mark-deleon.png'
        },
        {
          name: 'Allan Lagat',
          role: 'bass',
          'image-url': 'allan-lagat.png'
        },
        {
          name: 'Joey Giagonia',
          role: 'lead guitars',
          'image-url': 'joey-giagonia.png'
        },
        {
          name: 'Kyle Saliva',
          role: 'drums',
          'image-url': 'kyle-saliva.png'
        }
      ]
    }

    // create a mock store with namespaced module and mocked state
    store = new Store({
      modules: {
        members: {
          state,
          namespaced: true
        }
      }
    })
  })

  it('ensures the About page is rendered containing key sections', () => {
    const wrapper = shallowMount(About, { store, localVue })

    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.find('.about').exists()).toBeTruthy()
    expect(wrapper.findAll('.member-item').length).toEqual(4)
    expect(wrapper.find('.band-pic').exists()).toBeTruthy()
    expect(wrapper.find('.biography').exists()).toBeTruthy()
  })
})
