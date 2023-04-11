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
        <div class="container_bottom">
            <div class="bottom_wrapper fs_14">



                <div class="inner_container d_flex justify_between w_70 m_auto">
                    <div class="container_left">
                        <div class="bot_logo">logo</div>
                    </div>
                    <div class="container_right">
                        <nav>
                            <ul class="d_flex">
                                <li class="pd_20" v-for="link in linkTop"><a href="#">{{ link.linkName }}</a></li>
                            </ul>
                            <div class="button solid nav_button "><a href="#">GET IN TOUCH</a> </div>
                        </nav>

                    </div>
                </div>


            </div>
        </div>

    </div>
</template>


<script>
export default {
    name: "MyHeader",

    props: {
        linkTop: Array,
    }
}
</script>


<style scoped>
.wrapper {
    background-color: var(--header-top);
    height: 40px;
}

.contacts {
    padding-right: 58px;
}


a {
    color: var(--font-secondary);

}

i {
    padding: 10px;
}

.container_bottom {
    height: 850px;
    background-image: url("../public/img/jumbo.jpg");
    background-position: bottom;
    filter: opacity(100%);


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
    bottom: 42px;
    left: 480px;
    color: white;
    background-color: #007777;
}
</style>