<template>
    <div class="wrapper">
        <div class="container w_70 m_auto d_flex justify_between align_center h_100 c_text_top">
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
                    <!-- <ul class="d_flex">
                        <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                    </ul> -->
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                </span>
                <div class=""></div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "MyHeader"
}
</script>


<style scoped>
.wrapper {
    background-color: var(--header-top);
    height: 40px;
}

a {
    color: var(--font-secondary);

}

i {
    padding: 15px;
}
</style>