<!-- This page holds the main navigation stack -->
<template>
  <!-- Test begins! -->
  <!-- This is the main navigation portion
    The stack is aptly called pageStack -->
  <v-ons-navigator :page-stack="pageStack">
    <!-- This is the component that makes up the navigator thingie -->
    <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
    <!-- This part below existed before. -->
    <!--<v-ons-page>
      <v-ons-toolbar>
        <div class="center">{{ title }}</div>
        <div class="right">
          <v-ons-toolbar-button>
            <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
          </v-ons-toolbar-button>
        </div>
      </v-ons-toolbar>
      <div style="text-align: center; padding-top:10px">Hello World!</div>
      <p style="text-align: center">
        <v-ons-button @click="alert">Click Me!</v-ons-button>
      </p>
    </v-ons-page>-->
    
  </v-ons-navigator>
</template>
<script>
  // Newly created member of the navigation stack
  import nav1 from './Nav1';
  import nav2 from './Nav2';

  import store from './store'

  export default {
    data() {
      return {
        title: 'My app',
        // Initializing page stack
        pageStack: [nav1]
      };
    },
    methods: {
      alert() {
        this.$ons.notification.alert('This is an Onsen UI alert notification test.');
      }
    },
    mounted: function () {
      store.commit('change', this.pageStack)
      alert("APP: Beginning: " + this.$store.state.pageStack.length)
    }
  };

</script>