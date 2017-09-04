<template>
    <v-ons-splitter>
        <v-ons-splitter-side swipeable width="150px" collapse="" side="left" :open.sync="openSide">
            <v-ons-page>
                <v-ons-list>
                    <v-ons-list-header>Menu</v-ons-list-header>
                    <v-ons-list-item v-for="page in pages" tappable modifier="chevron"
                                     @click="change_page(page)">
                    <!--//{-->
                      <!--// pages.push(currentPage)-->
                    <!--//  pages.push(this.get_page(currentPage));-->
                    <!--//  alert("NAV1: Added child page" + this.$store.state.pageStack.length)-->
                    <!--//}-->

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
            <div :is="currentPage" :toggle-menu="() => {openSide = !openSide}"></div>
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
      },
      get_page(name) {
        var page = {}
        switch (name) {
          case 'child1':
            page = child1
            break;
          case 'child2':
            page = child2
            break;
        }
        return page;
      },
      change_page(page) {
        this.currentPage = page;
        this.openSide = false;
        // alert(page);
        this.pageStack.push(this.get_page(this.currentPage));
        alert("NAV1: Added child page" + this.$store.state.pageStack.length)
      }
    },
      props: ['pageStack'],
        components
      :
      {
        customToolbar,
          child1,
          child2
      }
      ,
      mounted: function () {
        alert("From NAV2:" + this.$store.state.pageStack.length);
      }
  }

</script>