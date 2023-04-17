<script>
import { store } from '../store.js'
export default {
    name: 'SiteMain',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">Alien</option>
                <option value="2">Noble Knight</option>
                <option value="3">Magician</option>
            </select>
            <!-- /select form -->
            <div class="row">
                <div class="col">

                </div>
            </div>
            <!-- / card -->
        </div>
    </main>
</template>


<style lang="scss" scoped></style>