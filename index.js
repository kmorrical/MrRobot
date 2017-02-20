alert("OUR DEMOCRACY HAS BEEN HACKED!");

var tv =prompt("What is your favorite tv show?");
 if (tv == "Mr. Robot" || tv == "mr robot" || tv == "Mr Robot") {
 	document.getElementById("outputMessage").innerHTML =
       ('<img src="http://67.media.tumblr.com/29d214c2e1ce742744baf7850b32f9f9/tumblr_oeuphu4EEI1sgsvzwo1_400.gif">'+ "    " + "Correct! Join fsociety now.");
    document.getElementById('myHeader').style.backgroundImage = "url('https://media.giphy.com/media/cNCer0xJRfjlC/giphy.gif')";

   
     
 }
 else {
document.getElementById("outputMessage").innerHTML =
        ('<img src="https://66.media.tumblr.com/ecd70898bdcc4d924f523e004bb50d29/tumblr_oe0pqs6UlQ1v834ifo2_500.gif">' + "    " + "WRONG. You might as well join E-Corp");

 document.getElementById("myHeader").innerHTML= ('<img src="http://i.imgur.com/wUerxjQ.png">');
 document.getElementById('myBody').style.backgroundImage = "url('https://media.giphy.com/media/SSpDSdmlZZmP6/giphy.gif')";

}