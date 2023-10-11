<template>
  <div class="discography">
    <h1>U P P E R C A S E</h1>
    <hr width="50%" align="center">
    <h2>Discography</h2>
    <DiscographyListing
      v-for="release in discography.releases"
      :key="release.title"
      class="release-item"
      :release="release"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DiscographyListing from '@/components/DiscographyListing.vue'

export default {
  name: 'Discography',
  components: {
    DiscographyListing
  },
  async fetch ({ store, next }) {
    try {
      await store.dispatch('discography/fetchReleases')
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
    ...mapState(['discography'])
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
.release-item {
  padding-top: 20px;
  padding-bottom: 20px;
}
.release-thumbnail {
  width: 300px;
  height: 300px;
  padding-bottom: 10px;
}
.release-title {
  font-weight: bold;
}
</style>
