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
    
    
     
    
     

     

     

     
   





