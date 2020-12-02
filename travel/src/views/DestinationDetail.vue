<template>
  <div>
    <h2>{{ destination.name }}</h2>
    <div class="destinatin-image-and-detail">
      <img
        :src="require(`@/assets/${destination.image}`)"
        :alt="destination.name"
      />
      <p class="destionation-description">
        {{ destination.description }}
      </p>
    </div>
  </div>
</template>

<script>
import store from '@/store';

export default {
  data() {
    return {
      destinationId: this.$route.params.id,
    };
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.id === this.destinationId,
      );
    },
  },
};
</script>

<style lang="sass" scoped>
.destinatin-image-and-detail
  display: flex
  margin: 0 2vw
.destionation-description
  padding-left: 2vw
  text-align: left
</style>
