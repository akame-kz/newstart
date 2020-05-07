let timerID;

function clock() {
  let newDate = new Date();

  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();

  if (hours < 10) { hours = '0' + hours;}
  if (minutes < 10) { minutes = '0' + minutes;}
  if (seconds < 10) { seconds = '0' + seconds;}

  let clockDiv = document.getElementById('clock');

  clockDiv.children[0].innerHTML = hours;
  clockDiv.children[1].innerHTML = minutes;
  clockDiv.children[2].innerHTML = seconds;
}

function startClock() {
  timerID = setInterval(clock, 1000);
  clock();  
}

function stopClock() {
  clearInterval(timerID);
  timerID = null;
}

document.querySelector('#one').insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');