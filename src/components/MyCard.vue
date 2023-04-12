<template>
    <div class="card_container">
        <img :src="picture" alt="">
        <div class="text">
            <h3>{{ title }}</h3>
            <p>{{ textinfo }}</p>
        </div>
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


<style scoped>
.card_container {
    margin: 0 10px;
    background-color: white;
    text-align: center;
    border-radius: 15px;
    width: 330px;
    height: 410px;
}

img {
    width: 240px;
    height: 165px;
    margin-top: 40px;

}

.text {
    max-width: 240px;
    margin: auto;
    text-align: left;
    padding: 10px 0;
}

p {
    font-size: 14px;
    padding: 10px 0;
}
</style>