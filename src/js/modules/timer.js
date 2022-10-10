const timer = (deadLine) => {
    const days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          min = document.querySelector('#minutes'),
          sec = document.querySelector('#seconds'),
          date = new Date(deadLine),
          interval = () => setInterval(setTime, 1000);

    setTime();
    interval();

    function timeDifference (){
        let t = Date.parse(date) - Date.parse(new Date()),
            sec = Math.floor((t / 1000) % 60),
            min = Math.floor((t / 1000/60) % 60),
            hours = Math.floor((t / (1000*60*60)) % 24),
            days = Math.floor((t / (1000*60*60*24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': min,
            'seconds': sec
        }
    }

    function setTime() {
        const time = timeDifference();
        if (time.total > 1000){
            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            min.textContent = addZero(time.minutes);
            sec.textContent = addZero(time.seconds);
        } else {
            clearInterval(interval);
            days.textContent = '00';
            hours.textContent = '00';
            min.textContent = '00';
            sec.textContent = '00';
        }


    }

    function addZero(num){
        if (num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

}

export default timer;