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
  user_name = localStorage.getItem("user-namekey");
  room_name = localStorage.getItem("roomname");
      function Send(){
  msg = document.getElementById("send_input").value;
  firebase.database().ref(room_name).push({
        like:0,
        user:user_name,
        message:msg
  });
  document.getElementById("send_input").value=" ";
  }
  
  function LogOut(){
        localStorage.removeItem("user-namekey");
        localStorage.removeItem("roomname");
        window.location.replace("index.html");
  } 
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
  //Start code
  console.log(firebase_message_id);
  console.log(message_data);
  
  name_user = message_data['user'];
  message= message_data['message'];
  like = message_data['like'];
  
  name_with_tag="<h4>"+name_user+"</h4>";
  message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
  like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
  row = name_with_tag+message_with_tag+like_button+span_with_tag;
  document.getElementById("output").innerHTML+=row;
  
  //End code
        } });  }); }
  getData();
  function updateLike(message_id){
        console.log("like button is clicked and msg id is- "+message_id);
        button_id = message_id;
        likes= document.getElementById(button_id).value;
        update_likes= Number(likes)+1;
        console.log(update_likes);
  
        firebase.database().ref(room_name).child(message_id).update({
              like:update_likes
        });
  }
  