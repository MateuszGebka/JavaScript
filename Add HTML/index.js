//      <h1>

// STEP 1  CREATE THE ELEMENT

const newH1 = document.createElement("h1");

// STEP 2   ADD ATRIBUTES / PROPERTIES

newH1.textContent = "Jestem nowym <h1>";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";


// STEP 3   APPEND ELEMENT TO DOM

document.body.append(newH1);  // na końcu

// document.body.prepend(newH1);    // na początku

// document.getElementById("box1").append(newH1);

// const box2 = document.getElementById("box2");

// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");

// document.body.insertBefore(newH1, boxes[1]);

document.body.removeChild(newH1);