console.log(parseInt(location.hash, 2));

var hashValue = parseInt(location.hash.replace("#", ""), 10);

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
