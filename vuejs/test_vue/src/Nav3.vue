<template>
        <v-ons-page>
            <!-- <v-ons-toolbar>
                <div class="center">{{ title }}</div>
                <div class="right">
                    <v-ons-toolbar-button>
                        <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
                    </v-ons-toolbar-button>
                </div>
            </v-ons-toolbar> -->
            <div style="text-align: center; padding-top:10px">Go to sister page!</div>        
            <p style="text-align: center">
                    <v-ons-button @click="pop">Back to Page 2</v-ons-button>
                    <v-ons-button @click="top">Back to Main</v-ons-button>
            </p>
        </v-ons-page>
    </template>
    
    <script>
        import customToolbar from './components/nav_toolbar';
        export default {
            data() {
                return {
                    title: 'Nav 3 - Last page',
                };
            },
            methods: {
                // Mandatory for pageStack
                pop() {
                    this.pageStack.pop();
                },
                push() {
                    this.pageStack.push(nav2);
                },
                top() {
                    this.pageStack.splice(1)
                }
            },
            props: ['pageStack'],
            components: { customToolbar }
        }
    
    </script>