function calculateTax(income,expenses) {
  if(income < 0 || expenses < 0 || income < expenses){
      return "Invalid Input";
  }

  const different = income - expenses;
  const tax = different * 0.2;
  return tax;
}



function sendNotification(email) {
  if(!email.includes('@')){
          console.log('Invalid Email');
  }else{
      let username = email.split("@")[0];
      let domain = email.split("@")[1];
      return username + " sent you an email from " + domain + "";
  }
  
}



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




function waitingTime(waitingTimes, serialNumber) {
  if(!Array.isArray(waitingTimes)){
    return 'Invalid Input';
  }
  if(isNaN(serialNumber)){
    return 'Invalid Input';
    }
  let sum = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
      sum += waitingTimes[i];
  }
  let avarageTime = Math.round (sum / waitingTimes.length);
  let before = serialNumber -1;
  let beforeIsrat = before - waitingTimes.length;
  if(beforeIsrat < 0){
  beforeIsrat = 0;
  }
  let waiting = avarageTime * beforeIsrat;
  return waiting;
}