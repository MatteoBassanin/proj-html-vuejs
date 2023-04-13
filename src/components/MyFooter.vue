<template>
    <div class="wrapper">
        <div class="container w_80 m_auto c_third_font d_flex justify_center h_100 align_center f_wrap">
            <div class="first col">
                <div class="bot_logo"><span class="beginning_logo">NEX</span> <span
                        class="ending_logo c_text_top ">GEN</span></div>
                <p>A Functional HTML Template for Corporate & Business.</p>
                <div class="contacts">
                    <div class="icon number"><i class="fa-solid fa-phone"></i>+1 (305) 1234-5678</div>
                    <div class="icon e_mail"><i class="fa-solid fa-envelope"></i>hello@example.com</div>
                    <div class="icon location"><i class="fa-solid fa-location-dot"></i>Main Avenue, 987</div>
                </div>
                <div class="button_container">
                    <div class="button c_text_top"><a href="#">GET IN TOUCH</a></div>
                </div>
            </div>
            <div class="second col list">
                <div class="inner_box">
                    <h3>About</h3>
                    <ul>
                        <li v-for="element in store.arrayFooter"><i class="fa-solid fa-chevron-right"></i><a href="#">{{
                            element.about }}</a></li>
                    </ul>

                </div>
            </div>
            <div class="third col list">
                <div class="inner_box">
                    <h3>Transport</h3>
                    <ul>
                        <li v-for="element in store.arrayFooter"><i class="fa-solid fa-chevron-right"></i><a href="#">{{
                            element.transport }}</a></li>
                    </ul>
                </div>
            </div>
            <div class="forth col list">
                <div class="inner_box">
                    <h3>Support</h3>
                    <ul>
                        <li v-for="element in store.arrayFooter"><i class="fa-solid fa-chevron-right"></i><a href="#">{{
                            element.support }}</a></li>
                    </ul>
                </div>
            </div>
            <div class="bottom_footer d_flex w_80 justify_between">
                <p>Enjot the low price.We are tracking any intention of piracy.</p>
                <p>©2020 NEXGEN is Proudly powered by <span><a href="#">Codings</a></span></p>
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
/* .container {
    margin-left: 145px;
} */

.wrapper {
    height: 700px;
    background-image: url("./img/bg-10.jpg");
    background-position: center;
}


.bot_logo {
    padding: 20px 0;
}

.beginning_logo {
    color: #11A3A2;
    background-color: rgba(0, 119, 119, 0.4);
    padding: 10px 1px 10px 30px;
    border-radius: 15px 0 0 15px;
    font-size: 20px;
}

.ending_logo {
    font-size: 20px;
}


.button a {
    color: var(--font-secondary);
}

a {
    text-decoration: none;
    color: var(--third-font);
    font-size: 14px;
}

.col {
    padding: 30px 10px 50px 10px;
    width: calc(100% / 5 - 20px);
}

.first {
    padding-top: 30px;
}

p {
    padding: 15px 0;
}

i {
    /* color: var(--font-secondary); */
    padding-right: 10px;
}

.icon {
    padding: 10px 0;

}

.button_container {
    padding: 20px 0;
}

h3 {
    color: var(--font-secondary);
    padding-bottom: 15px;
}

li {
    padding: 5px 0;
}

.first,
.second,
.third {
    margin: 20px;
}

.inner_box {
    width: 50%;
    margin: auto;
}

.second,
.third,
.forth {
    /* background-image: linear-gradient(rgba(255, 255, 255, 0.1) 60%, rgba(0, 0, 0, 0.1) 55%); */
    background-color: rgba(0, 0, 0, 0.1);

    border-radius: 10px;
}

span a {
    color: var(--primary_color);
}

.bottom_footer {
    position: relative;
    top: 50px;
}
</style>