<template>
    <div class="wrapper">
        <div class="container w_70 m_auto">
            <div class=" d_flex justify_between">
                <div class="title_description">
                    <h4 class="c_green_text">OUR EDITORIAL CONTENT</h4>
                    <h2>Latest <span class="boxed c_green_text"> News</span></h2>
                    <p class="decription">Every week we publish content about what is best in the business world</p>
                </div>
                <div class="button_container">
                    <div class="button solid">SEE ALL</div>
                </div>
            </div>
            <div class="list_card_news d_flex justify_between">
                <MyCardNews v-for="card in store.cardNewsArray" :textCard="card.description" :imgNews="card.img">
                </MyCardNews>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import MyCardNews from './MyCardNews.vue';

export default {
    name: "MyMainNews",

    components: {
        MyCardNews,
    },

    data() {
        return {
            store
        }
    }
}
</script>

<style scoped>
.wrapper {
    padding: 35px;
}

h2 {
    padding: 20px 0;
}

.boxed {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: var(--light_boxed_color);
}


.button_container {
    align-self: center;
}

.decription {
    color: var(--font-color);
    padding-bottom: 40px;
}
</style>