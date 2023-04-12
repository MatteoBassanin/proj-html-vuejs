<template>
    <MyMainservices></MyMainservices>
    <MyMainCompany></MyMainCompany>
</template>


<script>
import MyCard from './MyCard.vue';
import MyMainservices from './MyMainServices.vue';
import MyMainCompany from './MyMainCompany.vue';
import { store } from '../store';


export default {
    name: "MyMain",

    components: {
        MyCard,
        MyMainCompany,
        MyMainservices

    },

    data() {
        return {
            store,
        }
    }
}
</script>


<style scoped></style>