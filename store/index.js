export const state = () => ({
  counter: 0,
  cart_stock:[],
  carts: [
                    {id:'0', name:'item1', mess:'this is item 1', photo:'http://th-test-11.slatic.net/p/3d5a2517901a4a04513ccc99ee8f1401.png_340x340q80.jpg_.webp', price:'50', subtext:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur', btnname:'ลบ', quantity:5},
                    {id:'1', name:'item2', mess:'this is item 2', photo:'http://th-test-11.slatic.net/p/3d5a2517901a4a04513ccc99ee8f1401.png_340x340q80.jpg_.webp', price:'300', subtext:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur', btnname:'ลบ', quantity:4},
                    {id:'2', name:'item3', mess:'this is item 3', photo:'http://th-test-11.slatic.net/p/3d5a2517901a4a04513ccc99ee8f1401.png_340x340q80.jpg_.webp', price:'350', subtext:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur', btnname:'ลบ', quantity:9},
                    {id:'3', name:'item4', mess:'this is item 4', photo:'http://th-test-11.slatic.net/p/3d5a2517901a4a04513ccc99ee8f1401.png_340x340q80.jpg_.webp', price:'400', subtext:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur', btnname:'ลบ', quantity:7},
                    {id:'4', name:'item5', mess:'this is item 5', photo:'http://th-test-11.slatic.net/p/3d5a2517901a4a04513ccc99ee8f1401.png_340x340q80.jpg_.webp', price:'420', subtext:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur', btnname:'ลบ', quantity:5},
                    {id:'5', name:'item6', mess:'this is item 6', photo:'http://th-test-11.slatic.net/p/3d5a2517901a4a04513ccc99ee8f1401.png_340x340q80.jpg_.webp', price:'350', subtext:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur', btnname:'ลบ', quantity:3},
                    {id:'6', name:'item7', mess:'this is item 7', photo:'http://th-test-11.slatic.net/p/3d5a2517901a4a04513ccc99ee8f1401.png_340x340q80.jpg_.webp', price:'250', subtext:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur', btnname:'ลบ', quantity:1},
                    {id:'7', name:'item8', mess:'this is item 8', photo:'http://th-test-11.slatic.net/p/3d5a2517901a4a04513ccc99ee8f1401.png_340x340q80.jpg_.webp', price:'350', subtext:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur', btnname:'ลบ', quantity:2},
                    {id:'8', name:'item9', mess:'this is item 9', photo:'http://th-test-11.slatic.net/p/3d5a2517901a4a04513ccc99ee8f1401.png_340x340q80.jpg_.webp', price:'400', subtext:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur', btnname:'ลบ', quantity:3},
                    {id:'9', name:'item10', mess:'this is item 10', photo:'http://th-test-11.slatic.net/p/3d5a2517901a4a04513ccc99ee8f1401.png_340x340q80.jpg_.webp', price:'100', subtext:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur', btnname:'ลบ', quantity:4},
                    {id:'10', name:'item11', mess:'this is item 11', photo:'http://th-test-11.slatic.net/p/3d5a2517901a4a04513ccc99ee8f1401.png_340x340q80.jpg_.webp', price:'100', subtext:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur', btnname:'ลบ', quantity:4},
                    {id:'11', name:'item12', mess:'this is item 12', photo:'http://th-test-11.slatic.net/p/3d5a2517901a4a04513ccc99ee8f1401.png_340x340q80.jpg_.webp', price:'100', subtext:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur', btnname:'ลบ', quantity:4},
                ]
})

export const mutations = {
  remove(state, cart) {
    state.carts = state.carts.filter(item => item.id !== cart.idx.id)
  },
  add(state, cart){
    console.log(cart.idx.id);
    state.carts[cart.idx.id].quantity++;
  },
  minus(state, cart){
    state.carts[cart.idx.id].quantity--;
    if(state.carts[cart.idx.id].quantity <= 0){
      state.carts = state.carts.filter(item => item.id !== cart.idx.id);
    }
  }
}