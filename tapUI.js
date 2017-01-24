

function sectionRefresh(obj){
  var sectionElement = document.querySelector(".eleDisplayShow");
  var nameElement = sectionElement.querySelector(".myName");
  var descElement = sectionElement.querySelector(".myDesc");

    nameElement.innerHTML = obj.title;
    descElement.innerHTML = obj.body;
}

function removeSelect(obj){
  var classes = obj.className.split(" ");
  var changeClass = "";
  classes.forEach(function(element){
    if(element !== "selectedTab")
      changeClass += element + " ";
  });
  obj.className = changeClass;
}

function tabAjax(url){
  //
  var req = new XMLHttpRequest();
  //
  req.addEventListener("load", function() {
    sectionRefresh(JSON.parse(this.responseText));
  });
  req.open("GET", url);
  req.send();
}

document.querySelectorAll(".tab").forEach(function(element){
  element.addEventListener("click",function(){
    removeSelect(document.querySelector(".selectedTab"));
    this.className += " selectedTab";

    tabAjax(this.getAttribute("tap-url"));
  });
});
