let input = document.querySelector(".input-text");
let increase = document.querySelector(".rgt-btn");
let decrease = document.querySelector(".lft-btn");

let count = 0;
input.value = count;

increase.addEventListener("click", function () {
    count++;
    input.value = count;
    console.log(count);
});

decrease.addEventListener("click", function () {
    if (count > 0) {
        count--;
        input.value = count;
        console.log(count);
    }
    else {
        input.value = "0"
    }
})
