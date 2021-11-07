<template>
  <div id="app">
    <div id="nav">
      <router-link class="link" to="/">Home</router-link> |
      <router-link class="link" to="/headline">Headline</router-link> |
       <router-link class="link" to="/about">About</router-link> |
       <router-link class="link" to="/business">Business</router-link> |
       <router-link class="link" to="/entertainment">Entertainment</router-link> |
        <router-link class="link" to="/technology">Technology</router-link> |
         <router-link class="link" to="/sport">Sport</router-link> |
       <select v-model="currentPage">
       <option>Categories</option>
      <option>All</option>
      <option v-for="source in getNewsSource" :key="source.id">{{ source.id }}
      </option>
      <router-view/>
    </select>
    </div>
    <router-view/>
      <div class="container">
    <NewsCard
      v-for="art in fetchNewsSource"
      :key="art.author"
      :image="art.urlToImage || defaultImg"
      :title="art.title"
      :text="art.description"
      :link="art.url"
      :source="art.source.name"
    />
  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      currentPage: '',
      newsSource: []
    }
  },
  watch: {
    currentSource: function (source) {
      this.fetchNewsSource(source)
    }
  },
  mounted () {
    this.fetchNewsSource()
  },
  computed: {
    ...mapGetters(['getNewsSource'])
  },
  methods: {
    ...mapActions(['fetchNewsSource'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

#nav {
  padding: 30px;
  /* background: red; */
}
#nav a {
  font-weight: bold;
  color: #000;
}
.link{
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
