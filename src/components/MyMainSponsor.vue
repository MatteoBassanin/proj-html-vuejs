<template>
    <div class="wrapper">
        <div class="container h_100 w_70 m_auto">
            <ul class="d_flex justify_between align_center h_100">
                <li><img src="img/logo-5.png" alt=""></li>
                <li><img src="img/logo-1.png" alt=""></li>
                <li><img src="img/logo-2.png" alt=""></li>
                <li><img src="img/logo-3.png" alt=""></li>
                <li><img src="img/logo-4.png" alt=""></li>
                <li><img src="img/logo-5.png" alt=""></li>
            </ul>
        </div>
    </div>
</template>


<script>
import { store } from '../store';
export default {
    name: "MyMainSponsor",

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
    height: 250px;
}

li {
    /* padding: 0 45px; */
}

img {
    height: 30px;
    filter: invert(40%);
}
</style>