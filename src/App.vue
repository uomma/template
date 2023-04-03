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


      //FILM//

      axios.get(this.store.config.urlAPI + this.store.config.extendoMovie, {
        params: {
          api_key: this.store.config.apiKey,
          leguage: this.store.config.defaultLang,
          query: this.store.searchKey,

        }
      }).then((response) => {
        console.log(response);
        this.store.movieList = response.data.results;
      })


      //SERIE TV

      axios.get(this.store.config.urlAPI + this.store.config.extendoTVShow, {
        params: {
          api_key: this.store.config.apiKey,
          leguage: this.store.config.defaultLang,
          query: this.store.searchKey,

        }
      }).then((response) => {
        console.log(response);
        this.store.TVList = response.data.results;
      })

    }
  },
  computed: {
    results() {
      return [...this.store.movieList, ...this.store.TVList]
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

    <h2>all results</h2>
    <ul>
      <li v-for="result in results">
        <CardApp :info="result" />
      </li>
    </ul>
  </main>
</template>

<style lang="scss">
@use './assets/scss/main.scss' as *;
</style>
