//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCbtDExCP_0UbW_yH0mGMxTceHBndHlVUQ",
      authDomain: "kwitter-ba42e.firebaseapp.com",
      databaseURL: "https://kwitter-ba42e-default-rtdb.firebaseio.com",
      projectId: "kwitter-ba42e",
      storageBucket: "kwitter-ba42e.appspot.com",
      messagingSenderId: "899159166045",
      appId: "1:899159166045:web:07103af84b614436d151b4"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem["user_name"];
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom()
{
      Room_name = document.getElementById("room_name").Value;
      firebase.database().ref("/").child.Room_name.update({
            purpose:"adding room name"

      });
      localStorage.setItem("room_name", room_name);
      window.location = "qwitter_page.html";
}

function getData()
 {
      firebase.database().ref("/").on('value', function(snapshot)
       {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name- " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
      
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}