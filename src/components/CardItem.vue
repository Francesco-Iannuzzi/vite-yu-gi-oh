<script>
export default {
    name: 'CardItem',
    props: {
        card: Object
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card rounded-0">
            <img src="" class="card-img-top" :alt="card.name">
            <div class="card-body">
                <h5 class="card-title">{{ card.name }}</h5>
                <p class="card-text">{{ card.type }}</p>
            </div>
        </div>
        <!-- / card -->
    </div>
    <!-- /col -->
</template>

<style lang="scss" scoped></style>