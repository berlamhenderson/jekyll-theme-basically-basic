---
---
// twitter like
var btn_toggle= document.querySelector(".btn-toggle");

btn_toggle.addEventListener("click", function(){
  if(btn_toggle.textContent==="+") {
    this.textContent= "-";
  } else {
    this.textContent= "+";
  }
},false);