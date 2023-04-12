<template>
    <div class="wrapper_company d_flex justify_between">
        <div class="container_left">
            <div class="container w_80 m_auto c_text_top">
                <h4 class="c_green_text">ABOUT THE NETWORK</h4>
                <h2 class="title_left"><span class="boxed">The</span> Company</h2>
                <p>With all of this expoertise and capability coems an unrivalled commitment to customer service</p>
                <ul>
                    <li class="d_flex">
                        <div class="list_left">
                            <div class="percentage"> 0 <span class="symbol_percentage">%</span> </div>
                        </div>
                        <div class="list_right">
                            <h3>Leadership</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                        </div>
                    </li>
                    <li class="d_flex">
                        <div class="list_left">
                            <div class="percentage"> 0 <span class="symbol_percentage">%</span></div>
                        </div>
                        <div class="list_right">
                            <h3>Psychology</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                        </div>
                    </li>
                    <li class="d_flex">
                        <div class="list_left">
                            <div class="percentage"> 1 <span class="symbol_percentage">%</span></div>
                            <div class="one_per_cent"></div>
                        </div>
                        <div class="list_right">
                            <h3>Flexibility</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container_right">
            <img src="/img/about-5.jpg" alt="">
        </div>
    </div>
</template>


<script>
import { store } from '../store';

export default {


    name: "MyMainCompany",



    data() {
        return {
            store
        }
    }
}

</script>


<style scoped>
.wrapper_company {
    height: 960px;
}

.container_right img {
    width: 960px;
}

.boxed {
    background-color: var(--boxed_color);
    padding: 5px 10px;
    border-radius: 5px;
}

.container_left {
    background-color: black;
    width: 100%;
    padding: 110px 0 0 220px;
}

.title_left {
    padding: 20px 0;
    font-size: 40px;
}

.container {
    height: 100%;
}

.percentage {
    border: 8px solid var(--circle-color);
    border-radius: 50%;
    padding: 30px;
    font-size: 25px;
}

.symbol_percentage {
    font-size: 15px;

}

.one_per_cent {
    width: 5px;
    color: var(--primary_color);
}

li {
    padding: 60px 0;
}

.list_right {
    padding-left: 30px;
}

.list_right p {
    padding: 20px 0;
}

p {
    color: var(--company_text);
}
</style>