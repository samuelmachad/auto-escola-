// Exemplo de código JavaScript para adicionar interatividade

// Seleciona todos os elementos com a classe "card"
const cards = document.querySelectorAll('.card');

// Adiciona um listener de clique em cada card
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Faz algo quando o card é clicado, como redirecionar para uma página específica ou exibir mais informações
    console.log('Card clicado!');
  });
});