// question 1:
document.querySelector('.a1').addEventListener('submit', function(e){
    e.preventDefault();
    let a = parseInt(document.querySelector('#n1').value);
    let b = parseInt(document.querySelector('#n2').value);

    let result = `Sum = ${a+b}, Diff = ${a-b}, Product = ${a*b}, Quotient = ${a/b}`;
    document.querySelector('.q1').innerHTML = result;
    console.log(document.querySelector('.q1').innerHTML);
});