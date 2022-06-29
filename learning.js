const greeting=("welcome Nishi")
console.log(greeting)

const time= new Date().getHours();

function greet(){
    
    let greeting;
    if (time < 10) {
        greeting = " welcome Good morning have a good day! "; 
      } else if (time < 20) {
        greeting = " welcome Goodafternoon have a good day!";
      } else {
        greeting = " welcome Good evening have a good day!";
      }
      document.getElementById("content").innerHTML = greeting 
}  
  



      function changebackgroundcolor(){

   document.body.style.backgroundColor = "lightblue"

      }

      function myfunction(){

        document.querySelector("body").style.background="pink"
      
      }


      function mychange(){
        document.body.style.background="green"
      }

        function back(){

               window.location=("myform.html")
        }
      
  



      
         
     function alertheader(){
    alert("welcome to login form")
    console.log("welcome to login form")

}

function validatename(){

    

}






    


