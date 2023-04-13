<template>
    <div class="wrapper">
        <div class="container w_80 m_auto d_flex justify_center h_100">
            <div class="col_left">
                <div class="text_left_top">
                    <h4 class="c_green_text">SEND A MESSAGE</h4>
                    <h2>Get in <span class="boxed">Touch</span></h2>
                    <p>We will respond to your message as soon as possible</p>
                </div>
                <div class="form">
                    <div class="first row">
                        <input type="text" placeholder="Name">
                        <input type="text" placeholder="Email">
                    </div>
                    <div class="second row">
                        <input type="text" placeholder="Phone">
                        <select name="" id="" class="c_font_color_placeholder">
                            <option value="">More info</option>
                        </select>
                    </div>
                    <div class="third row">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    </div>
                    <div class="button_container">
                        <div class="button solid">SEND</div>
                    </div>

                </div>
            </div>
            <div class="col_right">
                <div class="text_right_top">
                    <h3 class="right_text">Example inc.</h3>
                    <p class="right_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <p class="right_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div class="contacts c_green_text">
                    <div class="icon number"><i class="fa-solid fa-phone"></i>+1 (305) 1234-5678</div>
                    <div class="icon e_mail"><i class="fa-solid fa-envelope"></i>hello@example.com</div>
                    <div class="icon location"><i class="fa-solid fa-location-dot"></i>Main Avenue, 987</div>
                </div>
                <div class="button_container ">
                    <div class="button"><a href="#">VIEW MAP</a></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { store } from '../store';



export default {

    name: "MyMainTouch",

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
    height: 600px;
}

.col_right {
    padding-left: 80px
}

;

.container {}

h2 {
    padding: 20px 0;
}

i {
    background-color: var(--rounded_border);
    padding: 10px;
    border-radius: 50%;
    margin-right: 10px;
}

.boxed {
    background-color: var(--rounded_border);
    padding: 10px;
    color: var(--primary_color);
}

.text_left_top,
.text_right_top {
    padding: 50px 0;
}


.right_text {
    padding: 7px 0;
    max-width: 350px;
}

input,
select {
    height: 40px;
    width: 300px;
    border-radius: 3px;
}

textarea {
    width: 610px;
    border-radius: 3px;
}

textarea::placeholder {
    padding: 10px;
}

input::placeholder {
    padding-left: 10px;
}

.row {
    padding: 10px 0;
}

.button_container,
select,
textarea,
input,
.text_left_top {
    margin: 0 5px;
}


select,
textarea,
input {
    background-color: #DCE2DB;
    border: none;
}


p {
    color: var(--font_text_paragraph);
    font-weight: 100;
}

.icon {
    padding: 10px 0;
}

.col_left {
    padding-right: 130px;
}

a {
    text-decoration: none;
    color: var(--primary_color)
}
</style>