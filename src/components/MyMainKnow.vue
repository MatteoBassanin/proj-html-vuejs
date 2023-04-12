<template>
    <div class="wrapper">
        <div class="container w_60 m_auto d_flex h_100 align_center c_text_top justify_center">
            <div class="left_side">
                <h4 class="c_green_text">NEWSLETTER</h4>
                <h2><span class="boxed">Know</span>First</h2>
                <p>Follow closely and receive content about our company and the new of the current market</p>
            </div>
            <div class="right_side">
                <div class="input_container">
                    <input type="text" placeholder="name">
                </div>
                <div class="input_container">
                    <input type="text" placeholder="email">
                </div>
                <div class="botton_container">
                    <div class="button solid">SUBSCRIBE</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { store } from '../store';

export default {
    name: "MyMainKnow",

    data() {
        return {
            store
        }
    }
}
</script>


<style scoped>
.wrapper {
    background-image: url("img/bg-1.jpg");
    background-position: center;
    height: 450px;
}


h2 {
    padding: 30px 0;
    font-size: 35px;
}

.boxed {
    background-color: var(--boxed_color);
    padding: 5px 10px;
    border-radius: 5px;
}

.input_container input {
    padding: 10px 90px;
}

input {
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
    margin: 10px;
    border-radius: 3px;
}

p {
    max-width: 400px;
}

.botton_container {
    padding: 10px 0 0 10px;
}
</style>