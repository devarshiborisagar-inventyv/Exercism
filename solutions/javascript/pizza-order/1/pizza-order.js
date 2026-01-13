/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
let price={
  Margherita:7,
  Caprese:9,
  Formaggio:10,
  ExtraSauce:1,
  ExtraToppings:2
}

export function calculateTopicPrice(extras,index) {
  if(index===extras.length){
    return 0;
  }

  return price[extras[index]]+calculateTopicPrice(extras,index+1);
  
}

export function pizzaPrice(pizza, ...extras) {

  console.log(pizza,extras);
  return price[pizza]+calculateTopicPrice(extras,0);
      
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */

export function calculateTotalPrice(pizzaOrders,index) {
    if(index===pizzaOrders.length){
    return 0;
  }
  return pizzaPrice(pizzaOrders[index].pizza , ...pizzaOrders[index].extras)+calculateTotalPrice(pizzaOrders,index+1);
  
}
export function orderPrice(pizzaOrders) {

    // BackTrakking solution 
    //return calculateTotalPrice(pizzaOrders,0);
    let total=0;

    for (let pizza of pizzaOrders) {
      total+=pizzaPrice(pizza.pizza , ...pizza.extras);
    }

  return total;
  
}
