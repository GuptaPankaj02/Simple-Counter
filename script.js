let input = document.querySelector(".input-text");
let increase = document.querySelector(".rgt-btn");
let decrease = document.querySelector(".lft-btn");

let count = 0;
input.value = count;

increase.addEventListener("click", function () {
    count = count + 1;
    input.value = count;
    console.log(count);
});

decrease.addEventListener("click", function () {
    count = count - 1;
        input.value = count;
        console.log(count);
});
