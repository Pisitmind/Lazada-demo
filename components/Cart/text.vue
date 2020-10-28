<template>
    <div class="cart-page">
        <div id="container" class="container">
            <div>
                <div class="root">
                    <div id="container_c" class="container_all" style="margin-top: 12px;">
                        <div id="left_container" class="container" >
                            <div class="list-header-top">          
                                <div class="list-header-container">
                                    <div class="list-header">
                                        <div class="checkbox-wrap">
                                            <label class="next-checkbox list-header-checkbox">
                                                <input type="checkbox" value="on">
                                            </label>
                                            Select All ( {{ carts.length }} item(s))
                                        </div>
                                        <div class="list-header-operate">
                                            <div class="btn-wrap">
                                                <v-btn
                                                @click="delBtn"
                                                    class="btn-del"  color="#f4f4f4"
                                                    >
                                                    <v-icon  color="black">
                                                     mdi-trash-can-outline
                                                    </v-icon>
                                                    <span class="list-header-operation-text">Delete</span>
                                                 </v-btn>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="checkout-shop-child1" v-for="cart in carts" :key="cart.name" >
                                <!-- <button @click="remove(cart)">{{cart.id}}</button> -->
                                <div class="cart-item">
                                    <div class="cart-item-inner">
                                        <div class="cart-item-left">
                                            <label class="next-checkbox cart-item-checkbox">
                                                    <input type="checkbox" :value="cart" 
                                                    id="cart.id" 
                                                    v-model="checkbox_id">
                                            </label>
                                            <div class="img-wrap"></div>
                                            <div class="content-item">
                                                <a class="d-tail">{{cart.mess}}</a>
                                                <a class="grey--text sub-tail">{{cart.subtext}}</a>
                                            </div>
                                        </div>
                                        <div class="cart-item-middle">
                                            <p class="current-price">฿{{cart.price}}.00</p>
                                            <div class="cart-middle-btn">
                                                <div class="btn-wrap center">
                                                    <v-btn icon @click="remove(cart)">
                                                        <v-icon color="grey">
                                                            mdi-trash-can-outline
                                                        </v-icon>
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cart-item-right">
                                            <div class="set-mid center">   
                                                <div class="input-quantity">
                                                    <v-btn   elevation="2"  small  color="grey">
                                                    <v-icon class="icn-a" @click="decrese(cart)">
                                                        mdi-minus
                                                        </v-icon> 
                                                    </v-btn>
                                                    <input class="item-value" type="text" v-model="cart.quantity">
                                                    <v-btn  elevation="2" small color="grey">
                                                    <v-icon class="icn-a" @click="increcse(cart)">
                                                        mdi-plus
                                                        </v-icon> 
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="right_container" class="container" >
                            <div class="list-header-top">
                                <div class="summary-section">
                                    <div class="summary-section-content">
                                        <div class="location-checkout">
                                            <div class="location-label">
                                                Location
                                            </div>
                                            <div class="location-body">
                                                <i class="location-icon">
                                                    <v-icon size="24" color="grey lighten-2">
                                                        mdi-map-marker
                                                    </v-icon>
                                                </i>
                                                <div class="location-address">
                                                    เชียงใหม่/ Chiang Mai,เมืองเชียงใหม่/ Mueang Chiang Mai,50200
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr>
                                </div>
                                <div class="summary-section">
                                    <div class="summary-section-heading">
                                        Order Summarys
                                    </div>
                                    <div class="summary-section-content">
                                        <div class="checkout-sumaary">
                                            <div class="checkout-sumaary-rows">
                                                <div class="checkout-sumaary-row" style="display:flex; justify-content:space-between; margin-bottom:15px;">
                                                    <div>
                                                        Subtotal
                                                    </div>
                                                    <div>
                                                        {{subtotal}}
                                                    </div>
                                                </div>
                                                <div class="checkout-sumaary-row" style="display:flex; justify-content:space-between; margin-bottom:15px;">
                                                    <div>
                                                        Shipping Fee
                                                    </div>
                                                    <div>
                                                        ฿0.00
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="voucher-input">
                                                <div class="voucher-input-inner">
                                                    <div class="voucher-input-col">
                                                        <input type="text" placeholder="Enter Voucher Code" value="" height="100%">
                                                    </div>
                                                    <div class="voucher-input-btn">
                                                        <v-btn color="#1a9cb7">
                                                            Apply
                                                        </v-btn>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="checkout-order-total">
                                                <div class="checkout-order-total-row">
                                                    <div class="checkout-order-total-title">
                                                        Total
                                                    </div>
                                                    <div class="checkout-order-total-fee">
                                                        ฿ {{subtotal}}
                                                        <small class="checkout-order-total-fee-tip" data-spm-anchor-id="a2o4m.cart.0.i8.2d226108KbUCT4">VAT included, where applicable</small>
                                                    </div>
                                                </div>
                                                <v-btn class="next-btn checkout-order-total-button"
                                                       color="#D0611e"
                                                >
                                                    PROCEED TO CHECKOUT
                                                </v-btn>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
           
        
        </div>
       
    </div>  

