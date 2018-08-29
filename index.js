// Code your solution in this file!
<<<<<<< HEAD
function distanceFromHqInBlocks(end)
{
  if(end > 42){
    return (end - 42);  
  }
  else{
    return (end - 42) * -1;  
  }
  
  
}

function distanceFromHqInFeet(start, end){
  return distanceFromHqInBlocks(start, end) * 264;
}

function distanceTravelledInFeet(start, end){
  if(end > start){
    return (end - start) * 264;
  }
  else{
    return (end - start) * 264 * -1;
  }
}

function calculatesFarePrice(start, end){
  let totalDistanceInFeet = distanceTravelledInFeet(start, end);
  
  if (totalDistanceInFeet > 2500){
    return "cannot travel that far";
  }
  else if (totalDistanceInFeet > 2000){
    return 25;
    
  }
  else if (totalDistanceInFeet > 400 && totalDistanceInFeet < 2000){
    return (totalDistanceInFeet-400)*0.02;
    
  }
  else if (totalDistanceInFeet < 400){
    return 0;
    
  }
=======
function distanceFromHqInBlocks(destination)
{
  if(destination > 42){
    return (destination - 42);  
  }
  else{
    return (destination - 42)*-1;  
  }
  
  
>>>>>>> 81e0296c26f21a5acae0d10809743704cf22b339
}