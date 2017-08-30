<template>
    <v-ons-splitter>
        <v-ons-splitter-side swipeable width="150px" collapse="" side="left" :open.sync="openSide">
            <v-ons-page>
                <v-ons-list>
                    <v-ons-list-header>Menu</v-ons-list-header>
                    <v-ons-list-item v-for="page in pages" tappable modifier="chevron" @click="() => {currentPage = page; openSide = false}">
                        <div class="center">{{ page }}</div>
                    </v-ons-list-item>
                </v-ons-list>
                <div style="text-align: center; padding-top:10px">Go to sister page!</div>
                <p style="text-align: center">
                    <v-ons-button @click="push">Push Page 3</v-ons-button>
                </p>
            </v-ons-page>
        </v-ons-splitter-side>

        <v-ons-splitter-content>
            <div :is="currentPage" :toggle-menu="() => openSide = !openSide"></div>
        </v-ons-splitter-content>
    </v-ons-splitter>
</template>

<script>
    import customToolbar from './components/nav_toolbar';
    import nav3 from './Nav3';

    // Child pages of Nav3
    import child1 from './Child1';
    import child2 from './Child2';


    // var child1 = {
    //     extends: child_1,
    //     props: ['pageStack'],
    // }

    // var child2 = {
    //     extends: child_2,
    //     props: ['pageStack'],
    // }


    export default {
        data() {
            return {
                title: 'Nav 2 - Last page',
                // Necessary for Splitter
                currentPage: 'child1',
                pages: ['child1', 'child2'],
                openSide: true
            };
        },
        methods: {
            // Mandatory for pageStack
            pop() {
                this.pageStack.pop();
            },
            push() {
                this.pageStack.push(nav3);
            }
        },
        props: ['pageStack'],
        components: {
            customToolbar,
            child1,
            child2
        },
        beforeCreate: function () {
            console.log("Inside beforeCreate")
            // console.log(JSON.stringify(this.pageStack))
            
            // this.prototype.$pageStack = this.pageStack
            // console.log(this.pageStack)
            var child1 = {
                extends: child1,
                props: ['pageStack'],
                data() {
                    return {
                        pageStack: this.pageStack
                    }
                },
            }

            var child2 = {
                extends: child2,
                props: ['pageStack'],
                data() {
                    return {
                        pageStack: this.pageStack
                    }
                },
            }
        }
    }

</script>