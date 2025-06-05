const conteudos = {
  amarelo: {
    titulo: 'O que fazer após um:<br>Alerta Amarelo',
    itens: [
      '- Acompanhe canais oficiais.',
      '- Evite áreas de risco.',
      '- Combine rotas seguras.',
      '- Proteja documentos.',
      '- Limpe calhas e prepare mochila.'
    ],
    imagens: [
      './assets/images/temponublado.png',
      './assets/images/neblina.png',
      './assets/images/previsao.png',
      './assets/images/limpandocalha.png'
    ]
  },
  laranja: {
    titulo: 'O que fazer após um:<br>Alerta Laranja',
    itens: [
      '- Atenção: alagamentos possíveis.',
      '- Não dirija em áreas alagadas.',
      '- Eleve itens e desligue eletrônicos.',
      '- Deixe o celular carregado.',
      '- Tenha rota de fuga pronta.',
      '- Fique com sua familia e/ou pets'
    ],
    imagens: [
      './assets/images/pessoaschuva.png',
      './assets/images/carronaagua.png',
      './assets/images/moto.png',
      './assets/images/curva.png'
    ]
  },
  vermelho: {
    titulo: 'O que fazer após um:<br>Alerta Vermelho',
    itens: [
      '- Saia das áreas de risco.',
      '- Vá para locais elevados.',
      '- Ligue 199 ou 193 só se urgente.',
      '- Não use celular molhado.',
      '- Siga orientações das autoridades.'
    ],
    imagens: [
      './assets/images/salvamento.png',
      './assets/images/aguasubindo.png',
      './assets/images/janela.png',
      './assets/images/bote.png'
    ]
  }
};

const alertas = document.querySelectorAll('.alerta');
const titulo = document.querySelector('#oqueFazer h2');
const lista = document.querySelector('#oqueFazer ul');
const escolhaAlerta = document.querySelector('.escolhaAlerta')

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');

alertas.forEach(alerta => {
  alerta.addEventListener('click', () => {
    let tipo = '';

    if (alerta.classList.contains('alerta-amarelo')) tipo = 'amarelo';
    else if (alerta.classList.contains('alerta-laranja')) tipo = 'laranja';
    else if (alerta.classList.contains('alerta-vermelho')) tipo = 'vermelho';

    atualizarConteudo(tipo);
    moverLinha(alerta);
  });
});

function moverLinha(alertaSelecionado) {
  const container = document.querySelector('.coresAlertas');
  const posicao = alertaSelecionado.offsetLeft - container.offsetLeft;
  escolhaAlerta.style.marginLeft = `${posicao}px`;
}

function atualizarConteudo(tipo) {
  titulo.innerHTML = conteudos[tipo].titulo;

  lista.innerHTML = '';
  conteudos[tipo].itens.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    lista.appendChild(li);
  });

  const [src1, src2, src3, src4] = conteudos[tipo].imagens;
  img1.src = src1;
  img2.src = src2;
  img3.src = src3;
  img4.src = src4;
}
