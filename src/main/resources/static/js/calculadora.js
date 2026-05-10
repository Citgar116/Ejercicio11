
function suma()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = parseInt(num1) + parseInt(num2);
    document.getElementById("resultado").innerHTML = resultado;
}

function resta()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = parseInt(num1) - parseInt(num2);
    document.getElementById("resultado").innerHTML = resultado;
}

function multiplicacion()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = parseInt(num1) * parseInt(num2);
    document.getElementById("resultado").innerHTML = resultado;
}

function dividir()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    if(num2 == 0)
    {
        alert("No se puede dividir entre 0");
    }
    else
    {
        let resultado = parseInt(num1) / parseInt(num2);
        document.getElementById("resultado").innerHTML = resultado;
    }

}