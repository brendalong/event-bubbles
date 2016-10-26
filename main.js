document.getElementById("starwars").addEventListener("click", clicked);

function clicked(event) {
    console.log("clicked", event.target, event.currentTarget);
}

function highlight(elem) {
    alert(elem.className);
}

//example demonstrating this or currentTarget
// var divs = document.getElementsByTagName('div')

// for(var i=0; i<divs.length; i++) {
//   divs[i].onclick = function(e) {
//     e = e || event;
//     //Internet Explorer has the srcElement property for it, 
//     //all W3C-compliant browsers use event.target. 
//     //The cross-browser code is usually like this:
//     var target = e.target || e.srcElement;
//     alert("target = "+target.className+", this="+this.className)
//   }
// }

