var btn = document.querySelector("button");
var target = document.querySelector(".outside");
btn.addEventListener("click", ()=> {
    var pre = parseInt(target.style.left);
    target.style.left = pre + 200 + "px";
});