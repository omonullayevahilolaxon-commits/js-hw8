let items = document.querySelectorAll(".color");
console.log(items);

items.forEach((color) => {
    color.style.background = color.getAttribute("data-color");
});

let blockColors = document.querySelectorAll("#blocks-palette .color");
let bgColors = document.querySelectorAll("#bg-palette .color");

let blocks = document.querySelectorAll(".block");

let shapes = {
    star: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    heptagon: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
    diamond: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    triangle: "polygon(50% 0%, 100% 100%, 0% 100%)",
    box: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
};

blockColors.forEach((color) => {
    color.addEventListener("click", () => {
        let newColor = color.getAttribute("data-color");
        let newShape = color.getAttribute("data-shape");

        blocks.forEach((block) => {
            block.style.background = newColor;
            block.style.clipPath = shapes[newShape];
        });
    });
});

bgColors.forEach((color) => {
    color.addEventListener("click", () => {
        document.body.style.background = color.getAttribute("data-color");
    });
});