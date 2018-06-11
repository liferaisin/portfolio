// let v;

// function setup() {
//   createCanvas(800, 800);
//   v = new Vehicle(createVector(width/2, height/2));
// }

// function draw() {
//   background(255);

//   // draw circle at mouse position
//   fill(200);
//   stroke(0);
//   strokeWeight(2);
//   ellipse(mouseX, mouseY, 48, 48);

//   // update and display vehicle
//   v.seek(createVector(mouseX, mouseY));
//   v.arrive(createVector(mouseX, mouseY));
//   v.update();
//   v.display();
// }

// // define vehicle class
// class Vehicle {
//   constructor(position) {
//     // this is where we define our properites
//     this.position = position;
//     this.velocity = createVector(0,0);
//     this.acceleration = createVector(0,0);
//     // r is our size
//     this.r = 10;
//     this.color = color(255, 0, 0);

//     this.maxSpeed = 4;
//     this.maxForce = 2;
//    }

//   // seek target
//   seek(target) {
//     // note that this.position is a vector
//     // note that target is a vector
//     // find the desired vector of travel
//     // by subtracting position from target
//     let desired = target.sub(this.position);

//     // desired.normalize();

//     desired.mult(0.05);

//     // find the 'steering' vector
//     let steer = desired.sub(this.velocity);

//     this.applyForce(steer);
//   }
//   arrive(target) {
//     let desired = target.sub(this.position);
//     let d = desired.mag();
//     desired.normalize();
//     if (d<100) {
//       let m = map(d, 0, 100, 0, this.maxSpeed);
//       desired.mult(m);
//     }else{
//       desired.mult(this.maxSpeed);
//     }

//     let steer = desired.sub(this.velocity);
//     steer.limit(this.maxForce);
//     this.applyForce(steer);
//   }

//   // applyForce
//   // this is how we move the car in a given direction
//   // with a given magnitude (vector)
//   applyForce(force) {
//     this.acceleration.add(force);
//     // not that we can do more physics simulation here
//     // eg give the car mass and calculate the acceleration
//     // delta as A = F / M
//   }

//   // update
//   // "run simmulation"
//   // update properties based on changes since last update
//   update() {
//     this.velocity.add(this.acceleration);
//     // update position
//     this.position.add(this.velocity);

//     // reset acceleration
//     this.acceleration.mult(0);
//   }

//   // display
//   display() {
//     // draw a triangle rotated in the direction of velocity

//     // get the angle from velocity
//     let theta = this.velocity.heading() + HALF_PI;

//     // set drawing properties
//     fill(this.color);
//     stroke(0);
//     strokeWeight(1);

//     // move center of the canvas to the vehicle's position
//     translate(this.position.x, this.position.y);
//     // rotate the canvas to the heading we calculated above
//     rotate(theta);

//     // draw the vehicle shape
//     // can also use triangle
//     beginShape();
//     vertex(0, -this.r*2);
//     vertex(-this.r, this.r*2);
//     vertex(this.r, this.r*2);
//     endShape(CLOSE);

//     // end transforms
//     resetMatrix();
//   }
// }

document.getElementById("name").addEventListener("mousedown", explosion);

function explosion() {
    console.log("Hello World!");
} 

// 	if(event.keyCode == 40){
// 		var channels = [ "atla.gif", "iasip.gif", "bj.gif" ];
// 		channels[index];
// 		var channeldiv = document.getElementById("avatar");
// 		channeldiv.style.backgroundImage = "url('" + channels[index] + "')";
// 		index = index + 1;
// 	}
// 	else if(event.keyCode == 38){
// 		var channels = [ "atla.gif", "iasip.gif", "bj.gif" ];
// 		channels[index];
// 		var channeldiv = document.getElementById("avatar");
// 		channeldiv.style.backgroundImage = "url('" + channels[index] + "')";
// 		if(index >0){
// 			index = index -1;
// 		}else{
// 			index = channels.length - 1;
// 		}
// 	}
// });

//Make the DIV element draggagle:
dragElement(document.getElementById(("mydiv")));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}