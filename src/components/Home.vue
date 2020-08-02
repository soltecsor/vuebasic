<template>
 <MainTemplate>
    <h1>{{titulo}}</h1>
  </MainTemplate>
</template>

<script>
import MainTemplate from '../views/MainTemplateView'

import { mapState } from 'vuex'
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
  }
}
</script>


