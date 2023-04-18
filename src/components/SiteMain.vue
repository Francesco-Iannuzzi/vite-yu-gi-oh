<script>
import { store } from '../store.js'
import CardsList from './CardsList.vue';

export default {
    name: "SiteMain",
    data() {
        return {
            store
        };
    },
    components: {
        CardsList
    }
}
</script>

<template>
    <main>
        <div class="big_container container pb-5">
            <div class="py-4">
                <select class="form-select" v-model="store.archetype">
                    <option selected>{{ store.archetype }}</option>
                    <option value="Alien">Alien</option>
                    <option value="Noble Knight">Noble Knight</option>
                    <option value="Magician">Magician</option>
                </select>
            </div>
            <!-- /select form -->
            <div class="small_container container py-4">
                <div class="founded_cards">
                    <p class="mb-0 p-3">Found {{ store.cards.length }} cards</p>
                </div>
                <CardsList></CardsList>
            </div>
            <!-- /small_container -->
        </div>
        <!-- /big_container -->
    </main>
</template>


<style lang="scss" scoped></style>