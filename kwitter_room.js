

    firebase.initializeApp(firebaseConfig);
    


UserName = localStorage.getItem("user-namekey");
document.getElementById("user_name").innerHTML="Welcome"+UserName+"!";


function Addroom(){


RoomName = document.getElementById("team_namein").value;

firebase.database().ref("/").child("RoomName").update({
      purpose:"testing firebase"
});

}

