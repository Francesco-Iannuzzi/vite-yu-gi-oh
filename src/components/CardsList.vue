<script>
import CardItem from './CardItem.vue';
import { store } from '../store.js'

export default {
    name: 'CardsList',
    data() {
        return {
            store
        };
    },
    components: {
        CardItem
    }
}
</script>

<template>
    <div class="row row-cols-5 mb-5 g-3">
        <CardItem :card="card" v-for="card in store.cards"></CardItem>
    </div>
    <!-- /cardsList -->
</template>

<style lang="scss" scoped></style>