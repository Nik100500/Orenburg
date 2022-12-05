
/* function CustomAlert(){
  this.alert = function(message,title){
    document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';

    let dialogoverlay = document.getElementById('dialogoverlay');
    let dialogbox = document.getElementById('dialogbox');
    
    let winH = window.innerHeight;
    dialogoverlay.style.height = winH+"px";
    
    dialogbox.style.top = "100px";

    dialogoverlay.style.display = "block";
    dialogbox.style.display = "block";
    
    document.getElementById('dialogboxhead').style.display = 'block';

    if(typeof title === 'undefined') {
      document.getElementById('dialogboxhead').style.display = 'none';
    } else {
      document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> '+ title;
    }
    document.getElementById('dialogboxbody').innerHTML = message;
    document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>';
  }
  
  this.ok = function(){
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  }
}


var customAlert = new CustomAlert();
var container = document.querySelector(".content-auth__container"),
 submitButton = document.querySelector(".content-auth__submit-button"),
         step = 1,
        timer = 0;
function changeStep() {
  step == 1 ? (container.classList.add("submit-sms"), step = 2) : (container.classList.remove("submit-sms"), step = 1)
}
function submitSMS() {
  step == 1 ? changeStep() : changeStep()
  if (timer == 0) {
    timer = 60
    submitButton.classList.add("disabled")
  } else {
    customAlert.alert('This is a custom alert with heading.','Heads Up!')
  }
}
submitButton.addEventListener("click", ()=> submitSMS()) */