</template>
<script>
import { mapMutations } from 'vuex';

export default {
  computed: {
    carts () {
      return this.$store.state.carts
    },

    subtotal () {
        let total=0;
        this.$store.state.carts.forEach(element => {
            total += parseFloat(element.price) * element.quantity;
        });
        return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  watch: {
      checkbox_id() {
          console.log(this.checkbox_id);
      }
  },

  data (){
        return {
            checkbox_id: []
        }
    },
    methods: {
        increcse(cart) {
            this.$store.commit({
            type: 'add',
            idx: cart
            })
        },
        decrese(cart) {
            this.$store.commit({
            type: 'minus',
            idx: cart
            })
        },
        remove(cart) {
            console.log(cart);
            this.$store.commit({
            type: 'remove',
            idx: cart
            })
        },

        delBtn() {
            this.checkbox_id.forEach(element => {
                    this.$store.commit({
                    type: 'remove',
                    idx: element
                    });
            });
        }
      
  },
}
</script>


<style scoped>

.container {
    /* width: 1188px; */
    color: #000;
    /* background-color:#f4f4f4; */
    margin: 0 auto;
    margin-bottom: 20px;
}
.container_all{
    display: flex;

}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.content-item{
    display:flex;
    flex-direction: column;
}
.content-item a{
   color:#212121;
}
.d-tail{
    font-size: 14px;
}
.sub-tail{
    font-size: 12px;
}
.next-checkbox{
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 16px;
    height: 16px;
    line-height: 14px;
}
.next-checkbox input[type=checkbox]{
    position: absolute;
    width: 16px;
    height: 16px;
    margin: 0;
}

div{
    display:block;
}
#left_container{
    width: 788px;
    float: left;
    /* background-color:blue; */
}
#right_container{
    width: 388px;
    height:400px;
    float: right;
    background-color:rgba(200, 150, 250, 0.5);
}
.set-mid{
    display:flex;
}
.center{
    display:flex;
    align-self: center;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    justify-self: center;
}
.list-header-operation-text{
    color:black;
    font-size: 12px;
}
.btn-wrap:hover{
    color:#F57224;
}
.list-header-container{
    background-color:rgba(255, 254, 253, .6);
}
.list-header{
    display:flex;
    justify-content: flex-start;
    line-height: 40px;
    padding-left: 12px;
    padding-right: 12px;
    text-transform: uppercase;
}
.list-header-top{
    background-color:(0,250,250,.5);
    margin-bottom: 12px;
}
.list-header-checkbox{
    margin-right: 16px;
}
/* .checkbox-wrap{
    background-color:rgba(255, 254, 253, .4);
    
} */

