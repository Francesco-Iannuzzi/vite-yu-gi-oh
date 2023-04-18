<script>
import { store } from '../store.js'
import CardsList from './CardsList.vue';

export default {
    name: "SiteMain",
    emits: ['searchArchetype'],
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
                <select class="form-select" @change="store.generateYugiCards(store.API_URL)" v-model="store.archetype">
                    <option value=''>Select Archetype</option>
                    <option v-for="singleArchetype in store.archetypeList" :value="singleArchetype.archetype_name">{{
                        singleArchetype.archetype_name }}</option>
                </select>
            </div>
            <!-- /select form -->
            <div class="small_container container py-5">
                <div class="founded_cards">
                    <p class="p-3">Found {{ store.cards.length }} cards</p>
                </div>
                <CardsList></CardsList>
            </div>
            <!-- /small_container -->
        </div>
        <!-- /big_container -->
    </main>
</template>


<style lang="scss" scoped></style>