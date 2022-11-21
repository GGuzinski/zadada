const userName = document.querySelector('#userName');
const age = document.getElementById('age');
const BtnUserData = document.querySelector("main button");
const DataInput = document.querySelector('#dataInput');
const btnAddData = document.querySelector('article buttom');
const display = document.querySelector('section p');
let howMany;
 
function checkUserData(){
    const userNameval = userName.value;
    const ageval = Number(age.value);

    if( userNameval !== '' && ageval){

        display.innerHTML = `Witaj ${}`;
        if (ageval >= 18) {
             howMany = 10;
        } else {
             howMany = 6;
        }
    }else{
        display.innerHTML = 'Podaj prawidlowe dane';
    }


}
BtnUserData.addEventListener("click",checkUserData);
