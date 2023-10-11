<!-- eslint-disable vue/no-v-html -->
<template>
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
</template>

<script>
import { dateFormatMixin } from '../mixins/dateFormatMixin.js'

export default {
  mixins: [dateFormatMixin],
  props: {
    // eslint-disable-next-line vue/require-default-prop
    event: Object
  }
}
</script>

<style scoped>
.event-title {
  font-weight: bold;
}
</style>
