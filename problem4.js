
function calculateFinalScore(obj) {
   if(typeof obj !== "object"){
      return 'Invalid Input';
   }

   let total = obj.testScore + obj.schoolGrade;

   if(obj.isFFamily){
      total = total + (total * 0.2);
   }
   if(obj.isFFamily && total >= 80){
        return true;
   }else if(obj.isFFamily && total < 80){
      return false;
   }else if(!obj.isFFamily && total >= 80){
      return false;
   }else{
    return false;
   }
}
