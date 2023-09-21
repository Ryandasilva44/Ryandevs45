// isso foi para esconder uma lista e quando aperta o icon a lista aparecer do lado esquersdo da pagina 

  var icon =                      document.getElementById('icon');
 
  var list =                       document.querySelector('.list');
  
  
  
  
  icon.addEventListener('click', function(){
     
     list.classList.toggle('show-list');
  });
  
  //agora vou fazer um botao aparecer assim que a pagina for carregada usando a animacao "animate__zoomIn" faz com que o botao apareca te dentro para fora com uma duracao de 5.5s bem simples.
  
  var element = document.querySelector('.animate__animated animate__zoomIn');
  
 // element.classList.add('animate__zoomIn');
  
  
  

 
        
     
