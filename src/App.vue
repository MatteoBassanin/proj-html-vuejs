<template>
  <MyHeader :linkTop="linkHeader"></MyHeader>
</template>


<script>
import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue';
import MyFooter from './components/MyFooter.vue';


export default {
  components: {
    MyHeader,
    MyMain,
    MyFooter
  },


  data() {
    return {
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