const greeting = "welcome Nishi";
console.log(greeting);

const time = new Date().getHours();

function greet() {
  let greeting;
  if (time < 10) {
    greeting = " welcome Good morning have a good day!";
  } else if (time < 18) {
    greeting = " welcome Goodafternoon have a good day!";
  } else {
    greeting = " welcome Good evening have a good day!";
  }
  document.getElementById("contents").innerHTML = greeting;
  document.getElementById("greetme").innerHTML.style.display = "block";
  document.getElementById("btn").innerHTML.style.display = "none";
}

document.ge;

function changebackgroundcolor() {
  document.body.style.backgroundColor = "pink";
}

function myfunction() {
  document.querySelector("body").style.background = "orange";
}

function mychange() {
  document.body.style.background = "lightgreen";
}

function alertheader() {
  alert("welcome");
  console.log("welcome");
}

function back() {
  window.location = "greet%20form.html";
}

function GreetTime() {
  console.log("please reply me , how are you");
}

function GreetMyBach() {
  console.log(
    "kese hai aap , you miss me , bht din ho jata hai ab baat kiye hue , but koi nhi , aap mere saath to hai hamesha"
  );
  alert(
    "hamesha yaad krta hun aapko , sochta hun , ki baat krun , dekhun , bss lgta hai , ki mera bacha ko main yaad aata hounga na,"
  );
  console.log(
    "mere ko to nhi bhoolenge honge na , kbhi na kisi moment pr to yaad krte hounge na , or bhi bht kuch , lgta hau , dur to nhi jayenge na mere se"
  );
}

function back() {
  window.location = "! L*^e Y@u";
}

function showmessage() {
  document.getElementById("greetme").innerHTML.style.display = "block";
  document.getElementById("btn").innerHTML.style.displat = "none";
}
