function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    cartao.addEventListener('click', function() {
        this.classList.toggle('virado');
    });

    container.appendChild(cartao);


}

function mostrarCartaoAleatorio() {
    const cartoes = document.querySelectorAll('.cartao');
    cartoes.forEach(c => c.style.display = 'none');

    const index = Math.floor(Math.random() * cartoes.length);
    cartoes[index].style.display = 'block';
    window.scrollTo({ top: cartoes[index].offsetTop - 50, behavior: 'smooth' });
}




