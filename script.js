// CRIAÇÃO DA FUNÇÃO CALCULATE PRICE QUE ESTÁ NO BUTTON- LINHA 19.
function calculatePrice(){
// CRIAÇÃO DAS VARIÁVES QUE OBTERÃO OS VALORES DO CAMPO INPUT- LINHAS 16 E 18.
var km = parseFloat(document.getElementById('inputKm').value);
var dias = parseFloat(document.getElementById('inputDias').value);

//CRIAÇÃO DE UMA CONDICIONAL SE CASO INSERIR UM VALOR INVÁLIDO.

if(isNaN(km)||isNaN(dias)|| km < 0|| dias <0){
    document.getElementById('resultado').innerText="Insira um número válido!";
    return;
}
//CRIAÇÃO DAS VARIÁVEIS PARA O CÁLCULO DO PREÇO
var precoPorKm = 0.50;
var precoPorDia = 20.00;
var precoTotal = (km * precoPorKm)+(km * precoPorDia);

//MOSTRA O RESULTADO NA DIV DO HTML
document.getElementById('resultado').innerText="Você pagará o valor de: R$" + precoTotal.toFixed(2);

}