// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function minQuantity(array){
  let minQuantity = array[0].quantity;
    for(let i =1; i < array.length; i++){
      if(array[i].quantity < minQuantity){
        minQuantity = array[i].quantity;
      }
    }
    return minQuantity;
}
console.log(minQuantity(inventory));
