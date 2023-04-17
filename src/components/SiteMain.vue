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
    <h1>{{ store.searchText }}</h1>
</template>


<style lang="scss" scoped></style>