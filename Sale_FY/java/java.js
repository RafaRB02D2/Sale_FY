
//formCalc

document.getElementById("formCalc").addEventListener("submit",async(e)=>{
    e.preventDefault();

    const n1=Number.parseFloat(document.getElementById("n1").value);
    const n2=Number.parseFloat(document.getElementById("n2").value);
    const n3=Number.parseFloat(document.getElementById("n3").value);
    const n4=Number.parseFloat(document.getElementById("n4").value);
    const n5=Number.parseFloat(document.getElementById("n5").value);
    const n6=Number.parseFloat(document.getElementById("n6").value);
    const n7=Number.parseFloat(document.getElementById("n7").value);
    const n8=Number.parseFloat(document.getElementById("n8").value);
    const n9=Number.parseFloat(document.getElementById("n9").value);

    let valor_produto = n1 + n2 + n3 + n4 + n5 + n6 + n7;

    let impostos = n8 + n9;
    
    let valor_do_impostos = (100 - impostos) / 100;

    let Preco_de_venda = valor_produto / valor_do_impostos;

    alert("O preço de venda é: " + Preco_de_venda.toFixed(2));

});