let saldo = 1000.00
let valor_Em_Mao = 0

function receber(){
    let sacar = parseFloat(prompt("Quantos R$ deseja sacar ?"))
    

    if(isNaN(sacar) || sacar <=0){
    alert("Digite um número válido ")
   }

   else if(sacar <= saldo){
        saldo = saldo - sacar
        valor_Em_Mao = valor_Em_Mao + sacar
        alert("Saque realizado com sucesso")
        alert(`O seu saldo é de: ${saldo}R$`)
   }
   
    else{
    alert("Saldo insufuciente")
   }
}

function ver_Saldo() {
    alert(`O seu saldo disponivel e no total de: ${saldo}R$`)
}

function ver_Saldo_em_mao(){
    alert(`O seu saldo em mão no total de: ${valor_Em_Mao}R$`)
}

function depositar(){
    let add_dinheiro = parseFloat(prompt("Quantos R$ deseja depositar ?"))
    
    if(isNaN(add_dinheiro) || add_dinheiro <=0){
    alert("Digite um número válido ")
   }

    else if(valor_Em_Mao >= add_dinheiro){
      valor_Em_Mao = valor_Em_Mao - add_dinheiro
      saldo = saldo + add_dinheiro
      alert(`Deposito feito com sucesso `)
      alert(`Seu saldo atual é de : ${saldo}R$`)
    }

    else{
        alert("Saldo em mãos insuficiente")
    }
}