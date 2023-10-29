function Verificar(){

     let nome = document.getElementById('name').value;
     let telefone = document.getElementById('tel').value;
     let data = document.getElementById('data').value;
     let cpf = document.getElementById('ao_cpf').value;
     let cep = document.getElementById('ao_cep');
     let endereco = document.getElementById('endereco').value;
     let number = document.getElementById('number').value;
     let complemento = document.getElementById('comple');
     let cidade = document.getElementById('cid');
     let estado = document.getElementById('est');
     let bairro = document.getElementById('bairro').value;
     let email = document.getElementById('email').value;
     let senha = document.getElementById('senha').value;
     let confsenha = document.getElementById('confsenha').value;

    
     if(!nome || !telefone || !senha || !endereco || !cpf || !data || !telefone || number || !bairro || !cep || !complemento || !cidade || !estado || !email || !confsenha){
     alert("Campos de preenchimento obrigatório. Favor preencher.")

}
else
alert ("Campo preenchido com sucesso");
}
    
   
'use restrict'; //Modo restrito

//Limpar formulario
const limparFormulario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('Cidade').value = '';
    document.getElementById('Estado').value = '';
    document.getElementById('bairro').value = '';

}

//VERIFICAR SE CEP É VALIDO
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//PREENCHE CAMPOS DO FORMULARIO
const preencherformulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

/*Função para consumo de API ultilizando a função do tipo assincrona*/
const pesquisarCep = async() =>{
    limparFormulario()
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();

        if(addres.hasOwnProperty('erro')){
        alert('CEP não encontrado')
        }else{
            preencherformulario(addres);
        }
    }else{
        alert('CEP incorreto');
    }
}

//adiciona um evento DOM, no imput CEP
document.getElementById('cep').addEventListener('focusout', pesquisarCep);

     
    
     

     

     

     
   





