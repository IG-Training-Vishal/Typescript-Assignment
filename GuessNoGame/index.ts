//const ranNumber:number=Math?.floor(Math?.random()*100)+1;
window.onload=()=>{
    const numInput:HTMLInputElement=<HTMLInputElement>document.getElementById("gNum");
    const result:HTMLElement=<HTMLDivElement>document.querySelector('#result');
    const ranNumber:number=Math?.floor(Math?.random()*100)+1;  //if math is not null or undefined then only it will check about floor
    console.log(ranNumber);
    numInput.onchange=()=>{
        let num : number=Number(numInput.value);
        console.log(numInput.value);
        if(num>ranNumber){
            result.innerHTML += `<p class="bigger">Guessed no (${num}) is higher</p>`;
        }else if(num < ranNumber){
            result.innerHTML +=`<p class="smaller">Guessed no (${num}) is lower</p>`;
        }else if(num === ranNumber){
            result.innerHTML +=`<p class="correct">Yep you guessed (${num}), is right</p>`;
        }else if(isNaN(num)){
            result.innerHTML +=`<p class="error">Enter a valid no</p>`;
        }
    }

};