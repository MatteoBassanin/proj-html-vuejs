<template>
    <div class="wrapper">
        <div class="container w_80 m_auto c_third_font d_flex justify_center h_100 align_center">
            <div class="first col">
                <div class="bot_logo pd_20"><span class="beginning_logo">NEX</span> <span
                        class="ending_logo c_text_top ">GEN</span></div>
                <p>A Functional HTML Template for Corporate & Business.</p>
                <div class="contacts">
                    <div class="icon number"><i class="fa-solid fa-phone"></i>+1 (305) 1234-5678</div>
                    <div class="icon e_mail"><i class="fa-solid fa-envelope"></i>hello@example.com</div>
                    <div class="icon location"><i class="fa-solid fa-location-dot"></i>Main Avenue, 987</div>
                </div>
                <div class="button_container">
                    <div class="button"><a href="#">GET IN TOUCH</a></div>
                </div>
            </div>
            <div class="second col list">
                <h3>About</h3>
                <ul>
                    <li v-for="element in store.arrayFooter"><i class="fa-solid fa-chevron-right"></i><a href="#">{{
                        element.about }}</a></li>
                </ul>
            </div>
            <div class="third col list">
                <h3>Transport</h3>
                <ul>
                    <li v-for="element in store.arrayFooter"><i class="fa-solid fa-chevron-right"></i><a href="#">{{
                        element.transport }}</a></li>
                </ul>
            </div>
            <div class="forth col list">
                <h3>Support</h3>
                <ul>
                    <li v-for="element in store.arrayFooter"><i class="fa-solid fa-chevron-right"></i><a href="#">{{
                        element.support }}</a></li>
                </ul>
            </div>
        </div>

    </div>
</template>


<script>
import { store } from '../store';
export default {
    name: "MyFooter",


    data() {
        return {
            store
        }
    }
}
</script>


<style scoped>
.wrapper {
    height: 650px;
    background-image: url("./img/bg-10.jpg");
    background-position: center;
}

.beginning_logo {
    color: #11A3A2;
    background-color: rgba(0, 119, 119, 0.4);
    padding: 5px 5px 5px 20px;
    border-radius: 15px 0 0 15px;
}

a {
    text-decoration: none;
    color: var(--third-font);
}

.col {
    padding: 0 20px 150px 20px;
    width: 20%;
}


p {
    padding: 15px 0;
}

.icon {
    padding: 10px 0;
}

.button_container {
    padding: 20px 0;
}

h3 {
    color: var(--font-secondary);
}

li {
    padding: 5px 0;
}
</style>