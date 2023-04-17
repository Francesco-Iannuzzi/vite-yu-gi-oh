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
        <div class="big_container container">
            <div class="py-4">
                <select class="form-select">
                    <option selected>Select Race</option>
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
                <div class="row row-cols-5">
                    <div class="col">
                        <div class="card rounded-0">
                            <!-- <img src="" class="card-img-top" alt="..."> -->
                            <div class="card-body">
                                <h5 class="card-title">Cavaliere</h5>
                                <p class="card-text">Some</p>
                            </div>
                        </div>
                        <!-- / card -->
                    </div>
                    <!-- /col -->
                </div>
                <!-- /cardsList -->
            </div>
            <!-- /small_container -->
        </div>
        <!-- /big_container -->
    </main>
</template>


<style lang="scss" scoped></style>