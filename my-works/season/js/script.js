const fullYear = new Date().getFullYear();
console.log(fullYear);

if(fullYear >= 2025){
document.querySelector('#this-year').textContent = '2024 - '+fullYear
}else{
document.querySelector('#this-year').textContent = fullYear    
}
