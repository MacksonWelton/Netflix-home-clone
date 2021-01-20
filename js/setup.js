(function showThumbnails() {

  const filmes = window.document.querySelector(".filmes");
  const series = window.document.querySelector(".series");
  const documentarios = window.document.querySelector(".documentarios");

  const qtd = 10;


  for (let i = 1; i <= qtd; i++) {

    if (filmes) {
      filmes.innerHTML =
        filmes.innerHTML +
        `<div class="item">
            <a href="/videos/filmes/video${i}.html">
              <img class="box-filme" src="/img/filmes/mini${i}.jpg" alt="">
            </a>
          </div>`;
    }

    if (series) {
      series.innerHTML =
        series.innerHTML +
        `<div class="item">
          <a href="/videos/series/video${i}.html">
            <img class="box-filme" src="/img/series/mini${i}.jpg" alt="">
          </a>
        </div>`;
    }

    if (documentarios) {
      documentarios.innerHTML =
        documentarios.innerHTML +
        `<div class="item">
            <a href="/videos/documentarios/video${i}.html">
              <img class="box-filme" src="/img/documentarios/mini${i}.jpg" alt="">
            </a>
          </div>`;
    }


  }
})();

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
