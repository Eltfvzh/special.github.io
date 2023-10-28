let tombol = document.getElementById("tombol");
let h1 = document.getElementById("h1");
let p = document.getElementById("p");
let link = document.getElementById("link");

tombol.addEventListener("click", function(){
    h1.innerHTML = "selamat anda kena prank!!!!!";
    p.innerHTML = "awokawok".repeat(10) + "<br>";
    link.innerHTML = "kgk kalo yang ini beneran";
    link.addEventListener("click", function(){
        alert("yahh ngarep wkwkwk..!!!!!!")
    })
    tombol.style.display = "none";
})