
function checkDigitsInName(name) {
   if (typeof name !== "string") {
      return 'Invalid Input';
   }

   for(let i = 0; i < name.length; i++){
    
      let digits = name[i];
      if(!isNaN(digits)){
      return true;
      }
   }
   return false
}
