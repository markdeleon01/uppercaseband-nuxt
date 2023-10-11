import * as members from '@/store/modules/members.js'
import * as discography from '@/store/modules/discography.js'
import * as events from '@/store/modules/events.js'

// the one single source of truth
export default {
  modules: {
    members,
    discography,
    events
  }
}
