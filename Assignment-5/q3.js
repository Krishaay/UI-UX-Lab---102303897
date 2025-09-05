document.querySelector('#farm').addEventListener('submit', function(e){
    e.preventDefault();
    let a = document.querySelector('#n').value;
    if(a.trim() === "")
    {
        alert('please input a name !!!!');
        return;
    }

    let age = parseInt(document.querySelector('#age').value);
    if(isNaN(age))
    {
        alert('please enter a valid number as the age');
        return;
    }
    else if(age < 18 || age >= 100)
    {
        alert('invalid age');
        return;
    }

    alert('success');
})