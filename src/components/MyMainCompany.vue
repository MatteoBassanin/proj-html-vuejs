<template>
    <div class="wrapper_company d_flex justify_between">
        <div class="container_right">
            <h2>The company</h2>
        </div>
        <div class="container_left">
            <img src="/img/about-5.jpg" alt="">
        </div>
    </div>
</template>


<script>
import { store } from '../store';

export default {


    name: "MyMainCompany",



    data() {
        return {
            store
        }
    }
}

</script>


<style scoped>
.wrapper_company {
    height: 1000px;
}
</style>