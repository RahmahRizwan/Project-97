var firebaseConfig = {
       apiKey: "AIzaSyBShZzysN1aSSHiifnWZeH1NGBNCvPvd_Q",
       authDomain: "let-chat-web-app-d1084.firebaseapp.com",
       databaseURL: "https://let-chat-web-app-d1084-default-rtdb.firebaseio.com",
       projectId: "let-chat-web-app-d1084",
       storageBucket: "let-chat-web-app-d1084.appspot.com",
       messagingSenderId: "1051789243350",
       appId: "1:1051789243350:web:16f40f8245573347036a77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+" ! ";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name -" + Room_name);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }

