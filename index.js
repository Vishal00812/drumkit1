document.querySelector('.w').addEventListener("click",function(){
    var audio =new Audio('sounds/crash.mp3')
    audio.play()
    document.querySelector('.w').style.color='Black'
 }
 );
 document.querySelector('.a').addEventListener("click",function(){
     var audio =new Audio('sounds/kick-bass.mp3')
     audio.play()
     document.querySelector('.a').animate({opacity:0.5})
  }
  );
  document.querySelector('.s').addEventListener("click",function(){
     var audio =new Audio('sounds/snare.mp3')
     audio.play()
     document.querySelector('.s').animate({opacity:0.5})
  }
  );
  document.querySelector('.d').addEventListener("click",function(){
     var audio =new Audio('sounds/tom-1.mp3')
     audio.play()
     document.querySelector('.d').animate({opacity:0.5})
  });
  document.querySelector('.j').addEventListener("click",function(){
     var audio =new Audio('sounds/tom-2.mp3')
     audio.play()
     document.querySelector('.j').animate({opacity:0.5})
  }
  );
  document.querySelector('.k').addEventListener("click",function(){
     var audio =new Audio('sounds/tom-3.mp3')
     audio.play()
     document.querySelector('.k').animate({opacity:0.5})
  }
  );
  document.querySelector('.l').addEventListener("click",function(){
     var audio =new Audio('sounds/tom-4.mp3')
     audio.play()
     document.querySelector('.l').animate({opacity:0.5})
  }
  );
 
  document.addEventListener("keypress",function(event){
   if(event.key==='w'){
    var audio =new Audio('sounds/crash.mp3')
    audio.play()}
 }
 );
 document.addEventListener("keypress",function(event){
   if(event.key==='a'){
    var audio =new Audio('sounds/kick-bass.mp3')
    audio.play()}
 }
 );
 document.addEventListener("keypress",function(event){
   if(event.key==='s'){
    var audio =new Audio('sounds/snare.mp3')
    audio.play()}
 }
 );
 document.addEventListener("keypress",function(event){
   if(event.key==='d'){
    var audio =new Audio('sounds/tom-1.mp3')
    audio.play()}
 }
 );
 document.addEventListener("keypress",function(event){
   if(event.key==='j'){
    var audio =new Audio('sounds/tom-2.mp3')
    audio.play()}
 }
 );
 document.addEventListener("keypress",function(event){
   if(event.key==='k'){
    var audio =new Audio('sounds/tom-3.mp3')
    audio.play()}
 }
 );
 document.addEventListener("keypress",function(event){
   if(event.key==='l'){
    var audio =new Audio('sounds/tom-4.mp3')
    audio.play()}
 }
 );
 
 
  