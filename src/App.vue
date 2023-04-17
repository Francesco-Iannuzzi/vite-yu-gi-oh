<script>
import axios from 'axios';
import SiteHeader from './components/SiteHeader.vue';
import SiteMain from './components/SiteMain.vue';

export default {
  data() {
    return {
      API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
      cards: null,
      info: null,

    };
  },
  components: {
    SiteHeader,
    SiteMain
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response.data);

        })
        .catch(err => {
          console.log(err);
          console.error(err.message);
        })
    }
  },
  mounted() {
    this.callApi(this.API_URL)
  }
}
</script>

<template>
  <SiteHeader></SiteHeader>
  <SiteMain></SiteMain>
</template>

<style lang="scss" scoped></style>