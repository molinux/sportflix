$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    // Telas até 599 pixels, 1 item por vez
    0:{
      items:1
    },
    // Telas a partir de 600 pixels, 3 itens por vez
    600:{
      items:3
    },
    // Telas a partir de 1000 pixels, 3 itens por vez
    1000:{
      items:5
    }
  }
});

// $('#simple_arc').circleType({ radius: 135 });