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

