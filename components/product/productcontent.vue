<template>
    <div class="container">
        <div class="head-tag">
            <div class="n-text">
                <h2 align="">Just for You</h2>
            </div>
            <div class="cart-show">
            <div class="btn-cart-bar"><v-btn to="/cart" class="cart-btn"><v-icon>mdi-cart</v-icon></v-btn></div>
            <div class="hide-content">
                <div class="cart-box1"  style="">
            <div class="head-card1"  >
                <p class="grey--text">สินค้าที่เพิ่งเพิ่มเข้าไป</p>
            </div>
            <div class="cart-item" v-for="cart in cart_stock" v-bind:key="cart.name" >
                <div class="img-card" >
                </div>

                <div class="text-card">
                    <div class="text-dtail">
                        <div><span class="d-inline-block text-truncate"
                              style="max-width: 280px;">
                            {{cart.dis}}</span>
                        </div>
                        <div class="price-box"><span class="currency">฿</span><span class="price">{{cart.price}}</span></div>
                    </div>
                    <div class="text-sub">
                        <div><p class="grey--text">{{cart.subtext}}</p></div>
                        <div>
                            <button class="" @click="removeProduct(cart)">ลบ</button>
                        </div>
                    </div>

                </div>
            </div> 
           
            <div class="foot-card">

                <span class="text-foot">2 สินค้าเพิ่มเติมในรถเข็น</span>
                <v-btn  class="ma-2"
                        to="/cart"
                        right
                        color="#ee4d2d">
                     ดูรถเข็นของคุณ</v-btn>
            </div>

        </div>
            
            </div>
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
                     <v-btn flat color="deep-orange" @click="addToCart(cart)">
                         <v-icon>mdi-plus</v-icon>
                         <span class="">cart</span>
                     </v-btn>
                 </v-card-actions>
             </v-card>
             </v-hover>
         </v-flex>
     </v-layout>

     <div class="asdf" v-if="cart_stock!=0">
         <table class="table">
             <thead class="thead">
                 <tr>
                     <th scope="col">pic </th>
                     <th scope="col">name </th>
                     <th scope="col">price</th>
                     <th scope="col">qty</th>
                     <th scope="col">total</th>
                     <th scope="col">del</th>
                 </tr>
             </thead>
             <tbody>
                 <tr v-for="item in cart_stock" :key="item.id">
                    <td>
                        <img  height="30" :src="item.image"></td>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <v-btn @click="minusQty(item)">-</v-btn>
                        {{item.qty}}
                        <v-btn @click="plusQty(item)">+</v-btn>
                    </td>
                    <td>{{item.total}}</td>
                    <td><v-btn @click="removeProduct(item)">del</v-btn></td>
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
            cart_stock:[],
            c_item:[],
            item1:0,item2:0,item3:0,item4:0,item5:0,item6:0,item7:0,
            }
    },
    methods: {
        addToCart:function(cart){
            if(cart.id==1){
                this.item1+=1;
                if (this.item1<=1) {
                    this.pushData(cart);
                }else{
                    var found =this.findID(cart);
                    this.cart_stock[found].qty+=1;
                    this.cart_stock[found].total=this.cart_stock[found].qty * this.cart_stock[found].price;
                }
                // console.log(this.item1);
            }
            else if(cart.id==2){
                this.item2+=1;
                if (this.item2<=1) {
                    this.pushData(cart);
                }else{
                    var found =this.findID(cart);
                    this.cart_stock[found].qty+=1;
                    this.cart_stock[found].total=this.cart_stock[found].qty * this.cart_stock[found].price;
                }
            }
            else if(cart.id==3){
                this.item3+=1;
                if (this.item3<=1) {
                    this.pushData(cart);
                }else{
                    var found =this.findID(cart);
                    this.cart_stock[found].qty+=1;
                    this.cart_stock[found].total=this.cart_stock[found].qty * this.cart_stock[found].price;
                }
            }
            else if(cart.id==4){
                this.item4+=1;
                if (this.item4<=1) {
                    this.pushData(cart);
                }else{
                    var found =this.findID(cart);
                    this.cart_stock[found].qty+=1;
                    this.cart_stock[found].total=this.cart_stock[found].qty * this.cart_stock[found].price;
                }
            }
            else if(cart.id==5){
                this.item5+=1;
                if (this.item5<=1) {
                    this.pushData(cart);
                }else{
                    var found =this.findID(cart);
                    this.cart_stock[found].qty+=1;
                    this.cart_stock[found].total=this.cart_stock[found].qty * this.cart_stock[found].price;
                }
            }
            else if(cart.id==6){
                this.item6+=1;
                if (this.item6<=1) {
                    this.pushData(cart);
                }else{
                    var found =this.findID(cart);
                    this.cart_stock[found].qty+=1;
                    this.cart_stock[found].total=this.cart_stock[found].qty * this.cart_stock[found].price;
                }
            }
            else if(cart.id==7){
                this.item7+=1;
                if (this.item7<=1) {
                    this.pushData(cart);
                }else{
                    var found =this.findID(cart);
                    this.cart_stock[found].qty+=1;
                    this.cart_stock[found].total=this.cart_stock[found].qty * this.cart_stock[found].price;
                }
            }
        },
        pushData(cart){
            this.cart_stock.push({
                    id:cart.id,
                    name:cart.name,
                    dis:cart.mess,
                    image:cart.photo,
                    price:cart.price,
                    subtext:cart.subtext,
                    qty:1,
                    total:cart.price
                })
        },
        findID:function(cart){
            for (var i = 0; i<this.cart_stock.length;i++){
                if (this.cart_stock[i].id == cart.id) {
                    return i;
                }
            }
            return -1;
        },
        minusQty: function(item){
            item.qty-=1;
            if (item.qty<=1) {
                item.qty=1;
            }
            item.total = item.price * item.qty;
        },
        plusQty: function(item){
            item.qty+=1;
            item.total = item.price * item.qty;
        },
        removeProduct:function(item){
            var idx =this.cart_stock.indexOf(item);
            this.cart_stock.splice(idx,1);
            if(item.id==1){
                this.item1=0;
            }
            else if(item.id==2){
                this.item2=0;
            }else if(item.id==3){
                this.item3=0;
            }else if(item.id==4){
                this.item4=0;
            }else if(item.id==5){
                this.item5=0;
            }else if(item.id==6){
                this.item6=0;
            }else if(item.id==7){
                this.item7=0;
            }
        }

    },
}
</script>

