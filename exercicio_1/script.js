  function teste() {
    //modificar um elemento.
    document.getElementById("p1").innerHTML = "Parágrafo 1 modificado.";

    //modificar o estilo de um elemento.
    var elemento = document.getElementById('p2');
    elemento.style.fontWeight = 'bold';
    elemento.style.color = 'blue' ;
    elemento.innerHTML ='Alterado para cor Azul e texto negrito';

    //Modificar visibilidade de um elemento.
    var p3 = document.getElementById('p3');
    var p4 = document.getElementById('p4');
    p3.hidden = true;
    p4.innerHTML ='O parágrafo 3 foi escondido.';
    
    //modificar um atributo de um elemento.
    var link = document.getElementById('link');
    link.setAttribute('href', 'http://www.imdb.com');

    //Adicionar um atributo.
    link.setAttribute('target', '_blank');

    //adicionar um novo elemento À página.
    var novo = document.createElement('p');
    document.body.appendChild(novo);
    novo.innerHTML = "Novo!"

    //Trocar um elemento de uma div para outra.
    var imagem = document.getElementById('imagem');
    document.getElementById('div2').appendChild(imagem);
  }