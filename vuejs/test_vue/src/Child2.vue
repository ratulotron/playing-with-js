<template>
        <v-ons-page>
            <splitter-toolbar :title="'Home'" :action="toggleMenu"></splitter-toolbar>
            <p style="text-align: center">
Child 2          </p>
        </v-ons-page>
    </template>
    
    <script>
      import splitterToolbar from './components/splitter_toolbar'
      export default {
        props: ['toggleMenu'],
        components: { splitterToolbar }
      }
    </script>
    