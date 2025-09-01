const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e)
  const height = Number(document.querySelector('#height').value)
   const weight = Number(document.querySelector('#weight').value)
   const result = document.querySelector('#result');
   if(height === " " || height <= 0 || isNaN(height)){
    result.innerHTML = `Pls Enter Valid Heigh : ${height}`;
   }else if (weight === " " || weight <= 0 || isNaN(weight)){
    result.innerHTML = `Pls Enter Valid Heigh : ${weight}`;
   }else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`
    if(bmi <= 18.6){
      document.querySelector('#message').innerHTML = `<span>Under Weigth <span>`
    }
    if(bmi >= 18.6 && bmi <= 24.9){
      document.querySelector('#message').innerHTML = `<span>Noraml Weight <span>`
    }
    if(bmi > 24.9){
      document.querySelector('#message').innerHTML = `<span>Over Weight<span>`
    }
   }
})