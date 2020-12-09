
console.log("1")


//   // youtube example
//   // https://www.youtube.com/watch?v=lnmZkj3p8vM
//     var particles =[]
//     var SIZE_1, SIZE_2

//     window.requestAnimationFrame(animate)
    
//     function animate() {
//       particles.forEach(function(particle) {
//         particle.x+=particle.vx;
//         particle.y+=particle.vy;
//         particle.element.style.top = particle.x+"%";
//         particle.element.style.left = particle.y+"%";
//       });
//       window.requestAnimationFrame(animate);
//     };


    
//     //create starting particles
//     function reset() {
//       particles.forEach(p => p.element.remove())
//       particles =[]

//       SIZE_1 = document.getElementById('size1').value
//       SIZE_2 = document.getElementById('size2').value

//       for (i = 0; i < 150; i++) { 
//         particles.push(createParticle());
//       }
//     }

//     document.getElementById('size1').addEventListener('change', reset)
//     document.getElementById('size2').addEventListener('change', reset)
    



//     //function that creates particles
//     function createParticle(){
//       var div = document.createElement("div");
//       //div.innerHTML = "😊"
//       var depth = Math.random();
//       var size = SIZE_1/(depth+SIZE_2);
//       var blur = (1-depth)*50;
//       var opacity = depth/5;
//       var x = (Math.random()*100);
//       var y = (Math.random()*100);

//       div.style.width = size+"px";
//       div.style.height = size+"px";
//       div.className = "particle";
//       div.style.top = x+"%";
//       div.style.left = y+"%";
//       div.style.backgroundColor = "rgba(244,235,218," +opacity +")";
//       div.style.boxShadow =  "0px 0px " +blur +"px " +blur +"px rgba(244,235,218," +opacity +")";
//       console.log(size);
//       document.body.appendChild(div);
//       return{
//         element:div,
//           vx: (Math.random()-0.5)*depth*0.02, 
//           vy: (Math.random()-0.5)*depth*0.02,
//           x: x,
//           y: y
//       }
//     }







//     function multiply (x,y){
//       return (x*y);
//     }
//     console.log(multiply(2,2));


