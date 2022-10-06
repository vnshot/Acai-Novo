function logar(){

  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  if(login == "admin" && senha == "admin"){
      alert('Bem Vindo ao Açai do Vini');
      location.href = "index-2.html";
  }else{
      alert('Usuario ou senha incorretos');
  }

}