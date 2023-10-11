<template>
  <p>
    <img class="release-thumbnail" :src="release.imageUrl"><br>
    <span class="release-title">{{ release.title }}</span><br>
    <span class="release-date">Released: {{ formattedDate(release.releaseDate) }}</span><br>
    <a
      class="release-url"
      :href="release.spotifyUrl"
      target="_blank"
    >Listen on Spotify</a>
  </p>
</template>

<script>
import { dateFormatMixin } from '../mixins/dateFormatMixin.js'

export default {
  mixins: [dateFormatMixin],
  props: {
    // eslint-disable-next-line vue/require-default-prop
    release: Object
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
