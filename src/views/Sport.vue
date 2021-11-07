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
  name: 'Sport',
  data () {
    return {
      image: 'https://sportshub.cbsistatic.com/i/r/2021/11/03/dfa65109-0ac8-4788-988a-268d3d065c60/thumbnail/1200x675/bbd77cf0cb3ae78743649aec280fdcaf/aaron-rodgers-2.jpg',
      newsCategory: []
    }
  },
  mounted () {
    this.fetchHeadlines('sports')
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
