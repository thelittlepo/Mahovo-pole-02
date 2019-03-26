$(".sb-img ").on("mouseover", function () {
  $(".hover").css("filter","0");
})

$(".sb-img ").on("mouseleave", function () {
	$(".hover").css("filter,"1");
})

$(".ice-img ").on("mouseover", function () {
  $(".hover").css("filter","0");
})

$(".ice-img").on("mouseleave", function () {
	$(".hover").css("filter,"1");
})
$(".wknd-img ").on("mouseover", function () {
  $(".hover").css("filter","0");
})

$(".wknd-img ").on("mouseleave", function () {
	$(".hover").css("filter,"1");
})

$(".tatu-img ").on("mouseover", function () {
  $(".hover").css("filter","0");
})

$(".tatu-img").on("mouseleave", function () {
	$(".hover").css("filter,"1");
})

$(".cash-img").on("mouseover", function () {
  $(".hover").css("filter","0");
})

$(".cash-img).on("mouseleave", function () {
	$(".hover").css("filter,"1");
})

const text = 'махово';

const createLetterArray = (string) => {
  return string.split('');
}

const createLetterLayers = (array) => {
  return array.map((letter) => {
      let layer = '';
      for (let i = 1; i <= 2; i++) {
        if(letter == ' '){
          layer += '<span class="space"></span>';
        }else{
          layer += '<span class="letter-'+i+'">'+letter+'</span>';
        }
      }
      return layer;
  });
}

const createLetterContainers = (array) => {
  return array.map((item) => {
    let container = '';
    container += '<div class="wrapper">'+item+'</div>';
    return container;
  });
}

const outputLayers = new Promise(function(resolve, reject) {
      document.getElementById('text').innerHTML = createLetterContainers(createLetterLayers(createLetterArray(text))).join('');
      resolve();
});

const spans = Array.prototype.slice.call(document.getElementsByTagName('span'));
outputLayers.then(() => {
    return spans.map((span) => {
      setTimeout(() => {
        span.parentElement.style.width = span.offsetWidth+'px';
        span.parentElement.style.height = span.offsetHeight+'px';
      }, 250);
    });
}).then(() => {
    let time = 250;
    return spans.map((span) => {
      time += 75;
      setTimeout(() => {
        span.parentElement.style.top = '0px';
      }, time);
    });
});