.list-header-operate{
    /* background-color:rgba(20, 254, 253, .6); */
    display:flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
}
.btn-wrap{
    font-size: 12px;
    color: black;
    border: none;
    background-color: transparent;
    outline: none;

}
.checkout-shop-child1{
    padding-bottom: 10px;
    background-color:#f5f5f5;
}

.cart-item {
    width: 100%;
    padding: 16px 0;
    background-color: #fff;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
}
.cart-item-inner {
    width: 100%;
    display: table;
}
.cart-item .cart-item-checkbox {
    float: left;
    margin-right: 16px;
    margin-top: 32px;
}
.cart-item-left {
    display: table-cell;
    vertical-align: top;
    width: calc(100% - 156px - 139px);
    padding-left: 10px;
}
.cart-item-middle {
    display: table-cell;
    vertical-align: top;
    width: 156px;
    padding-left: 9px;
    /* background-color:grey; */
}
.cart-middle-btn{
    justify-content: center;
}

.cart-item-left .img-wrap {
    position: relative;
    float: left;
    width: 80px;
    height: 80px;
    margin-right: 12px;
    background-color:grey;
}
.cart-item-right {
    display: table-cell;
    vertical-align: top;
    width: 139px;
    text-align: right;
    padding-right: 20px;
    /* background-color: rgba(186, 231, 21, 0.4); */
}
.current-price{
    font-size: 18px;
    line-height: 28px;
    color: #f57224;
    font-weight: 500;
    margin-bottom: 4px;
    text-align: center;

}
.input-quantity{
    display: flex;
    padding: 30px 0px;
    flex-direction: row;
    justify-content:space-between;
}
.icn-a{
    width: 32px;
    height: 32px;
}
.item-value{
    width: 50px;
    align-items: center;
    text-align: center;
}


.location-label {
    font-size: 14px;
    color: #9e9e9e;
    letter-spacing: 0;
    line-height: 18px;
    margin-bottom: 11px;
}

.location-body {
    display: flex;
    width: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.location-icon {
    padding-right: 10px;
    display: table-cell;
    vertical-align: middle;

}
.location-address{
    font-size: 12px;
    color: #202020;
    padding-right: 15px;
}
.summary-section {
    padding: 16px 12px 0;
    color: #202020;
}
.summary-section-heading {
    font-size: 18px;
    color: #212121;
    margin-bottom: 14px;
    position: relative;
    font-weight: 500;
}
.checkout-summary-rows {
    margin-bottom: 15px;
}
.checkout-summary-row {
    display: flex;
    width: 100%;
    margin-bottom: 16px;
}
/* 
.checkout-summary-label {
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    color: #757575;
    letter-spacing: 0;
    line-height: 21px;
} */
.checkout-summary-value {
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    line-height: 21px;
    color: #202020;

}
.checkout-summary-noline-value {
    margin-right: 5px;
}
.voucher-input {
    margin-bottom: 8px;
}
.voucher-input-inner{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 4px;
}
.voucher-input-col{
    padding-right: 8px;
}
.voucher-input-col input{
    width: 250px;
    height: 38px;
    margin: 0;
    padding: 0 8px;
    font-size: 14px;
}
.voucher-input-btn{
    height: 40px;
    width:104px;
}
.checkout-order-total {
    margin-top: 10px;
}
.checkout-order-total-row {
    display: table;
    width: 100%;
    margin-bottom: 16px;
}
.checkout-order-total-title {
    display: table-cell;
    font-size: 14px;
    color: #202020;
    line-height: 16px;
}
.checkout-order-total-fee {
    display: table-cell;
    font-size: 18px;
    color: #f57224;
    text-align: right;
}
.checkout-order-total-fee-tip {
    font-size: 12px;
    color: #424242;
    letter-spacing: 0;
    line-height: 16px;
    display: block;
    text-align: right;
    margin-top: 5px;
}
.checkout-order-total-button.next-btn {
    width: 100%;
    height: 40px;
    float: right;
    line-height: 14px;
    margin-left: 12px;
}

</style>
