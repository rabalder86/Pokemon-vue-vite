<script>
import pokemonView from './pokemonView.vue'
export default {
  components: {
    pokemonView
  },
  created() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((pokis) => {
        this.pokis = pokis.results
        console.log(pokis);
      })
  },
  data() {
    return {
      pokis: null,
      s: ''
    }
  }
}
</script>

<template>
  <div class="search-container">
    <input v-model="s" class="form-control" id="search_q" type="text" placeholder="Search for Pokémon">
    <button class="btn-search" id="search-btn">
      <i class="fa fa-search fa-3x" aria-hidden="true"></i>
    </button>
  </div>

  <div>You have searched for:
    <input type="text" v-model="s">
  </div>
  <ol v-if="pokis">
    <li :key="poki.id" v-for="poki in pokis">
      <!-- <a :href="poki.url">{{ poki.name }}</a> -->
      <!-- <router-link :to="`/${poki.name}`">
        </router-link> -->
      <div> {{ poki.name }} </div>
      <pokemonView :url="poki.url" />
      <!-- <pokemonComponent></pokemonComponent> -->
    </li>
  </ol>


</template>
