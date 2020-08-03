<template>
 <MainTemplate>
    <h1>{{titulo}}</h1>
  </MainTemplate>
</template>

<script>
import MainTemplate from '../views/MainTemplateView'

import { mapState, mapActions } from 'vuex'
export default {
  components:{
        MainTemplate
    },
  name: 'Home',
  created(){
  },
  data(){
    return {}
  },
  computed:{
    ...mapState('home',['titulo'])
  },
  mounted(){
    this.startHome()
  },
  methods:{
    ...mapActions('home',['startHome'])
  }
}
</script>


