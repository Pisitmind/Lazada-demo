<template>
  <v-app class="bg">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-img 
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="150"
      max-width="250"
      src="../static/image/lazada.png"
     ></v-img> -->
      <a href="/">
        <v-icon large>
           mdi-home-variant-outline
        </v-icon>
      </a>
      <!-- <v-toolbar-title v-text="title" /> -->
      <v-spacer />


        <!-- <div class="right-btn">
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
                            {{cart.mess}}</span>
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
            
        </div> -->
    </v-app-bar>
    <v-main>
      <v-container >
        <nuxt />
      </v-container>
    </v-main>
    
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>    |    Developered by Pisit Boonklod   |   </span>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-cart',
          title: 'Cartpage',
          to: '/Cart'
        }
      ],
      
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Lazada-store'
    }
  },
    methods: {
      removeProduct(cart){
        if (confirm("Are you sure you want to remove")) {
          var index= this.carts.indexOf(cart);
          this.carts.splice(index,1);
        }
      }
    }
}
</script>
<style scoped>

.bg{
  background-color:#F5F5F5;
}
.logo-laz{
  max-height: 30px;
}
.cart-show{
  display:flex;
}
.cart-show:hover .hide-content{

  display:block;
}

.right-btn{
 position:relative;
}
.hide-content{
 position:absolute;
 margin-left:-340px;
 margin-top: 40px;
 display:none;
}
.hide-content:hover{
 display:block;
}

.card-test{
    display:flex;
    padding: 0 10px;
    justify-content:space-between;
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
.cart-box1 {
  /* height: 400px; */
  width: 400px;
  background-color: white;
  /* background-color: powderblue; */
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

</style>