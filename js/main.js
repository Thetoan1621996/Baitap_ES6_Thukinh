let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];
let loadGlasses = () => {
  let showKinh = "";
  for (let data of dataGlasses) {
    let value = data.src;
    let position = data.id;
    showKinh += `<div class = "col-4" onclick = "tryOn('${position}')"><img src ="${value}" width = "100%"></div>`;
  }
  document.querySelector("#vglassesList").innerHTML = showKinh;
};
loadGlasses();

window.tryOn = (srcClick) => {
  let htmlImg = "";
  let htmlText = "";
  for (let index of dataGlasses) {
    let giaTri = index.id;
    console.log(giaTri);
    if (giaTri === srcClick) {
      htmlImg = `<div id = "item"><img src ="${index.virtualImg}" width = "100%"></div>`;
      htmlText = `
            <div>
                <div class="text-top">
                    <h2 class="text-light mb-3">${index.name} - ${index.brand}(${index.color})</h2>
                    <span class="bg-danger text-light p-2" style="border-radius: 8px;">$${index.price}</span> <span class="text-success">stocking</span>    
                </div>
                <div class="text-bot pt-3">
                    <p class="text-light">${index.description}</p>
                </div>
                
            </div>`;
    }
  }
  document.querySelector("#avatar").innerHTML = htmlImg;
  document.querySelector("#glassesInfo").innerHTML = htmlText;
  document.querySelector("#glassesInfo").classList.add("d-block");
};

document.querySelector(".btn1").onclick = () => {
  document.querySelector("#item").className = "d-none";
};
document.querySelector(".btn2").onclick = () => {
  document.querySelector("#item").className = "d-block";
};
