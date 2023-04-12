<template>
    <div class="wrapper">
        <div class="container w_80 m_auto h_100">
            <ul class="d_flex justify_center align_center h_100">
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
    padding: 0 35px;
}

img {
    height: 35px;
    filter: invert(40%);
}
</style>