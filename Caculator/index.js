let display = document.querySelector('.display');
let itemsBtn = document.querySelectorAll('.items');

itemsBtn.forEach((btn) => {
    btn.addEventListener('click',function() {
        if(display.innerHTML == "0") {
            display.innerHTML = '' ;
        }

        if(btn.innerHTML == 'AC') {
            display.innerHTML = '0';
        }else if(btn.innerHTML == 'DEL') {
            let arrtext = Array.from(display.innerHTML);
            arrtext.splice(arrtext.length - 1,1);
            if(arrtext.length != 0) {
                display.innerHTML = arrtext.join('')
            }else {
                display.innerHTML = '0';
            }
        }else if(btn.innerHTML == '=') {
            display.innerHTML = eval(display.innerHTML)
        }else{
            display.innerHTML += btn.innerHTML;
        }
        
       
    })
})