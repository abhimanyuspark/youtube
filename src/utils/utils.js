export function formatViews(views = "") {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(2) + " M";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(2) + " K";
  } else {
    return views.toString();
  }
}

export function formateSecounds(seconds = 0) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  if(seconds <= 60){
    return `00m : ${remainingSeconds}s`;
  }else{
    return `${minutes}m : ${remainingSeconds}s`;
  }
  
}
