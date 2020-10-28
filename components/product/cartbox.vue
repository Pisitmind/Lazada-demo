<template>
    <div class="card-test">


        <div class="cart-box1"  style="">
            <div class="head-card1"  >
                <p class="grey--text">สินค้าที่เพิ่งเพิ่มเข้าไป</p>
            </div>
            <div class="cart-item" v-for="cart in carts" v-bind:key="cart.name" >
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
                            <button @click="removeProduct(cart)" class="">{{cart.btnname}}</button>
                        </div>
                    </div>

                </div>
            </div> 
           
            <div class="foot-card">

                <span class="text-foot">10 สินค้าเพิ่มเติมในรถเข็น</span>
                <v-btn  class="ma-2"
                        right
                        color="#ee4d2d">
                     ดูรถเข็นของคุณ</v-btn>
            </div>

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
        removeProduct(cart){
            if(confirm("คุณต้องการลบหรือไม่ ?")){
                var idx= this.carts_c.indexOf(cart);
                this.carts_c.splice(idx,1);
            }
        }
      
  },


}    
</script>
<style scoped>
body, html {
    font-family: Helvetica Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi Zen Hei,Hiragino Sans GB,儷黑 Pro,LiHei Pro,Heiti TC,微軟正黑體,Microsoft JhengHei UI,Microsoft JhengHei,sans-serif;
    color: rgba(0,0,0,.8);
    line-height: 1.2;
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


/* 
 <div class="cart-item" >
                <div class="img-card" >
                </div>

                <div class="text-card">
                    <div class="text-dtail">
                        <div><span class="d-inline-block text-truncate"
                              style="max-width: 280px;">
                            เคส ipad สินค้ามีสำหรับ ipad mini5/2017 /2018 ipad 9.7</span>
                        </div>
                        <div class="price-box"><span class="currency">฿</span><span class="price">240.00</span></div>
                    </div>
                    <div class="text-sub">
                        <div><p class="grey--text">ตัวเลือกสินค้า: 10.2</p></div>
                        <div>
                            <button class="">ลบ</button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="cart-item" >
                <div class="img-card" >
                </div>

                <div class="text-card">
                    <div class="text-dtail">
                        <div><span class="d-inline-block text-truncate"
                              style="max-width: 280px;">
                            เคส ipad สินค้ามีสำหรับ ipad mini5/2017 /2018 ipad 9.7</span>
                        </div>
                        <div class="price-box"><span class="currency">฿</span><span class="price">240.00</span></div>
                    </div>
                    <div class="text-sub">
                        <div><p class="grey--text">ตัวเลือกสินค้า: 10.2</p></div>
                        <div>
                            <button class="">ลบ</button>
                        </div>
                    </div>

                </div>
            </div> 
            <div class="cart-item" >
                <div class="img-card" >
                </div>

                <div class="text-card">
                    <div class="text-dtail">
                        <div><span class="d-inline-block text-truncate"
                              style="max-width: 280px;">
                            เคส ipad สินค้ามีสำหรับ ipad mini5/2017 /2018 ipad 9.7</span>
                        </div>
                        <div class="price-box"><span class="currency">฿</span><span class="price">240.00</span></div>
                    </div>
                    <div class="text-sub">
                        <div><p class="grey--text">ตัวเลือกสินค้า: 10.2</p></div>
                        <div>
                            <button class="">ลบ</button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="cart-item" >
                <div class="img-card" >
                </div>

                <div class="text-card">
                    <div class="text-dtail">
                        <div><span class="d-inline-block text-truncate"
                              style="max-width: 280px;">
                            เคส ipad สินค้ามีสำหรับ ipad mini5/2017 /2018 ipad 9.7</span>
                        </div>
                        <div class="price-box"><span class="currency">฿</span><span class="price">240.00</span></div>
                    </div>
                    <div class="text-sub">
                        <div><p class="grey--text">ตัวเลือกสินค้า: 10.2</p></div>
                        <div>
                            <button class="">ลบ</button>
                        </div>
                    </div>

                </div>
            </div> */

</style>