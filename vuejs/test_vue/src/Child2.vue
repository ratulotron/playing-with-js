<template>
    <v-ons-page>
        <splitter-toolbar :title="'Home'" :action="toggleMenu"></splitter-toolbar>
        <p style="text-align: center">
            Child 2          </p>
        <div style="text-align: center; padding-top:10px">Go to sister page!</div>
        <p style="text-align: center">
            <v-ons-button @click="push">Push Page 3</v-ons-button>
        </p>
    </v-ons-page>
</template>

<script>
  import splitterToolbar from './components/splitter_toolbar'
  import nav3 from './Nav3';
  import child1 from './Child1';

  export default {
    props: [
      'toggleMenu',
      //'pageStack',
    ],

    components: {splitterToolbar},

    methods: {
      // Mandatory for pageStack
      pop() {
        var pages = this.$store.state.pageStack;
        this.$store.commit('change', pages.slice(0,pages.length))
        alert("CHILD1: After POPPING: " + pages.length)
      },
      push() {
        var pages = this.$store.state.pageStack;
        pages.push(nav3)
        // alert("CHILD1: Added NAV3: " + this.$store.state.pageStack.length)
        this.$store.commit('change', pages);
        alert("CHILD1: After pressing push: " + this.$store.state.pageStack.length)
      }
    },
    mounted: function () {
      // this.pageStack = this.$store.state.pageStack


      // alert("From CHILD1, in data.pageStack: " + this.pageStack)
    }
  }
</script>
    