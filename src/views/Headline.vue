<template>
<div class="container">
     <NewsCard
        v-for="art in getDisplayH"
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
import NewsCard from '@/components/NewsCard'

export default {
  name: 'Headline',
  components: {
    NewsCard
  },
  data () {
    return {
      getDisplayH: [],
      defaultImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0oIi8yAcp7KYVApITHaz7JoYolneZKrf8IEaT1xxgSEHLW6EhZZ8WQz4MQMCM4zB8kg&usqp=CAU'
    }
  },
  mounted () {
    this.getDisplayH()
  },
  computed: {
    // ...mapGetters(["getHeadline"]),
    getHeadlines () {
      return this.$store.getters.getDisplayH
    }
  },
  methods: {
    getHeadline: function () {
      this.$store.dispatch('fetchDisplay', {})
      const apiKey = process.env.VUE_APP_NEWS_KEY
      console.log(apiKey)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
