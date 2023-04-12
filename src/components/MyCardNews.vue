<template>
    <div class="card_wrapper">
        <div class="container">
            <div>
                <img :src="imgNews" alt="">
            </div>
            <p class="text_description">{{ textCard }}</p>

        </div>
    </div>
</template>


<script>

import { store } from '../store';


export default {
    name: "MyCardNews",

    props: {
        textCard: String,
        imgNews: String
    },

    data() {
        return {
            store
        }
    }
}

</script>
    

<style scoped>
img {
    object-fit: cover;
    width: 100%;
    filter: brightness(50%)
}

.container {
    width: 100%;
}

.card_wrapper {

    width: calc(100% / 3);
    padding-left: 20px;

}

p {
    text-align: center;
    position: relative;
    bottom: 150px;
    color: white;
    font-size: 25px;
}
</style>