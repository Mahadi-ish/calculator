
// Calculator get btn value
let number = document.getElementsByClassName('btn-calculate');
for (let i = 0; i < number.length; i++) {
    const numbers = number[i];
    numbers.addEventListener('click', function(){

        const getNumber = document.getElementById('display').value;
        const number = (getNumber + this.value);
        document.getElementById('display').value = number;                
    })
    
    
}


//evalute display result
document.getElementById('equel').addEventListener('click', function(){
    const result = document.getElementById('display').value;
    document.getElementById('display').value = eval(result);
})


// clear display result
document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('display').value ='';
})

