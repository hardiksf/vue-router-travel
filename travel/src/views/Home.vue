<template>
  <div class="home">
    <h1>Destinations</h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <!-- named route -->
        <router-link :to="{ name: 'DestinationDetail', params: {id:destination.id} }">
          <h2>
            {{ destination.name }}
          </h2>
        </router-link>
        <figure>
          <!-- named route -->
          <router-link :to="{ name: 'DestinationDetail', params: {id:destination.id} }">
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store';

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style lang="sass" scoped>
.destinations
  display: flex
img
  max-width: 19vw
</style>
