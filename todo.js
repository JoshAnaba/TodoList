// Create a "close" button and append it to each list item

var myList= document.getElementsByTagName("LI");

var i;

for(i = 0 ; i < myList.length ; i++){

    var span =document.createElement("SPAN");

    var txt = document.createTextNode("\u00D7");

    span.className = "close" ;

    span.appendChild(txt) ;

    myList[i].appendChild(span);

}

// click on a close button to hide the current list item

var close;

close = document.getElementsByClassName("close");

for(i = 0 ; i< close.length ; i++){

    close[i].onclick = function() {

        var div = this.parentElement ;

        div.style.display = "none";

    }
}

