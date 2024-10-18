function up(){
    document.querySelector("p").classList.add("bigger");
    document.querySelector("p").classList.remove("smaller");

}
function down(){
    document.querySelector("p").classList.add("smaller");
    document.querySelector("p").classList.remove("bigger");

}

document.querySelector(".big").onclick=up;
document.querySelector(".small").onclick=down;