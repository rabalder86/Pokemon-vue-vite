<script>
// import fetchPokemons from '../components/fetchPokemons.vue'
// import pokemonInfoView from "./pokemonInfoView.vue";
export default {
  components: {
    // pokemonInfoView
    // fetchPokemons
  },
  props: {
    url: {
      type: String,
      default() {
        return null
      }
    }
  },
  methods: {
    getPoki() {
      fetch(`${this.url}`)
        .then((response) => response.json())
        .then((pokis) => {
          this.pokis = pokis
          this.name = pokis.name
          this.hpStats = pokis.stats[0].base_stat
          this.imgurl = pokis.sprites.other.dream_world.front_default
          this.typeOne = pokis.types[0].type.name
          this.typeTwo = pokis.types[1].type.name
          this.atkStats = pokis.stats[1].base_stat
          this.defStats = pokis.stats[2].base_stat
          this.spdStats = pokis.stats[3].base_stat
        })
    }
  },
  data() {
    return {
      pokis: null,
      data: this.url,
      imgurl: null
    }
  }
}
</script>

<template>
  <input @click="getPoki" value="Show Pokémon" type="button">
  <div v-if="pokis" class="container">
    <div class="card">
      <p class="hp">
        <span>HP</span>
        {{ hpStats }}
      </p>
      <img :src="imgurl" :alt="name">
      <h2 class="poke-name">{{ name }}</h2>
      <div class="types">
        <span>{{ typeOne }}</span>
        <span>{{ typeTwo }}</span>
      </div>
      <div class="stats">
        <div>
          <h3>{{ atkStats }}</h3>
          <p>Attack</p>
        </div>
        <div>
          <h3>{{ defStats }}</h3>
          <p>Defence</p>
        </div>
        <div>
          <h3>{{ spdStats }}</h3>
          <p>Speed</p>
        </div>
      </div>
    </div>
  </div>
</template>
