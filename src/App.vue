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
    <div class="top">
      <div class="titolo">BOOLFLIX</div>
      <div >
        <input type="text" placeholder="cerca il film" v-model="store.searchKey" class="find">
        <button @click="search" class="find">Cerca</button>
      </div>
    </div>
  </header>
  <main>

    <ul class="lista">
      <li v-for="result in results" class="element">
        <CardApp :info="result" />
      </li>
    </ul>


  </main>
</template>

<style lang="scss">
@use './assets/scss/main.scss' as *;


.top {
  width: 100%;
  background-color: black;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  position: fixed;
  
}

.titolo {
  color: red;
  font-weight: 700;
}

.find{
  padding: 10px
}

.lista{
  display: flex;
  list-style: none;
}

.element{
  padding: 20px;
  flex-wrap: wrap;
}
main {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  top: 100px;
}
</style>
