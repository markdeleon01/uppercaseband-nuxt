<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="events">
    <h1>U P P E R C A S E</h1>
    <hr width="50%" align="center">
    <h2>Events</h2>
    <EventListing
      v-for="event in events.events"
      :key="event.id"
      :event="event"
      class="event-item"
    >
      <p>
        <span class="event-title">{{ event.title }}</span><br>
        <span class="event-date">{{ formattedDate(event.date) }}</span><br>
        <span class="event-location">{{ event.location }}</span><br>
        <span class="event-content" v-html="event.content" />
        <a
          class="event-url"
          :href="event.externalUrl"
          target="_blank"
        >Learn more</a>
      </p>
    </EventListing>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventListing from '@/components/EventListing.vue'

export default {
  name: 'Events',
  components: {
    EventListing
  },
  async fetch ({ store, next }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (e) {
      if (e.response && e.response.status === 404) {
        // redirect to 404 page with name of resource missing
        next({ name: 'NotFound', params: { resource: 'page' } })
      } else {
        next({ name: 'NetworkIssue' })
      }
    }
  },
  computed: {
    // map store module and expose to component as data
    ...mapState(['events'])
  },
  methods: {
    formattedDate: (value) => {
      const date = new Date(value)
      return date.toLocaleString(['en-US'], {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.event-item {
  padding-top: 40px;
}
.event-title {
  font-weight: bold;
}

@media (min-width: 330px) {
  .event-item {
    padding-left: 25px;
    padding-right: 25px;
  }
}
@media (min-width: 405px) {
  .event-item {
    padding-left: 30px;
    padding-right: 30px;
  }
}
@media (min-width: 450px) {
  .event-item {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (min-width: 495px) {
  .event-item {
    padding-left: 50px;
    padding-right: 50px;
  }
}
@media (min-width: 710px) {
  .event-item {
    padding-left: 60px;
    padding-right: 60px;
  }
}
@media (min-width: 730px) {
  .event-item {
    padding-left: 70px;
    padding-right: 70px;
  }
}
@media (min-width: 750px) {
  .event-item {
    padding-left: 80px;
    padding-right: 80px;
  }
}
@media (min-width: 770px) {
  .event-item {
    padding-left: 90px;
    padding-right: 90px;
  }
}
@media (min-width: 790px) {
  .event-item {
    padding-left: 100px;
    padding-right: 100px;
  }
}
@media (min-width: 800px) {
  .event-item {
    padding-left: 120px;
    padding-right: 120px;
  }
}
@media (min-width: 850px) {
  .event-item {
    padding-left: 150px;
    padding-right: 150px;
  }
}
@media (min-width: 900px) {
  .event-item {
    padding-left: 180px;
    padding-right: 180px;
  }
}
@media (min-width: 1024px) {
  .event-item {
    padding-left: 200px;
    padding-right: 200px;
  }
}
</style>
