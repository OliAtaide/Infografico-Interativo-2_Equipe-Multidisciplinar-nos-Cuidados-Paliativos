console.log(parseInt(location.hash, 2));

var hashValue = parseInt(location.hash.replace("#", ""), 10);

list = [
  {
    titulo: "MÉDICO:",
    text: [
      "Prescreve os cuidados terapêuticos para o alívio dos sintomas físicos;",
      "Intermediar os conflitos entre equipe multiprofissional, paciente e família; e",
      "Acompanham as etapas do adoecimento e o plano de cuidado até a morte, respeitando sempre a vontade e autonomia do paciente.",
    ],
  },
  {
    titulo: "EQUIPE DE ENFERMAGEM:",
    text: [
      "Administram as medicações;",
      "Realizam cuidados de higiene e conforto;",
      "Orientar sobre o sono, dieta e eliminações;",
      "Capacita o paciente e família para o autocuidado;",
      "Identificam os fatores que trazem sofrimento ao paciente e familiares e realizam intervenções; e",
      "Propiciam o conforto psíquico, social, e espiritual respeitando a vontade do paciente.",
    ],
  },
  {
    titulo: "PSICÓLOGO:",
    text: [
      "Responsável pelo suporte à família e ao paciente durante todas as etapas do adoecimento;",
      "Proporciona uma escuta ativa e empática;",
      "Maneja o sofrimento nas dimensões biopsicossociais e espirituais;",
      "Administra os conflitos;",
      "Trabalhar o luto;",
      "Cria um ambiente acolhedor onde emergem as angústias, medos, fantasias a serem trabalhadas; e",
      "Possibilita o paciente/familiares a realizarem os rituais de despedidas.",
    ],
  },
  {
    titulo: "FISIOTERAPEUTA:",
    text: [
      "Avalia o paciente nas diversas etapas do adoecimento;",
      "Realiza condutas terapêuticas - Exercício respiratório, uso de oxigênio, alongamentos; musculares, exercícios e posicionamento; e",
      "Treina a família para o manuseio dos dispositivos e aspiração.",
    ],
  },
  {
    titulo: "NUTRICIONISTA:",
    text: [
      "Avalia o estado nutricional;",
      "Orienta e faz as adaptações da dieta em cada caso com o foco no conforto e bem-estar do paciente; e",
      "Realiza discussões com a equipe multiprofissional e os familiares.",
    ],
  },
  {
    titulo: "FONOAUDIÓLOGO:",
    text: [
      "Avalia a função da deglutição;",
      "Intervêm para propiciar um maior conforto e qualidade de vida;",
      "Ajuda a equipe na decisão da via de alimentação; e",
      "Realizam exercícios e orientações em relação a quantidade, ritmo e postura durante a alimentação por via oral.",
    ],
  },
  {
    titulo: "DENTISTA:",
    text: [
      "Realiza diagnóstico as doenças bucais e intervém;",
      "Realizam cuidados curativos, preventivos ou paliativos; e",
      "Orienta métodos de higiene oral, mastigação e atende as emergências.",
    ],
  },
  {
    titulo: "ASSISTENTE SOCIAL:",
    text: [
      "Identifica as necessidades de cada família em seu contexto social;",
      "Auxilia no fortalecimento da rede de cuidado e apoio; e",
      "Oferece suporte aos pacientes nas questões de documentação, auxílio-doença, seguro, loas entre outros fundamentais para cada paciente e família.",
    ],
  },
  {
    titulo: "CAPELÃO:",
    text: [
      "Propicia ao paciente e à sua família o conforto espiritual;",
      "Respeita o cuidado integral e as diferentes culturas e religiões; e",
      "Realiza trabalhos em visitas em leito, em celebrações religiosas e em aconselhamentos individuais ou grupais.",
    ],
  },
];

function setButtons() {
  if (hashValue == 1 || !hashValue) {
    $("#btn-prev").hide();
  } else {
    $("#btn-prev").show();
  }
  $("g").each(function (index) {
    if (index < hashValue - 1) {
      $(this).addClass("previous");
    } else if (index == hashValue - 1) {
      $(this).addClass("current");
    }
  });

  $(".card-item").remove();

  const item = list[hashValue - 1];

  if (item) {
    let text = item.text
      .map((item) => {
        return `<li >${item}</li>`;
      })
      .join("");

    $(".circle").append(
      `
      <div class="card card-item" id="item-${hashValue}">
          <div class="card-body card-item-body">
              <div class="card-title">
                  ${item.titulo}
              </div>
              <div class="card-text">
                  <ul class="m-0">
                    ${text}
                  </ul>
              </div>
          </div>
      </div>
    `
    );
  }
}

setButtons();

function reset(i) {
  hashValue = i;
  location.hash = i;
  $("g").removeClass("previous");
  $("g").removeClass("current");
}

$("g").click(function () {
  var index = $(this).index();
  reset(index);
});

window.onhashchange = function () {
  setButtons();
};

$("#btn-next").click(function () {
  console.log($("g").length);
  if (hashValue) {
    if (hashValue == $("g").length) {
      location.href = "end.html";
    } else {
      reset(hashValue + 1);
    }
  } else {
    reset(1);
  }
});

$("#btn-prev").click(function () {
  if (hashValue) {
    reset(hashValue - 1);
  } else {
    reset(1);
  }
});
