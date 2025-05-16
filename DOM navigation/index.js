const element = document.getElementById("ul-1");

console.log(element.firstElementChild.textContent);


const firstElChild = element.firstElementChild;

firstElChild.style.backgroundColor = "grey";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
})




const nextElSibling = element.nextElementSibling;

nextElSibling.style.backgroundColor = "green";

const parentEl = element.parentElement;

parentEl.style.backgroundColor = "tomato";

const children = element.children;

console.log(children);

Array.from(children).forEach(child =>{
    child.style.backgroundColor = "grey";
})