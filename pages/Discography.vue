<template>
  <div class="discography">
    <h1>U P P E R C A S E</h1>
    <hr width="50%" align="center">
    <h2>Discography</h2>
    <div
      v-for="release in discography.releases"
      :key="release.title"
      class="release-item"
    >
      <p>
        <img class="release-thumbnail" :src="release.imageUrl"><br>
        <span class="release-title">{{ release.title }}</span><br>
        <span class="release-date">Released: {{ formattedDate(release.releaseDate) }}</span><br>
        <a :href="release.spotifyUrl" target="_blank">Listen on Spotify</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Discography',
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
