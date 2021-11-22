function ejecutaVoz() {
  var eleexec = document.querySelectorAll("a,label,h1,h2,h3,p,span,li");
  eleexec.forEach((v, i) => {
    v.addEventListener("mouseenter", function (e) {
      if (readCookie("voz") != null) {
        var txt = e.target.textContent;
        txt = txt.split("\n").join("").split("\t").join("");
        if (txt == "") {
          txt = e.target.title;
        }
        if (txt == "") {
          txt = e.target.attributes["aria-label"].value;
        }
        if (txt == "") {
          txt = e.target.firstElementChild.alt;
        }
        responsiveVoice.speak(txt, "Spanish Latin American Female");
      }
    });
  });
}
function ejecutaComandos() {
  var doch = document.querySelector("body").clientHeight;
  var down = 0;
  if (annyang) {
    var commands = {
      inicio: () => {
        window.location.href = "index.php";
      },
      conocenos: () => {
        window.location.href = "conocenos.php";
      },
      conócenos: () => {
        window.location.href = "conocenos.php";
      },
      directorio: () => {
        window.location.href = "Directorio.php";
      },
      programas: () => {
        window.location.href = "Programas.php";
      },
      noticias: () => {
        window.open(
          "https://boletines.guanajuato.gob.mx/category/salud/",
          "_blank"
        );
      },
      "unidades de apoyo": () => {
        window.location.href = "Unidades-de-Apoyo.php";
      },
      transparencia: () => {
        window.location.href = "finanzas.php";
      },
      "trámites y servicios": () => {
        window.open(
          "https://tramitesyservicios.strc.guanajuato.gob.mx/index.php?dep=60&action=search",
          "_blank"
        );
      },
      "tramites y servicios": () => {
        window.open(
          "https://tramitesyservicios.strc.guanajuato.gob.mx/index.php?dep=60&action=search",
          "_blank"
        );
      },
      trámites: () => {
        window.open(
          "https://tramitesyservicios.strc.guanajuato.gob.mx/index.php?dep=60&action=search",
          "_blank"
        );
      },
      tramites: () => {
        window.open(
          "https://tramitesyservicios.strc.guanajuato.gob.mx/index.php?dep=60&action=search",
          "_blank"
        );
      },
      servicios: () => {
        window.open(
          "https://tramitesyservicios.strc.guanajuato.gob.mx/index.php?dep=60&action=search",
          "_blank"
        );
      },
      "bolsa de trabajo": () => {
        window.open(
          "https://salud3.guanajuato.gob.mx/bolsadetrabajo/",
          "_blank"
        );
      },
      coronavirus: () => {
        window.open("https://coronavirus.guanajuato.gob.mx", "_blank");
      },
      "salud mental": () => {
        window.open("https://dinamicamente.mx", "_blank");
      },
      convenios: () => {
        window.location.href = "convenios.php";
      },
      normatividad: () => {
        window.location.href = "normatividad.php";
      },
      "programas sociales y proyectos de inversión": () => {
        window.location.href = "programas-sociales-estatales.php";
      },
      "programas sociales y proyectos de inversion": () => {
        window.location.href = "programas-sociales-estatales.php";
      },
      "programas sociales": () => {
        window.location.href = "programas-sociales-estatales.php";
      },
      "proyectos de inversión": () => {
        window.location.href = "programas-sociales-estatales.php";
      },
      "proyectos de inversion": () => {
        window.location.href = "programas-sociales-estatales.php";
      },
      "directorio de jurisdicciones sanitarias": () => {
        window.location.href = "Directorio-Jurisdicciones.php";
      },
      "directorio de jurisdicciones": () => {
        window.location.href = "Directorio-Jurisdicciones.php";
      },
      "jurisdicciones sanitarias": () => {
        window.location.href = "Directorio-Jurisdicciones.php";
      },
      jurisdicciones: () => {
        window.location.href = "Directorio-Jurisdicciones.php";
      },
      "directorio de unidades médicas": () => {
        window.location.href = "Directorio-Unidades-Medicas.php";
      },
      "directorio de unidades medicas": () => {
        window.location.href = "Directorio-Unidades-Medicas.php";
      },
      "directorio de unidades": () => {
        window.location.href = "Directorio-Unidades-Medicas.php";
      },
      "unidades médicas": () => {
        window.location.href = "Directorio-Unidades-Medicas.php";
      },
      "unidades medicas": () => {
        window.location.href = "Directorio-Unidades-Medicas.php";
      },
      unidades: () => {
        window.location.href = "Directorio-Unidades-Medicas.php";
      },
      "facturación electrónica": () => {
        window.open("https://cfdi.guanajuato.gob.mx/cfdi_salud", "_blank");
      },
      "facturacion electrónica": () => {
        window.open("https://cfdi.guanajuato.gob.mx/cfdi_salud", "_blank");
      },
      "facturacion electronica": () => {
        window.open("https://cfdi.guanajuato.gob.mx/cfdi_salud", "_blank");
      },
      facturación: () => {
        window.open("https://cfdi.guanajuato.gob.mx/cfdi_salud", "_blank");
      },
      facturacion: () => {
        window.open("https://cfdi.guanajuato.gob.mx/cfdi_salud", "_blank");
      },
      facturar: () => {
        window.open("https://cfdi.guanajuato.gob.mx/cfdi_salud", "_blank");
      },
      cepav: () => {
        window.open("https://www.facebook.com/cepavgto", "_blank");
      },
      facebook: () => {
        window.open("https://www.facebook.com/SaludGuanajuato", "_blank");
      },
      twitter: () => {
        window.open("https://www.twitter.com/SaludGuanajuato", "_blank");
      },
      instagram: () => {
        window.open("https://www.instagram.com/saludguanajuato/", "_blank");
      },
      youtube: () => {
        window.open("https://www.youtube.com/SaludGuanajuato", "_blank");
      },
      soundcloud: () => {
        window.open("https://www.soundcloud.com/SaludGuanajuato", "_blank");
      },
      whatsapp: () => {
        window.open(
          "https://api.whatsapp.com/send?phone=524737327136&text=Bienvenido%20a%20la%20Secretar%C3%ADa%20de%20Salud%20de%20Guanajuato%2C%20estamos%20para%20servirte%20y%20orientarte%2C%20en%20que%20podemos%20apoyarte%20hoy%3A%20",
          "_blank"
        );
      },
      "inicio de página": () => {
        document.querySelector("html").scrollTop = 0;
      },
      "inicio de pagina": () => {
        document.querySelector("html").scrollTop = 0;
      },
      "fin de página": () => {
        document.querySelector("html").scrollTop = doch;
      },
      "fin de pagina": () => {
        document.querySelector("html").scrollTop = doch;
      },
      baja: () => {
        if (doch > down) {
          down = window.scrollY + 300;
        }
        document.querySelector("html").scrollTop = down;
      },
      sube: () => {
        if (doch < down) {
          down = window.scrollY - 300;
        }
        document.querySelector("html").scrollTop = down;
      },
    };
    annyang.setLanguage("es-MX");
    annyang.addCommands(commands);
    annyang.start();
  }
}
function detenerComandos() {
  if (annyang) {
    annyang.abort();
  }
}
function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else {
    var expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  createCookie(name, "", -1);
}
function mostrarAccesible() {
  let aumentadoCont = 0;
  createCookie("abrirAccesible", "1", 1);
  const mA = document.querySelector("#moduloAccesibilidad");
  mA.insertAdjacentHTML(
    "beforeend",
    '<div class="cur-pnt ocultaAccesible"><img id="cerrarAccesible" title="Cerrar" src="img/x-acs.svg"></div><div id="_biggtxt" class="cur-pnt"><img title="Aumentar Texto" class="biggertxt" src="img/txt+.svg"></div><div id="_smalltxt" class="cur-pnt"><img title="Reducir Texto" class="accesible1" src="img/txt-.svg"></div><div id="lecturaSeleccion" class="cur-pnt"><img title="Activar Lectura" class="accesible1" src="img/audio-.svg"></div><div id="reconocimientoVoz" class="cur-pnt"><img title="Activar Microfono" class="accesible1" src="img/micro-.svg"></div><div id="zoomin" class="cur-pnt"><img title="Aumentar tamaño de contenido" class="accesible1" src="img/lupa+.svg"></div><div id="zoomout" class="cur-pnt"><img title="Restablecer tamaño" class="accesible1" src="img/lupa-.svg"></div>'
  );
  fadeIn(mA, 500);
  document.querySelector("#cerrarAccesible").addEventListener("click", (e) => {
    fadeOut(mA, 500);
    mA.innerHTML = "";
    eraseCookie("abrirAccesible");
  });
  document.querySelector("#_biggtxt").addEventListener("click", (e) => {
    var mfontel = document.querySelector("body");
    var nmfontel =
      (parseInt(
        window.getComputedStyle(mfontel, null).getPropertyValue("font-size")
      ) +
        1) *
      0.063;
    mfontel.style.fontSize = nmfontel + "rem";
  });
  document.querySelector("#_smalltxt").addEventListener("click", (e) => {
    var mfontel = document.querySelector("body");
    var nmfontel =
      (parseInt(
        window.getComputedStyle(mfontel, null).getPropertyValue("font-size")
      ) -
        1) *
      0.063;
    if (nmfontel < 0.875) {
      nmfontel = 0.875;
    }
    mfontel.style.fontSize = nmfontel + "rem";
  });
  document.querySelector("#lecturaSeleccion").addEventListener("click", (e) => {
    if (readCookie("voz") === null) {
      createCookie("voz", "1", 1);
      addClass(document.querySelector("#lecturaSeleccion"), "active");
      ejecutaVoz();
    } else {
      eraseCookie("voz");
      removeClass(document.querySelector("#lecturaSeleccion"), "active");
    }
  });
  document
    .querySelector("#reconocimientoVoz")
    .addEventListener("click", (e) => {
      if (readCookie("comandos") === null) {
        createCookie("comandos", "1", 1);
        ejecutaComandos();
        addClass(document.querySelector("#reconocimientoVoz"), "active");
      } else {
        eraseCookie("comandos");
        detenerComandos();
        removeClass(document.querySelector("#reconocimientoVoz"), "active");
      }
    });
  document.querySelector("#zoomin").addEventListener("click", (e) => {
    addClass(document.querySelector("#zoomin"), "active");
    if (aumentadoCont == 0) {
      addClass(document.querySelector("body"), "aumentado");
      removeClass(document.querySelector("body"), "aumentado2");
      removeClass(document.querySelector("body"), "aumentado3");
    }
    if (aumentadoCont == 1) {
      addClass(document.querySelector("body"), "aumentado2");
      removeClass(document.querySelector("body"), "aumentado");
      removeClass(document.querySelector("body"), "aumentado3");
    }
    if (aumentadoCont == 2) {
      addClass(document.querySelector("body"), "aumentado3");
      removeClass(document.querySelector("body"), "aumentado2");
      removeClass(document.querySelector("body"), "aumentado");
      aumentadoCont = -1;
    }
    aumentadoCont++;
  });
  document.querySelector("#zoomout").addEventListener("click", (e) => {
    removeClass(document.querySelector("body"), "aumentado");
    removeClass(document.querySelector("body"), "aumentado2");
    removeClass(document.querySelector("body"), "aumentado3");
    removeClass(document.querySelector("#zoomin"), "active");
  });
}
if (
  readCookie("abrirAccesible") != null ||
  readCookie("comandos") != null ||
  readCookie("voz")
) {
  mostrarAccesible();
  setTimeout(() => {
    if (readCookie("comandos") != null) {
      ejecutaComandos();
      addClass(document.querySelector("#reconocimientoVoz"), "active");
    }
    if (readCookie("voz") != null) {
      addClass(document.querySelector("#lecturaSeleccion"), "active");
      ejecutaVoz();
    }
  }, 1000);
}
