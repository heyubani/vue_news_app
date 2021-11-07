<template>
  <div class="news-card">
    <div class="news-card__image">
      <img :src="image" alt="news image" />
    </div>
    <div class="news-card__content">
      <h2 class="news-card__title">{{ source }}</h2>
      <h3>{{ title }}</h3>
      <p class="news-card__text">{{ text }}</p>
      <a :href="link" target="__blank" class="news-card__link">READ MORE</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NewsCard',
  props: ['image', 'title', 'text', 'link', 'source'],
  data () {
    return {}
  }
}
</script>

<style>
.news-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  max-width: 450px;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.news-card__image {
  width: 100%;
  height: 200px;
  background-color: #f5f5f5;
  border-radius: 5px 5px 0 0;
}
.news-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.news-card__content {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.news-card__title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}
.news-card__text {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 10px;
}
.news-card__link {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background-color: #ff1111;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.news-card__link:hover {
  background-color: #ff4800;
}
.news-card__link:active {
  background-color: #ff5e00;
}
</style>
