<template>
    <div class="wrapper">
        <div class="container_top w_70 m_auto d_flex justify_between align_center h_100 c_text_top fs_14">
            <div class="opening_hours">
                <i class="fa-solid fa-clock"></i>
                <span>Open Hours:Mon - Sat -9:00 - 18:00</span>
            </div>
            <div class="contacts">
                <span class="telephone pd_10">
                    <i class="fa-solid fa-phone"></i>
                    <span class="inner_text"> +1(305) 1234-5678</span>
                </span>
                <span class="email pd_10">
                    <i class="fa-solid fa-envelope"></i>
                    <span class="inner_text"> hello@example.com</span>
                </span>
                <span class="top_logo pd_10">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                </span>
            </div>
        </div>
    </div>
    <div class="container_bottom">
        <div class="bottom_wrapper fs_14">
            <div class="inner_container d_flex justify_between w_70 m_auto">
                <div class="container_left fs_17">
                    <div class="bot_logo pd_20"><span class="beginning_logo">NEX</span> <span
                            class="ending_logo c_text_top ">GEN</span></div>
                </div>
                <div class="container_right">
                    <nav>
                        <ul class="d_flex fs_17">
                            <li class="pd_20" v-for="link in linkTop"><a href="#">{{ link.linkName }}</a></li>
                        </ul>
                        <div class="button solid nav_button "><a href="#">GET IN TOUCH</a> </div>
                    </nav>
                    <div class="title_jumbo c_text_top m_auto">
                        <h1 class="first_word">Logistics</h1>
                        <h1> that goes further.</h1>
                        <p class="c_text_grey parapragh">For 20 years working with the most innovative in the field of
                            transport
                        </p>
                        <div class="button solid bot_left"><a href="#">GET IN TOUCH</a> </div>
                        <div class="button "><a href="#">READ MORE</a> </div>


                    </div>
                </div>
            </div>


        </div>
    </div>
</template>


<script>
import { store } from '../store';



export default {
    name: "MyHeader",

    props: {
        linkTop: Array,
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
    background-color: var(--header-top);
    height: 40px;
    width: 100vw;
}

.contacts {
    padding-right: 130px;
}

/* .opening_hours,
.container_left {
    padding-left: 60px;
} */

a {
    color: var(--font-secondary);

}

i {
    padding: 10px;
}

.container_bottom {
    height: 700px;
    background-image: url("../public/img/jumbo.jpg");
    background-position: 90% 60%;
}

.bottom_wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    /* z-index: 99999; */
}

a {
    text-decoration: none;
}

.container_left,
.container_right {
    height: 100%;

}

.container_right {
    width: 60%;
}

.nav_button {
    position: relative;
    bottom: 47px;
    left: 540px;
    padding: 10px 20px;
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


h1 {
    font-size: 62px;
    max-width: 280px;

}

.first_word {
    background-image: linear-gradient(rgba(255, 255, 255, 0) 60%, rgba(0, 119, 119, 0.5) 55%);
    border-radius: 10px;
}

.parapragh {
    font-size: 20px;
    padding: 20px 0 40px;
}

.title_jumbo {

    max-width: 400px;
}

.bot_left {
    margin: 0 15px 0 0;
}
</style>