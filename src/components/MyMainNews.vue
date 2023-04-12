<template>
    <div class="wrapper">
        <div class="container w_80 m_auto">
            <div class=" d_flex justify_between">
                <div class="title_description">
                    <h4>OUR EDITORIAL CONTENT</h4>
                    <h2>Latest <span class="boxed"> News</span></h2>
                    <p>Every week we publish content about what is best in the business world</p>
                </div>
                <div class="button_container">
                    <div class="button solid">SEE ALL</div>
                </div>
            </div>
            <div class="list_card_news d_flex">
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