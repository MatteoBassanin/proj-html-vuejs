<template>
    <div class="card_container">
        <img :src="picture" alt="">
        <h1>{{ title }}</h1>
        <p>{{ textinfo }}</p>
    </div>
</template>


<script>
import { store } from '../store';

export default {
    name: "MyCard",

    props: {
        cardArray: Array,
        title: String,
        textinfo: String,
        picture: String
    },

    data() {
        return {
            store
        }
    }
}
</script>


<style scoped></style>