//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (...input) => {
   // let sum=0;
  // console.log(input[0]);
  // for(const number of input[0]){
  //     let n=Math.floor((input[1]-1)/number);
  //     if(n>=1){      
  //       sum += (n/2)*(2*number+(n-1)*number);
  //       }
  //     }
  let arr=[];
  for(const number of input[0]){
      let mul=number;   
      while(mul<input[1] && mul>0){
          arr.push(mul);
          mul+=number;
      }
  }
      if(arr.length===0){
          return 0;
      }
  
      let set=new Set(arr);
      const sum = [...set].reduce((a, b) => a + b, 0);
     return sum;
  }

