
function changepicture1(){
    document.getElementById("tree1").src="tree3.jpeg"
}

function changepicture2(){
    document.getElementById("tree2").src="tree.jpg"
}


var count = 0;
var imagesarray = ["tree2.jpg",
    "tree3.jpeg",
    "https://images.pexels.com/photos/923167/pexels-photo-923167.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/51329/virginia-live-oak-southern-live-oak-oak-tree-tree-branches-51329.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/589841/pexels-photo-589841.jpeg?auto=compress&cs=tinysrgb&w=600"];
    var reasonsarray = ["Reason:Trees provide oxygen and limit carbon in the atmosphere",
    "Reason:They reduce air pollution, provide food and shelter for wildlife","Reason:Minimise erosion and maintain healthy soil, increase rainfall","Reason:Trees are called the lungs of earth",
    "Reason:Trees give us fruits and vegetables to eat"]


    function nextimage(){
   document.getElementById("tree1").src = imagesarray[count]
  document.getElementById("p1").innerHTML = reasonsarray[count]
   count = count+1
   if (count == 4) {
    count = 0
    }
    document.getElementById("A1").play()
}

