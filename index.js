var inputValue = document.getElementById('input')


var days = "0"
var hours = '0';
var minutes = '0';
var seconds = '0';

var myInterval

function start() { 
    var data = inputValue.value

    
    if(!inputValue.value){
        alert('Favor inserir uma data')
    }else {
        var targetDate = new Date(data).getTime();
        var date = new Date();
        var currentDate = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
       
        if(targetDate < currentDate) {
            alert('Favor informar uma data superior a atual');
            inputValue.value = ''
        } else {
        myInterval = setInterval(function() {
            targetDate = new Date(data).getTime();
            date = new Date();
            currentDate = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
           
            
        var inSeconds = (targetDate - currentDate) / 1000;

        days = parseInt(inSeconds / 86400);
        inSeconds = inSeconds % 86400;

        hours = parseInt(inSeconds / 3600);
        inSeconds = inSeconds % 3600;

        minutes = parseInt(inSeconds / 60);
        seconds = (inSeconds % 60).toFixed(0); 

        
        days = document.getElementById('days').innerHTML = days;
        hours = document.getElementById('hours').innerHTML = hours;
        minutes = document.getElementById('minutes').innerHTML = minutes;
        seconds = document.getElementById('seconds').innerHTML = seconds;


    var hideContent = document.getElementById('div-start');
    hideContent.classList.add('hide-content');
    var hideContent = document.querySelector('.div-restart');
    hideContent.classList.remove('hide-content');
        
},1000)}}};



function restart(){

    clearInterval(myInterval)

    
    inputValue.value = ''
     
    var hideContent = document.querySelector('.div-restart');
    hideContent.classList.add('hide-content');
    var hideContent = document.getElementById('div-start');
    hideContent.classList.remove('hide-content');
}