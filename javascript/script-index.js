
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


//function addQuestion{

//}

//function hoverImg{
    
//}

//function clickImg{
    
//}