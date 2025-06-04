$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });

  const sections = $("section");
  const navItems = $(".nav-item");

  $(window).on("scroll", function () {
    const header = $("header");
    const scrollPosition = $(window).scrollTop() + header.outerHeight();

    const sections = [
      $("#home"), 
      $("#menu"), 
      $("#testimonials"), 
    ];

    const menuSectionTop = $("#menu").offset().top;
    const othersBottom = $("#others").offset().top + $("#others").outerHeight();

    sections[1] = {
      offset: () => ({ top: menuSectionTop }),
      outerHeight: () => othersBottom - menuSectionTop,
    };

    let activeSectionIndex = 0;

    sections.forEach(function (section, i) {
      const sectionTop = section.offset().top;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
      }
    });

    // Atualiza os itens do menu (3 nav-items no total)
    const navItems = $(".nav-item");
    navItems.removeClass("active");
    $(navItems[activeSectionIndex]).addClass("active");

    // sombra no header
    if ($(window).scrollTop() <= 0) {
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", "5px 1px 5px rgba(0, 0, 0, 0.1)");
    }
  });


  ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
  });

  ScrollReveal().reveal('#products', {
    origin: 'right',
    duration: 2000,
    distance: '20%',
  });

  ScrollReveal().reveal("#others", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });

    ScrollReveal().reveal("#feedbacks", {
      origin: "right",
      duration: 2000,
      distance: "20%",
    });


});
