<template>
<v-app nav>
  <div>
    <!-- <test /> -->

    <Navbar />
    <v-main>
     
        <router-view></router-view>
  
    </v-main>
  </div>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Navbar from './components/Navbar.vue';
//import test from './components/test.vue';

export default {
  name: 'App',
  props: {
      items: Array
  },
  components: {
    //test,
    Navbar,

  },

  data: () => ({
    //
  }),
};
</script>
