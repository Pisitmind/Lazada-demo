<template>
  <div id="index">
    <productcontent />
    <!-- <productcontent v-bind:carts="carts"/> -->
    <!-- <cartbox v-bind:carts="carts"/> -->
  </div>
</template>

<script>

import productcontent from "~/components/product/productcontent"
import cartbox from '~/components/product/cartbox'
import Cartcontent from '~/components/Cart/Cartcontent'
export default {
  name:'index',
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  data (){
        return {
            carts_c:[],
            }
    },
  //   methods: {
  //     addCart:function(carts){
  //       console.log(carts);
  //         if(carts.id==1){
  //           this.carts+=1;
  //         }
  //     }
  //   },


}

</script>

<style scoped>
</style>