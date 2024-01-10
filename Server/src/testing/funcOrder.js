const funcOrder = (array) =>{
    if(!array) return undefined;
    if(!array.length ) return array;
   for (let i = 1; i < array.length; i++) {   
      for (let j = 0; j < array.length-1; j++) {    
            if(array[i] < array[j]){
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
   }
   return array;
  }

module.exports = {
    funcOrder
}