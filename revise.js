/*const greeting("goodmoring have a nice day!")


function greet(){
    
    
      document.getElementById("message").innerHTML = greeting 
    }

    greet()*/
    const time= new Date().getHours();

    function showmessagebox(){
                     document.getElementById("hello").style.display="block"
                      document.getElementById("greeting").style.display="none"

                      let greeting=  "welcome "+ document.getElementById("inputtext").value;
      if (time < 10) {
          greeting =  greeting +" Good morning have a good day! "; 
        } else if (time < 20) {
          greeting =greeting + " Goodafternoon have a good day!";
        } else {
          greeting = greeting+ " Good evening have a good day!";
        }
        document.getElementById("message").innerHTML = greeting
      }

         
      function user(){
                 
            
        
      }
    
      

      




      
      
 
    


    function greetme(){
                        document.getElementById("greeting").style.display="block"
                        document.getElementById("hello").style.display="none"
    }


    function changebackgroundcolor(){

      document.getElementById("message").style.backgroundColor = "red"
   
         }
   
         function myfunction(){
   
           document.getElementById("message").style.background="orange"
         
         }
   
   
         function mychange(){
           document.getElementById("message").style.background="yellow"
         }

         function mycolor(){
               document.getElementById("message").style.background="green"
         }
 
         function myback(){
                     document.getElementById("message").style.background="blue"

         }


        function myfav(){
                      document.getElementById("message").style.background="pink"
        }
    
         