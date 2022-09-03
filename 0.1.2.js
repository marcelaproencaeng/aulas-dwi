//Faça uma função que irá receber três parâmetros. O primeiro será um numero que representa o valor de uma compra que está sendo feita no mercado / farmácia. O segundo parâmetro é um `boolean` que representa se a compra possui ou não convênio com o estabelecimento e o último parâmetro representa se a compra está sendo feita ou não com o cartão da loja. Se a pessoa que estiver fazendo a compra possuir o cartão da loja e possui convênio então o desconto será de 15%. Se o usuário possuir convenio ou estiver fazendo a compra pelo cartão da loja o desconto é de 10%. Caso o usuário não tenha nenhum desses benefícios não existe desconto para a compra.

function compra(valorCompra, temConvenio, cartaoLoja) {
  let valorFinal = 0;

  if (temConvenio && cartaoLoja) {
    valorFinal = valorCompra - valorCompra * 0.15;
    console.log('Tem desconto de 15%');
    return valorFinal;
  } else if (temConvenio || cartaoLoja) {
    valorFinal = valorCompra - valorCompra * 0.1;
    console.log('Tem desconto de 10%');
    return valorFinal;
  } else {
    valorFinal = valorCompra;
    console.log('Não tem desconto');
    return valorFinal;
  }
}
