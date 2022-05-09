<script>
import homeView from './views/homeView.vue'
import HelloWorld from './components/HelloWorld.vue'
import aboutView from './views/aboutView.vue'
import NavigationBar from './components/NavigationBar.vue'

export default {
  components: {
    homeView,
    HelloWorld,
    aboutView,
    NavigationBar
  }
}
</script>

<template>
  <NavigationBar />
  <h1>Pokédex</h1>
  <p class="codex">Can you find your favourite Pokémon?</p>
  <homeView />
  <!-- <aboutView /> -->
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  background: #efefbb;
  background: linear-gradient(to right, #d4d3dd, #efefbb);
}

h1 {
  font-size: 50px;
  letter-spacing: 3px;
  padding: 40px 0 10px 0;
  text-align: center;
}

.codex {
  text-align: center;
  font-size: 18px;
}

.hidden {
  opacity: 0;
  display: none;
}

.search-container {
  display: flex;
  justify-content: center;
  margin: 10px;
  /* width: 100%; */
}

.form-control {
  width: 80%;
}

/* input:focus {
  border: 1px solid #22CBAB;
  box-shadow: none!important;
} */

.btn-search {
  border: none;
  padding-bottom: 10px 25px;
  border-radius: 0 5px 5px 0;
  background-color: #22CBAB;
  color: #FFFFFF;
  margin-left: -15px;
  cursor: pointer;
}

.container {
  /* width: 350px; */
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;
  /* position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%; */
}

.card {
  position: relative;
  background: radial-gradient(circle at 50% 0%, grey 36%, #FFFFFF 36%);
  width: 25%;
  padding: 30px 20px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}

.card:hover {
  animation: bounce 0.6s linear;
}

@keyframes bounce {
  20% {
    transform: translateY(-6px)
  }
}

.card h2 {
  text-transform: uppercase;
}

.card img {
  display: block;
  width: 180px;
  height: 180px;
  /* max-height: 200px; */
  position: relative;
  margin: 20px auto;
}

.hp {
  width: 80px;
  background-color: #FFFFFF;
  text-align: center;
  padding: 8px 0;
  border-radius: 30px;
  margin-left: auto;
}

.poke-name {
  text-align: center;
}

.types {
  display: flex;
  justify-content: space-around;
  margin: 20px 0 40px 0;
}

.hp span,
.types span {
  font-size: 12px;
  letter-spacing: 0.4px;
  font-weight: 600;
}

.stats {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.stats p {
  color: #404060;
}
</style>