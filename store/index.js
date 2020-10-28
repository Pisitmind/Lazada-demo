export const state = () => ({
  counter: 0,
  cart_stock: [],
  carts: [
    {
      id: '0',
      name: 'item1',
      mess: 'น้ำหอม JO MALONE กลิ่น ENGLISH PEAR',
      photo:
        'http://th-test-11.slatic.net/p/3d0aa61a76421c1342808dce8c93c83e.jpg_340x340q80.jpg_.webp',
      price: '300',
      subtext:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur',
      btnname: 'ลบ',
      quantity: 5,
    },
    {
      id: '1',
      name: 'item2',
      mess: 'Boqi factory ทรายเต้าหู้ 6 ลิตร/2.5Kg. SDHS22',
      photo:
        'http://th-test-11.slatic.net/p/9f61c2b1983cfe94bb41eac6be5bdc2c.jpg_340x340q80.jpg_.webp',
      price: '150',
      subtext:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur',
      btnname: 'ลบ',
      quantity: 4,
    },
    {
      id: '2',
      name: 'item3',
      mess: 'A bonne Spa milk salt shower formula',
      photo:
        'http://th-test-11.slatic.net/p/e631c23541b0ebe4c5126308a5179e5e.jpg_340x340q80.jpg_.webp',
      price: '299',
      subtext:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur',
      btnname: 'ลบ',
      quantity: 9,
    },
    {
      id: '3',
      name: 'item4',
      mess: 'Transparent case cover For Iphone',
      photo:
        'http://th-test-11.slatic.net/p/243ab21fed6c7cb5e44357bff95272a4.jpg_340x340q80.jpg_.webp',
      price: '250',
      subtext:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur',
      btnname: 'ลบ',
      quantity: 7,
    },
    {
      id: '4',
      name: 'item5',
      mess: 'ถั่วลิสงกรอบแก้ว เพื่อสุขภาพ 50 กรัม',
      photo:
        'https://th-test-11.slatic.net/p/c0250850c15949eb4b812fcb648a69aa.jpg_340x340q80.jpg_.webp',
      price: '100',
      subtext:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur',
      btnname: 'ลบ',
      quantity: 5,
    },
    {
      id: '5',
      name: 'item6',
      mess: 'ADDA รองเท้า รองเท้าลำลอง รุ่น 62M13W1',
      photo:
        'https://th-test-11.slatic.net/p/63b6d4f12ae6965f04c208cad3eeb7fa.jpg_340x340q80.jpg_.webp',
      price: '299',
      subtext:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur',
      btnname: 'ลบ',
      quantity: 3,
    },
    {
      id: '6',
      name: 'item7',
      mess: 'Bear Leader Girl Denim Jacket Coat',
      photo:
        'http://my-test-11.slatic.net/p/f11cdc7b3225fa7660a8b150eb18999b.jpg_340x340q80.jpg_.webp',
      price: '750',
      subtext:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur',
      btnname: 'ลบ',
      quantity: 1,
    },
    {
      id: '7',
      name: 'item8',
      mess: 'WINNER FURNITURE SPENCER BEDROOM',
      photo:
        'http://th-test-11.slatic.net/p/c74c3869c062d03789f416b2d8aa26bc.jpg_340x340q80.jpg_.webp',
      price: '600',
      subtext:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur',
      btnname: 'ลบ',
      quantity: 2,
    },
    {
      id: '8',
      name: 'item9',
      mess: 'LIVING MALL ROLLING OFFICE CHAIR - BLACK',
      photo:
        'https://my-test-11.slatic.net/p/c62a3b6b8f78741c35f268a3b11ab800.jpg_340x340q80.jpg_.webp',
      price: '990',
      subtext:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur',
      btnname: 'ลบ',
      quantity: 2,
    },
    {
      id: '9',
      name: 'item10',
      mess: 'มันฝรั่งทอดกรอบ รสกุ้งมังกร 14 กรัม x12 ถุง',
      photo:
        'http://th-test-11.slatic.net/p/4e051952c50004c3c93d9e745f6d6b79.jpg_340x340q80.jpg_.webp',
      price: '450',
      subtext:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur',
      btnname: 'ลบ',
      quantity: 4,
    },
    {
      id: '10',
      name: 'item11',
      mess: 'MALI มะลิ ผลิตภัณฑ์นมข้นหวาน 380 กรัม',
      photo:
        'http://th-test-11.slatic.net/p/3c12762c054370ab01498ebe79552063.jpg_340x340q80.jpg_.webp',
      price: '58',
      subtext:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur',
      btnname: 'ลบ',
      quantity: 4,
    },
    {
      id: '11',
      name: 'item12',
      mess: 'KELLOGGS เคลล็อก คอร์นเฟลก 500 กรัม',
      photo:
        'http://th-test-11.slatic.net/p/9bf2be1905de652f65ef842b91bd8c9f.jpg_340x340q80.jpg_.webp',
      price: '69',
      subtext:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia officia consequuntur',
      btnname: 'ลบ',
      quantity: 4,
    },
  ],
})

export const mutations = {
  remove(state, idx) {
    state.carts.splice(idx, 1)
  },
  add(state, idx) {
    console.log(idx)
    state.carts[idx].quantity++
  },
  minus(state, idx) {
    state.carts[idx].quantity--
    if (state.carts[idx].quantity <= 0) {
      state.carts.splice(idx, 1)
    }
  },
}
