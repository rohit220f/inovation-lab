function Addition() {
    let input1 = parseFloat(document.getElementById("num1").value);
    let input2 = parseFloat(document.getElementById("num2").value);
    let result = input1+input2
    document.getElementById("res").innerText=result
    console.log(result);
}