window.onload=function(){

 const form=document.querySelector("#form");
 const Nomeinput= document.querySelector("#NameA");
 const Numberinput= document.querySelector("#NumberB");
 const corpotabela=document.querySelector("tbody");



 form.addEventListener("submit", function(event){
  event.preventDefault();
 if (validanumero() && validanome()){
  const novalinha=document.createElement("tr")
  
  const colunaNome=document.createElement("td");
  colunaNome.textContent= Nomeinput.value;
  
  const colunaNumero=document.createElement("td");
  colunaNumero.textContent=Numberinput.value;
  
  novalinha.appendChild(colunaNome);
  novalinha.appendChild(colunaNumero); 
  
  corpotabela.appendChild(novalinha);
  Nomeinput.value = "";
  Numberinput.value = "";
  }else{
    limpavalor();
    location.reload();
  }
 });

 function validanumero (){
  const numerovalido = Numberinput.value.length>=8;
  if (!numerovalido){
    alert ("Digite os 8 digitos do número")
    return false;
}
return true;
}
  

    function validanome (){
      const nomevalido=Nomeinput.value.trim().split(" ");
      if (nomevalido.length<2){
        alert ("Digite o nome e sobrenome")
        return false;
  }
  return true
}

function limpavalor (){
 if (!validanome () && !validanumero()){
    Nomeinput.value = "";
  Numberinput.value = "";
  }
}
}