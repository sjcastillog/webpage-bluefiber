let isScroll = false;
const elChecked = document.getElementById('menu');
const el = document.getElementsByTagName('nav')[0];
const arrCards = document.getElementsByClassName('card');
const el2 = document.getElementById("menuIcon");
const links = document.getElementsByClassName("boton");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(parseInt(scroll) > 0){
        if(!isScroll){
            isScroll = true;
            el.classList.add('nav_bg')
        }
    }else{
        isScroll = false;
        if(!elChecked.checked){
            el.classList.remove('nav_bg')
        }
        
    }
});

$( '#facebook').hover(
    function() {
      $( this ).attr( "src", "images/facebook2.svg" );
    }, function() {
      $( this ).attr( "src", "images/facebook.svg" );
    }
);

$( '#whatsapp').hover(
    function() {
      $( this ).attr( "src", "images/whatsapp2.svg" );
    }, function() {
      $( this ).attr( "src", "images/whatsapp.svg" );
    }
);

$( '#twitter').hover(
    function() {
      $( this ).attr( "src", "images/twitter2.svg" );
    }, function() {
      $( this ).attr( "src", "images/twitter.svg" );
    }
);

$( '#instagram').hover(
    function() {
      $( this ).attr( "src", "images/instagram2.svg" );
    }, function() {
      $( this ).attr( "src", "images/instagram.svg" );
    }
);

$( '#facebook1').hover(
    function() {
      $( this ).attr( "src", "images/facebook2.svg" );
    }, function() {
      $( this ).attr( "src", "images/facebook.svg" );
    }
);

$( '#whatsapp1').hover(
    function() {
      $( this ).attr( "src", "images/whatsapp2.svg" );
    }, function() {
      $( this ).attr( "src", "images/whatsapp.svg" );
    }
);

$( '#twitter1').hover(
    function() {
      $( this ).attr( "src", "images/twitter2.svg" );
    }, function() {
      $( this ).attr( "src", "images/twitter.svg" );
    }
);

$( '#instagram1').hover(
    function() {
      $( this ).attr( "src", "images/instagram2.svg" );
    }, function() {
      $( this ).attr( "src", "images/instagram.svg" );
    }
);

elChecked.addEventListener('click', function(ev){
  if(ev.target.checked){
      el.classList.add('nav_bg');
      el2.classList.add('efectReduce');
      el2.classList.remove('nav_img');
      el2.classList.add('nav_imgBig');
      el2.src="assets/close.svg";
      setTimeout(()=>{
          el2.classList.remove('efectReduce')
      },50)
  }else{
      el2.classList.add('efectReduce');
      el2.classList.remove('nav_imgBig');
      el2.classList.add('nav_img');
      el2.src="images/menu.svg";
      setTimeout(()=>{
          el2.classList.remove('efectReduce')
      },100)
      var scroll = $(window).scrollTop();
      if(parseInt(scroll) <= 0){
          el.classList.remove('nav_bg')
      }
      
  }
});