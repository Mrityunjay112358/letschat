var firebaseConfig = {
    apiKey: "AIzaSyD5PuIqQ_Fa1mmQu07MI1VAZhf_qTV6Auk",
    authDomain: "lets-chat-1a3af.firebaseapp.com",
    databaseURL: "https://lets-chat-1a3af-default-rtdb.firebaseio.com",
    projectId: "lets-chat-1a3af",
    storageBucket: "lets-chat-1a3af.appspot.com",
    messagingSenderId: "693213973606",
    appId: "1:693213973606:web:d83a326788176e79fe71a7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
     


  UserName = localStorage.getItem("user-namekey");
  document.getElementById("user_name").innerHTML="Welcome "+UserName+"!";
  
  
  function Addroom(){
  RoomName = document.getElementById("team_namein").value;
  firebase.database().ref("/").child(RoomName).update({
        purpose:"testing firebase"
  
  });
  localStorage.setItem("roomname",RoomName);
        window.location="kwitter_page.html";
  }
  
  function getData() 
      {firebase.database().ref("/").on('value', function(snapshot) 
      {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
        Room_names = childKey;
  console.log("Room Name = "+Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)'>#"+Room_names+"</div><hr>"
  document.getElementById("output").innerHTML += row;
  });});}
  
  
  getData();
  
  function redirecttoRoomName(name1){
    console.log(name1);
    localStorage.setItem("roomname",name1);
    window.location = "kwitter_page.html";
    
  }
  
  function LogOut(){
    localStorage.removeItem("user-namekey");
    localStorage.removeItem("roomname");
    window.location="index.html";
  }