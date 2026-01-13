/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus (time) {
  if(Number(time)>=0){
      return Number(time)===0?'Lasagna is done.':'Not done, please wait.';
  }
  return 'You forgot to set the timer.';
}
export function preparationTime(layers,avgtime=2){
  return layers.length*avgtime;
}

export function quantities(layers) {
  const quentity={'noodles':0,'sauce':0};
  for(let item of layers){
    console.log(item);
      if(item==='noodles'){
        quentity['noodles']+=50;
      }
      else if(item==='sauce'){
         quentity['sauce']+=0.2;
      }
  }
  return quentity;
}
export function addSecretIngredient (friendList,myList) {

  myList.push(friendList[friendList.length-1]);
 
}

export function scaleRecipe (recipe,scaleFactor) {


  //structuredClone(original)
  const newRecipe=structuredClone(recipe);
  
  
  for(const key in newRecipe){
      newRecipe[key]=newRecipe[key]*scaleFactor/2;
  }

  return newRecipe;
  
}