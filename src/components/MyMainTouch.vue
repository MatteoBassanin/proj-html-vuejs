<template>
    <div class="wrapper">
        <div class="container w_70 m_auto d_flex justify_between h_100">
            <div class="col_left">
                <div class="text_left_top">
                    <h4>SEND A MESSAGE</h4>
                    <h2>Get in <span class="boxed">Touch</span></h2>
                    <p>We will respond to your message as soon as possible</p>
                </div>
                <div class="form">
                    <div class="first row">
                        <input type="text" placeholder="name">
                        <input type="text" placeholder="Email">
                    </div>
                    <div class="second row">
                        <input type="text" placeholder="phone">
                        <select name="" id="">
                            <option value="">More Info</option>
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
                    <h3>Example inc.</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div class="contacts">
                    <div class="number">+1 (305) 1234-5678</div>
                    <div class="e_mail">hello@example.com</div>
                    <div class="location">Main Avenue, 987</div>
                </div>
                <div class="button_container">
                    <div class="button">VIEW MAP</div>
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
    height: 800px;
}

.container {
    padding: 50px 120px 0 20px;
}
</style>