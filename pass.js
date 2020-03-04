
//Declared Variables
var results = document.querySelector('#result');
var UNInumb = [48, 57];
var UNIupper = [65, 90];
var UNIlower = [97,122];
var UNIsym = [33,47];

// Add event listener to generate button
document.querySelector('#generate').addEventListener('click', () =>{
  //settings declared from the DOM
    var length = document.querySelector('#length').value;
    var upper = document.querySelector('#uppercase').checked;
    var lower = document.querySelector('#lowercase').checked;
    var numb = document.querySelector('#numbers').checked;
    var sym = document.querySelector('#symbols').checked;

    const randSelector = [];
    const password = [];

    if(upper === true)  {
      for(let i = UNIupper[0]; i < UNIupper[1]; i++){
        randSelector.push(i);
      }
    }
    if(lower === true)  {
      for(let i = UNIlower[0]; i < UNIlower[1]; i++){
        randSelector.push(i);
      }
    }if(numb === true)  {
      for(let i = UNInumb[0]; i < UNInumb[1]; i++){
        randSelector.push(i);
      }
    }if(sym === true)  {
      for(let i = UNIsym[0]; i < UNIsym[1]; i++){
        randSelector.push(i);
      }
    }
    
    for (let i = 0; i< length; i++){

      password.push(String.fromCharCode(randSelector[Math.floor(Math.random()*randSelector.length)]))
  }
    results.textContent = password.join("");
    
})

