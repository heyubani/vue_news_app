<template>
  <div class="container">
    <NewsCard
      v-for="art in fetchHeadlines"
      :key="art.author"
      :image="art.urlToImage || defaultImg"
      :title="art.title"
      :text="art.description"
      :link="art.url"
      :source="art.source.name"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Business',
  data () {
    return {
      defaultImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0oIi8yAcp7KYVApITHaz7JoYolneZKrf8IEaT1xxgSEHLW6EhZZ8WQz4MQMCM4zB8kg&usqp=CAU'
    }
  },
  mounted () {
    this.fetchHeadlines('business')
  },
  computed: {
    ...mapGetters(['getHeadline'])
  },
  methods: {
    ...mapActions(['fetchHeadlines'])
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
