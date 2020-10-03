var myPix = [["photos/brother.jpg", "Jim", "Brother"], ["photos/grandchild1.jpg", "James", "Grandchild 1"], ["photos/grandchild2.jpg", "Jacob", "Grandchild 2"], ["photos/neice1.jpg", "Janna", "Neice 1"], ["photos/neice2.jpg", "Joan", "Neice 2"], ["photos/neice3.jpg", "Jane", "Neice 3"], ["photos/nephew1.jpg", "John", "Nephew 1"], ["photos/nephew2.jpg", "Jax", "Nephew 2"], ["photos/sister.jpg", "Jessica", "Sister"]];
var score = 0;
var counter = 0;
var answ="";

function choosePic() {
    var img = "<img id=\'pic\' src=\'";
    img += myPix[counter][0];
    img += "\' alt=\'";
    img += myPix[counter][2];
    img += "\'/>"
    return img;
}



function addQuestion() {
    answ = document.getElementById("fname").value;
    if (answ.toLowerCase() == myPix[counter][1].toLowerCase()) {
        score++;
        counter++;
        document.getElementById("etrname").innerHTML="CORRECT!!!";
        document.getElementById("fname").value="";
        document.getElementById("nxtbtn").style.width="100%";
        document.getElementById("nxtbtn").style.margin="10px 0%";
    }
    else {
        document.getElementById("etrname").innerHTML="Correct name was "+myPix[counter][1];
        document.getElementById("fname").value="";
        counter++;
        document.getElementById("nxtbtn").style.width="50%";
        document.getElementById("nxtbtn").style.margin="10px 25%";
    }
    document.getElementById("fname").style.display="none";
    document.getElementById("submitbtn").style.display="none";
    document.getElementById("nxtbtn").style.display="block";
}

function nxtQuestion() {
    if (counter < 9) {
        document.getElementById("etrname").innerHTML="Enter Name Here";
        document.getElementById("fname").style.display="inline-block";
        document.getElementById("submitbtn").style.display="block";
        document.getElementById("nxtbtn").style.display="none";
        document.getElementById("pic").src = myPix[counter][0];
        document.getElementById("pic").alt = myPix[counter][2];
    }
    else{
        document.getElementById("pic").style.display="none";
        document.getElementById("hint").style.display="none";
        document.getElementById("etrname").style.display="none";
        document.getElementById("nxtbtn").style.display="none";
        document.getElementById("finalscr").style.display="block"
        document.getElementById("finalscr").innerHTML="Final Score "+score+"/"+counter;
        document.getElementById("resetbtn").style.display="block";
    }
}

function resetQuestion() {
    counter=0;
    score=0;
    document.getElementById("finalscr").style.display="none";
    document.getElementById("pic").style.display="block";
    document.getElementById("pic").src = myPix[counter][0];
    document.getElementById("pic").alt = myPix[counter][2];
    document.getElementById("hint").style.display="block";
    document.getElementById("etrname").style.display="inline-block";
    document.getElementById("etrname").innerHTML="Enter Name Here";
    document.getElementById("fname").style.display="inline-block";
    document.getElementById("submitbtn").style.display="block";
    document.getElementById("resetbtn").style.display="none";
}
