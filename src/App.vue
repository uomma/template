<script>
import { store } from './store';
import axios from 'axios';
import CardApp from './components/CardApp.vue';
export default {
  name: 'App',
  components: {
    CardApp,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    search() {
      
      console.log(this.store.searchKey);


      axios.get(this.store.config.urlMovie, {
        params: {
          api_key: this.store.config.apiKey,
          leguage: this.store.config.defaultLang,
          query: this.store.searchKey,

        }
      }).then((response) => {
        console.log(response);
        this.store.movieList = response.data.results;
      })
    }
  }
}
</script>

<template>
  <header>
    <input type="text" placeholder="cerca il film" v-model="store.searchKey">
    <button @click="search">Cerca</button>
  </header>

  <main>
    <ul>
      <li v-for="movie in store.movieList">
        <CardApp :info="movie"/>
      </li>
    </ul>
  </main>
</template>

<style lang="scss">
@use './assets/scss/main.scss' as *;
</style>
