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
        <div class="big_container container">
            <div class="py-4">
                <select class="form-select" v-model="store.type">
                    <option selected>Select Type</option>
                    <option value="1">Alien</option>
                    <option value="2">Noble Knight</option>
                    <option value="3">Magician</option>
                </select>
            </div>
            <!-- /select form -->
            <div class="small_container container py-5">
                <div class="founded_cards">
                    <p class="mb-0 p-3">Found tot cards</p>
                </div>
                <CardsList></CardsList>
            </div>
            <!-- /small_container -->
        </div>
        <!-- /big_container -->
    </main>
</template>


<style lang="scss" scoped></style>