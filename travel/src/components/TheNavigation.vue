<template>
  <div class="navigation">
    <span>
      <router-link to="/"><h2>Home</h2></router-link>
    </span>
    <span v-for="destination in destinations" :key="destination.name">
        <!-- named route -->
        <router-link :to="{ name: 'DestinationDetail', params: {id:destination.id} }">
          <h2>
            {{ destination.name }}
          </h2>
        </router-link>
      </span>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store';

export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style lang="sass" scoped>
#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
  .vacation-active-class
    color: purple
.navigation
  display: flex
  justify-content: space-around
  align-items: baseline
</style>
