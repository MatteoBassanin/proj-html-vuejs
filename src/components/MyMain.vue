<template>
    <MyMainServices></MyMainServices>
    <MyMainCompany></MyMainCompany>
    <MyMainSponsor></MyMainSponsor>
    <MyMainNews></MyMainNews>
    <MyMainKnow></MyMainKnow>
    <MyMainTouch></MyMainTouch>
</template>


<script>
import MyCard from './MyCard.vue';
import MyCardNews from './MyCardNews.vue';
import MyMainServices from './MyMainservices.vue';     //attenzione alla s della stringa MyMainServices se cambiata dà un errore
import MyMainSponsor from './MyMainSponsor.vue';
import MyMainCompany from './MyMainCompany.vue';
import MyMainNews from './MyMainNews.vue';
import MyMainKnow from './MyMainKnow.vue';
import MyMainTouch from './MyMainTouch.vue';
import { store } from '../store';


export default {
    name: "MyMain",

    components: {
        MyCard,
        MyMainCompany,
        MyMainServices,
        MyMainSponsor,
        MyMainNews,
        MyCardNews,
        MyMainKnow,
        MyMainTouch

    },

    data() {
        return {
            store,
        }
    }
}
</script>


<style scoped></style>