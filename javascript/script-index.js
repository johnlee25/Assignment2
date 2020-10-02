
var myPix =[["photos/brother.jpg","Jim", "brother"],["photos/grandchild1.jpg","James", "grandchild1"],["photos/grandchild2.jpg","Jacob","grandchild2"],["photos/neice1.jpg","Janna","neice1"],["photos/neice3.jpg","Joan","neice3"],["photos/neice2.jpg","Jane","neice2"],["photos/nephew1.jpg","John","nephew1"],["photos/nephew2.jpg","Jax","nephew2"],["photos/sister.jpg","Jessica","sister"]];

function choosePic() {
     var img = "<img id=\'pic\' src=\'";
     var randomIndex = Math.floor(Math.random() * myPix.length);
     img += myPix[randomIndex][0];
     img += "\' alt=\'";
     img += myPix[randomIndex][2];
     img += "\'/>"
     return img;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("pic");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
//function addQuestion{

//}

//function hoverImg{
    
//}

//function clickImg{
    
//}