<style scoped>
/* .container {
    background-color:white !important;
} */
.head-tag{
    display:flex;
    justify-content:space-between;
}
.cart-show{
  display:flex;
}
.cart-show:hover .hide-content{

  display:block;
}
.cart-box1 {
  width: 400px;
  background-color: white;
}
.right-btn{
 position:relative;
}
.hide-content{
    position:absolute;
    margin-left:-340px;
    margin-top: 40px;
    display:none;
    z-index: 99999;
}
.hide-content:hover{
 display:block;
}

.cart-item{
    display:flex;
    box-sizing: border-box;
    position: relative;
    justify-items:center;
    padding: 5px 10px;
    height: 55px;
    background-color:yellowgreen,.6;
    font-size: 14px;
}
.cart-item:hover{
    /* transform: scale(1.1); */
    background-color:rgba(243, 244, 245, .9);
}
.head-card1{
    display:flex;
    align-items:center;
    padding: 5px 0 0 10px;
    font-size: 14px;    
}

.img-card{
    height: 40px;
    width: 40px;
    background-color:gray;
}
.text-card{
    padding: 0 5px;
}
.text-dtail{
    display:flex;
    color:black;
    font-size: 14px;
}
.price-box{
    color: #ee4d2d;
}
.text-sub{
    display:flex;
    justify-content:space-between;
    color: black;
    font-size: 12px;
}
.foot-card{
    padding: 10px;
    display: flex;
    justify-items: center;
    justify-content:space-between;
}
.text-foot{
    align-self:center;
    font-size: 12px;
    color:black;
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