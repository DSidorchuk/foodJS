const calculator = () => {
    const gender = document.querySelectorAll('#gender .calculating__choose-item '),
          inputs = document.querySelectorAll('input.calculating__choose-item'),
          activity = document.querySelectorAll('#activity .calculating__choose-item'),
          output = document.querySelector('.calculating__result'),
          active = 'calculating__choose-item_active',
          result = {
            gender: 'woman',
            height: '',
            weight: '',
            age: '',
            activity: 'small'
          };


    gender.forEach((el, i, array) => {
        el.addEventListener('click', () => {
            result.gender = el.getAttribute('id');
            activeItem(array, i);
            setResult();
        })
    });

    activity.forEach((el, i, array) => {
        el.addEventListener('click', () => {
            result.activity = el.getAttribute('id');
            activeItem(array, i);
            setResult();
        })
    })

    inputs.forEach(el => {
        el.addEventListener('input', () =>{
            result[el.getAttribute('id')] = el.value;
            setResult();
        })
    });

    function setResult(){
        if(getResult()){
            output.innerHTML = `<span>${getResult()}</span>  ккал`; 
        } else {
            output.textContent = 'Please fill in all data';
        }
    }

    

    function getResult() {
        let callories;
        if(checkResult()){
            if (result.gender == 'woman'){
                callories = 655.1 + (9.563 * +result.weight) + (1.85 * +result.height) - (4.676 * +result.age);
                callories = callories * activityForCalc(result.activity);
            };
            if (result.gender == 'man'){
                callories = 66.5 + (13.75 * +result.weight) + (5.003 * +result.height) - (6.775 * +result.age);
                callories = callories * activityForCalc(result.activity);
            };
            return Math.round(callories);
        }
        function checkResult(){
            for (let i in result){
                if(!result[i]){
                    return false;
                }
            }
            return true;
        }
        function activityForCalc(act){
            switch (act){
                case 'low':
                    return 1.2;
                    break;
                case 'small':
                    return 1.375;
                    break;
                case 'medium':
                    return 1.55;
                    break;
                case 'high':    
                    return 1.725;
                    break;
            }
    
        }
    }   

    function activeItem(array, index){
        array.forEach((el, i) => {
            el.classList.remove(active);
            if (i == index){
                el.classList.add(active);
            }
        })
    }

}

export default calculator;