let Suborder= [];

makesub = () =>{}

let subtotal = 0;

let subname=document.getElementById("subname").ariaValue
let size = document.getElementById("size").ariaValueMax;

if(subsize ==="small"){
    subtotal = subtotal +30;
}else if(size === "medium"){
    subtotal = subtotal + 50;
}else if (size === " large"){
    subtotal = subTotal + 80;
}else if (size === " extra large"){
    subtotal = subTotal + 120;
}

Suborder.push({
SubName:subname,
subsize:size,
toppings: topArray,
subprice: subtotal,
});

let toppings= document.getElementById("toppings");
const toppingPrices = {
  cheese: R5,
  lettuce: R5,
  tomato: R5,
  italian: R5,
  peppers: R8,
  onion: R5,
  tamalie: R10,
  pickles: R10,
};

console.log(toppings)

realTimeCost = () =>
 sizePrices = {
  small: R30,
  medium: R50,
  large: R80,
  xl: R120,
};

 Console.log()

 displayOrder = () =>{

  let total = document.getElementById("orderTotal")

  let overallTotal = 0;

  for(let i = 0; i <suborders.length; i++){
    let size = suborder[i].subSize;
    let toppings =suborder[i].toppings;
    let price = suborder[i].price;
  }
 }

