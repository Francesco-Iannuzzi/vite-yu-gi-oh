<script>
import { store } from '../store.js'
export default {
    name: 'CardItem',
    props: {
        card: Object,
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card rounded-0 rounded-top border-0 mb-2">
            <img :src="card.card_images[0].image_url" class="card-img-top" :alt="card.name">
            <div class="card-body">
                <h5 class="card-title">{{ card.name }}</h5>
                <p class="card-text">{{ card.archetype }}</p>
            </div>
        </div>
        <!-- / card -->
    </div>
    <!-- /col -->
</template>

<style lang="scss" scoped></style>