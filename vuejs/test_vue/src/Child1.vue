<template>
        <v-ons-page>
          <splitter-toolbar :title="'Home'" :action="toggleMenu"></splitter-toolbar>
          <p style="text-align: center">
Child 1          </p>
        </v-ons-page>
    </template>
    
    <script>
      import splitterToolbar from './components/splitter_toolbar'
      export default {

        data() {
          return {
            // pageStack: this.prototype.$pageStack
          }
        },
        props: [
          'toggleMenu', 
          'pageStack',
          ],
        // props: ['pageStack'],

        components: { splitterToolbar },
        mounted: function() {
          console.log("Inside Child1")
            console.log(this.pageStack)
        }
      }
    </script>
    