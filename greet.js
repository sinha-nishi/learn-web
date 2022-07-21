const greeting=("welcome Nishi")
console.log(greeting)

const time= new Date().getHours();

function greet(){
    
    let greeting;
    if (time < 10) {
        greeting = " welcome Good morning have a good day!" 
      } else if (time < 18) {
        greeting = " welcome Goodafternoon have a good day!"
      } else {
        greeting = " welcome Good evening have a good day!"
      }
      document.getElementById("content").innerHTML = greeting 
      document.getElementById("greetme").innerHTML.style.display="block"
         document.getElementById("btn").innerHTML.style.display="none"
}  
  
document.ge


      function changebackgroundcolor(){

   document.body.style.backgroundColor = "pink"

      }

      function myfunction(){

        document.querySelector("body").style.background="orange"
      
      }


      function mychange(){
        document.body.style.background="lightgreen"
      }


      function alertheader(){
        alert("welcome")
        console.log("welcome")
      }


      function back(){

        window.location=("greet%20form.html")
 }


/* function showmessage(){
         document.getElementById("greetme").innerHTML.style.display="block"
         document.getElementById("btn").innerHTML.style.displat="none"

 }*/