// Saudação personalizada
function getHoraAtual() {
    return new Date().getHours();
}

// Função para exibir o cumprimento com base na hora
function exibirCumprimento() {
    var horaAtual = getHoraAtual();
    var cumprimentoElement = document.getElementById('cumprimento');

    if (horaAtual >= 6 && horaAtual < 12) {
        cumprimentoElement.textContent = "Bom dia!";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        cumprimentoElement.textContent = "Boa tarde!";
    } else {
        cumprimentoElement.textContent = "Boa noite!";
    }
}

function changePDF(pdfPath) {
    document.getElementById('pdfEmbed').src = pdfPath;

    const buttons = document.querySelectorAll('.botoes button');

    // Remova a classe 'clicked' de todos os botões
    buttons.forEach(button => {
      button.classList.remove('clicked');
    });
  
    // Adicione a classe 'clicked' apenas ao botão clicado
    event.currentTarget.classList.add('clicked'); 


  }

// Chama a função ao carregar a página
window.onload = exibirCumprimento;

function initMap(){
    map = new google.maps.Map(document.getElementById('mapaGoogle'),{
      center: {lat: -15.79291306747657, lng: -47.884303763574906},
      zoom: 16,
      mapId: '180085d74a0a54fe'
    });
  }