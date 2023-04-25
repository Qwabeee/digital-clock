const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

 const clock = setInterval(
    function time(){
        const date_now = new Date();
        let hr = date_now.getHours();
        let min = date_now.getMinutes();
        let sec = date_now.getSeconds();
        if(hr < 10){
            hr = '0' + hr;
        }
        if(min <10){
            min = '0' + min;
        }

        if( sec < 10){
            sec = '0' + sec;
        }
        
        
        hours.textContent = hr;
        minutes.textContent = min;
        seconds.textContent = sec;
        
    },1000
 );
 