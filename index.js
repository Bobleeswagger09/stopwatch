window.onload = function () {
  
  let seconds = 00; 
  let mili = 00; 
  let appendTens = document.getElementById("mili")
  let appendSeconds = document.getElementById("seconds")
  let buttonStart = document.getElementById('button-start');
  let buttonStop = document.getElementById('button-stop');
  let buttonReset = document.getElementById('button-reset');
  let Interval ;

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    mili = "00";
  	seconds = "00";
    appendTens.innerHTML = mili;
  	appendSeconds.innerHTML = seconds;
  }
  
   
  
  function startTimer () {
    mili++; 
    
    if(mili <= 9){
      appendTens.innerHTML = "0" + mili;
    }
    
    else if (mili > 9){
      appendTens.innerHTML = mili;
      
    } 
    
    else if (mili > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      mili = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    else if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  

}