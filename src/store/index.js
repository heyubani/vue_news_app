import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// const apiKey = process.env.VUE_APP_NEWS_KEY
const base = 'https://newsapi.org/v2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    displayH: [],
    headline: [],
    newsSource: []
  },
  mutations: {
    setHeadline: (state, payload) => {
      state.headline = payload
    },
    setNewsSource: (state, payload) => {
      state.newsSource = payload
    },
    setDisplayH: (state, payload) => {
      state.newsSource = payload
    }
  },
  getters: {
    getHeadline: (state) => state.headline,
    getNewsSource: (state) => state.newsSource,
    getDisplayH: (state) => state.displayH
  },
  actions: {
    fetchHeadlines: ({ commit }, categories) => {
      const apiKey = process.env.VUE_APP_NEWS_KEY
      try {
        axios
          .get(`${base}/top-headlines?country=${categories}&apiKey=${apiKey}`)
          .then((data) => {
            commit('setHeadline', data.data.articles)
            console.log('headline', data.data.articles)
          })
      } catch (error) {
        console.log('state', error)
      }
    },
    fetchNewsSource: ({ commit }, source) => {
      const apiKey = process.env.VUE_APP_NEWS_KEY
      try {
        axios
          .get(`${base}/top-headlines/sources?id=${source}&apiKey=${apiKey}`)
          .then((res) => {
            console.log('state == sources')
            commit('setNewsSource', res.data.sources)
          })
      } catch (e) {
        console.log(e)
      }
    },
    fetchDisplay: ({ commit }) => {
      const apiKey = process.env.VUE_APP_NEWS_KEY
      try {
        axios
          .get(`${base}/top-headlines?country=ng&apiKey=${apiKey}`)
          .then((data) => {
            commit('setDisplayH', data.data.articles)
            console.log('display', data.data.articles)
          })
      } catch (error) {
        console.log('state', error)
      }
    }
  },
  modules: {}
})
