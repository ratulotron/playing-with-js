<template>
    <v-ons-page>
        <!-- // The next two elements are what makes the top bar -->
        <!-- <custom-toolbar>Page 1</custom-toolbar>             -->
        <!-- <v-ons-toolbar>
            <div class="center">{{ title }}</div>
            <div class="right">
                <v-ons-toolbar-button>
                    <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
                </v-ons-toolbar-button>
            </div>
        </v-ons-toolbar> -->
        <div style="text-align: center; padding-top:10px">Hello World!</div>
        <p style="text-align: center">
            <v-ons-button @click="alert">Click Me!</v-ons-button>
        </p>
        <div style="text-align: center; padding-top:10px">Go to sister page!</div>        
        <p style="text-align: center">
            <v-ons-button @click="push">Push Page 2</v-ons-button>

        </p>
    </v-ons-page>
</template>

<script>
    import customToolbar from './components/nav_toolbar';
    import nav2 from './Nav2';
    export default {
        data() {
            return {
                title: 'My app',
            };
        },
        methods: {
            alert() {
                this.$ons.notification.alert('This is an Onsen UI alert notification test.');
            },
            // Mandatory for pageStack
            pop() {
//              alert(this.pageStack.length)
//              this.$store.commit('change', this.pageStack.slice(0,this.pageStack.length))
//              this.pageStack.pop();
            },
            push() {
                this.pageStack.push(nav2);
                alert("NAV1: After pressing push: " + this.pageStack.length)
                this.$store.commit('change', this.pageStack);
            }
        },
        props: ['pageStack'],
        components: { customToolbar }
    }

</script>