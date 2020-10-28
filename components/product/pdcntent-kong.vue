<template>
    <div class="container">
        <div class="head-tag">
            <div class="n-text">
                <h2 align="">Just for You</h2>
            </div>
              
        </div>
      <hr>
      <br>
     <v-layout row wrap>
         <v-flex xs12 sm6 md4 lg2 v-for="cart in carts" :key="cart.name">
             <v-hover
        v-slot="{ hover }"
        open-delay="100"
      >
             <v-card flat class="text-lg-center ma-3"
                :elevation="hover ? 16 : 2"
               :class="{ 'on-hover': hover }"
               width="185"
             >
                 <v-responsive class="pb-1">
                      <img  height="190" :src="cart.photo">
                 </v-responsive>
                 <v-card-text>
                     <div class="subheading">{{cart.mess}}</div>
                     <div class="price-text"><span class="currency">฿</span>{{cart.price}}</div>
                     <div class="grey--text">{{cart.discription}}</div>
                 </v-card-text>
                 <v-card-actions class="btn-card "     >
                     <v-btn flat color="deep-orange" @click="addCart(cart)">
                         <v-icon>mdi-plus</v-icon>
                         <span class="">cart</span>
                     </v-btn>
                 </v-card-actions>
             </v-card>
             </v-hover>
         </v-flex>
     </v-layout>

     <div class="asdf">
         <table class="table">
             <thead class="thead">
                 <tr>
                     <th scope="col">pic </th>
                     <th scope="col">name </th>
                     <th scope="col">price</th>
                     <th scope="col">qui</th>
                     <th scope="col">total</th>
                     <th scope="col">del</th>
                 </tr>
             </thead>
             <tbody>
                 <tr v-for="item in carts_c" :key="item.id">
                    <td>
                        <img  height="190" :src="item.image"></td>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.qty}}</td>
                    <td>{{item.total}}</td>
                 </tr>
             </tbody>
         </table>
     </div>
       
    </div>
</template>
<script>
export default {
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  data (){
        return {
            carts_c:[],
            item1:0,
            item2:0,
            }
    },
    methods: {
      addCart:function(cart){
        // console.log(cart);
          if(cart.id==1){
            this.item1+=1;
            if (this.item1<=1) {
                this.pushData(cart)
            }else{
                var found = this.findIndex(cart);
                this.carts_c[found].qty+=1;
                this.carts_c[found].total=this.carts_c[found].qty * this.carts_c[found].price
            }

            // console.log(this.item1);
          }else{

          }
      },
      pushData(cart){
          this.carts_c.push({
                id:cart.id,
                name:cart.name,
                price:cart.price,
                image:cart.photo,
                qty:1,
                total:cart.price
            })
      },
      findIndex:function(cart){
          for(var i = 0;i<this.carts_c.length;i++ ){
              if(this.carts_c[i].id == cart.id){
                  return i;
              }
          }
          return -1;
      }
    },
}
</script>

<style scoped>
/* .container {
    background-color:white !important;
} */
.head-tag {
    display:flex;
    justify-content: space-between;
}
.price-text {
    color: #f57224;
}
.v-card.on-hover.theme--dark{

  background-color: rgba(#ffffff, 0.9);
}
.card-btn{
    display:flex;
    justify-items: center;
    justify-content: center;
}
.v-card__actions {
    align-items: center;
    display: flex;
    padding: 8px;
    justify-content: center;
}
</style>