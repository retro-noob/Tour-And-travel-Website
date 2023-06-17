
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.addEventListener("load", function() {
  const form1 = document.getElementById('oneWay');
  const Success1 = document.getElementById('post_submit1');
  const buttonBox = this.document.getElementById("buttonSet");
  form1.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form1);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      form1.style.display='none';
      Success1.style.display="block";
      buttonBox.style.display="none";
    })
  });
});

window.addEventListener("load", function() {
  const form1 = document.getElementById('roundTrip');
  const Success1 = document.getElementById('post_submit1');
  const buttonBox = this.document.getElementById("buttonSet");
  form1.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form1);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      form1.style.display='none';
      Success1.style.display="block";
      buttonBox.style.display="none";

    })
  });
});

window.addEventListener("load", function() {
  const form2 = document.getElementById('quote_form2');
  const Success2 = document.getElementById('post_submit2');
  form2.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form2);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      form2.style.display='none';
      Success2.style.display="block";
    })
  });
});

function trip(way){
  let route = parseInt(way); 
  let ow = document.getElementById("oneWay");
  let rt = document.getElementById("roundTrip");
  if(route ==1){
    rt.classList.add("hideall");
    ow.classList.remove("hideall");
  } else{
    ow.classList.add("hideall");
    rt.classList.remove("hideall");
  }
};

window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      1000
  )
});
document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});
