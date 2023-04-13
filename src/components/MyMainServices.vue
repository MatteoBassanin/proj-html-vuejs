<template>
    <div class="wrapper">
        <div class="container w_80 d_flex m_auto">
            <div class="description">
                <h4>OUR BUSINESS AREAS</h4>
                <h2>Logistics</h2>
                <h2>Services</h2>
                <p class="paragraph">We are leaders in providing logistics services with a set of cutting edge technologies
                    and
                    a team of
                    experienced and renowed professionals.</p>
                <div class="small_tag">Tradition</div>
                <div class="small_tag">Quality</div>
                <div class="small_tag">Security</div>
                <div class="button_container">

                    <div class="button solid"> <a href="#">READ MORE</a> </div>
                </div>
            </div>
            <div class="cards d_flex">
                <MyCard v-for="card in store.cardArray" :cardInfo="store.cardArray" :textinfo="card.description"
                    :title="card.title" :picture="card.img"></MyCard>
            </div>
        </div>
    </div>
</template>


<script>
import { store } from '../store';
import MyCard from './MyCard.vue';

export default {
    name: "MyMainServices",


    components: {
        MyCard
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
    background-color: var(--background-top-main);
    height: 700px;
}

h4 {
    color: var(--primary_color);
    font-size: 14px;
    padding-bottom: 20px;
}

h2 {
    font-size: 35px
}

.description {
    width: calc(100% / 3);

}

.cards,
.description {
    padding: 110px 0 0 70px;
}

.paragraph p {
    color: red;
}

.description.button {
    margin: 10px;
}

a {
    text-decoration: none;
}

.button a {
    color: var(--font-secondary)
}
</style>