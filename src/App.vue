<script>
import { store } from './store'
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'

export default {
  data() {
    return {
      store
    };
  },
  components: {
    SiteHeader,
    SiteMain
  },
  methods: {

  },
  mounted() {
    store.generateYugiCards(store.API_URL)
  }
}
</script>

<template>
  <SiteHeader></SiteHeader>
  <SiteMain></SiteMain>
</template>

<style lang="scss" scoped></style>