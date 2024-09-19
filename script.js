const fullname = document.getElementById("input-card-name");
const number = document.getElementsByClassName("input-card-number")[0];
const month = document.getElementsByClassName("input-mes")[0];
const year = document.getElementsByClassName("input-año")[0];
const cvc = document.getElementsByClassName("input-numero")[0];
const button = document.getElementById("button");

button.addEventListener("click",evento =>{
    evento.preventDefault();
    completarCampo(fullname,number,month,year,cvc);
})

function completarCampo(fullname,number,mm,yy,cvc){
    const numbercard = document.getElementsByClassName("card-number")[0];
    const namecard = document.getElementsByClassName("card-name")[0];
    const month = document.getElementsByClassName("card-month")[0];
    const year = document.getElementsByClassName("card-year")[0];
    const back = document.getElementsByClassName("card-back")[0];
    
    // number verification
        if(number.value){
            numbercard.textContent = `0000 0000 0000 0000`;
        }else{
            numbercard.textContent = `${number.value}`;
        }
    //  name verification

            namecard.textContent = `${fullname.value}`;
    
    // month verification
            month.textContent = `${mm.value}/`;

    //  year verification
            year.textContent = `${yy.value}`;
    
    // cvc verification
            back.textContent = `${cvc.value}`;
}