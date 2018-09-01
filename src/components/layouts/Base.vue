<template>
  <v-app id="inspire-layout">
    <c-navigation-drawer></c-navigation-drawer>
    
    <v-content>
      <router-view/>
    </v-content>
    <c-footer></c-footer>
  </v-app>
</template>

<script>
import CNavigationDrawer from '../pages/Header';
import CFooter from '../pages/Footer';


export default {
  components: { CNavigationDrawer, CFooter },
  data: () => ({}),
  methods: {},
};
</script>
