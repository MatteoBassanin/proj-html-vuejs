<template>
  <MyHeader :linkTop="linkHeader"></MyHeader>
  <MyMain></MyMain>
  <MyFooter></MyFooter>
</template>


<script>
import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue';
import MyFooter from './components/MyFooter.vue';
import { store } from './store';


export default {
  components: {
    MyHeader,
    MyMain,
    MyFooter
  },


  data() {
    return {
      store,
      linkHeader: [
        {
          linkName: "HOME"
        },
        {
          linkName: "SERVICES"
        },
        {
          linkName: "SKILLS"
        },
        {
          linkName: "PARTNERS"
        },
        {
          linkName: "BLOG"
        },

      ],
    }
  }
}
</script>



<style></style>