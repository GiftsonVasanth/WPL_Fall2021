window.onload = function(){

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input elements 
    // they are initially empty and hidden

    var email = document.getElementById("email");
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var span3 = document.createElement("span");
    var pwd = document.getElementById("pwd");
    var con = document.getElementById("confirm");

    span1.style.display = "none"; 
    span2.style.display = "none";
    span3.style.display = "none";//hide the span element
    email.parentNode.appendChild(span1);
    pwd.parentNode.appendChild(span2);
    con.parentNode.appendChild(span3);


    

    email.onfocus = function(){
        
        span1.style.display = "block";
        span1.innerText = "The email field should be a valid email address (abc@def.xyz)";
        email.classList.remove("error");
        

    }

    email.onblur = function(){

        span1.style.display = "none";
        email.classList.remove("error");
        
        

    }

    pwd.onfocus = function(){
        
        span2.style.display = "block";
        span2.innerText = "The password field should contain at least six characters, one uppercase letter, one number and one special character (!,@,#,$,%,^,&,*,+)";
        pwd.classList.remove("error");
        
    

    }

    pwd.onblur = function(){

        span2.style.display = "none";
        pwd.classList.remove("error");
    }

    con.onfocus = function(){
        
        span3.style.display = "block";
        span3.innerText = "Password and Confirm Password field should match";
        pwd.classList.remove("error");
        

           
     

    }

    con.onblur = function(){

        span3.style.display = "none";
        con.classList.remove("error");
        

    }
    
    

    
    var form = document.getElementById("myForm");
    form.onsubmit = function(e){

        
           

           let reg_exp_email = /^[a-zA-Z0-9]+\@[a-zA-Z]+\.[a-zA-Z]+$/;
           let reg_exp_password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/

           if (email.value == "")
           {
                 email.classList.add("error");
                 span1.style.display = "block";
                 span1.innerText = "Email ID cannot be Null";
                 e.preventDefault();
                 

           }

            else if(reg_exp_email.test(email.value)==false)
            {
               
                email.classList.add("error");
                span1.style.display = "block";
                span1.innerText = "Invalid Email ID!!!The email field should be a valid email address (abc@def.xyz)!!";
                e.preventDefault();
                
            }

            if (pwd.value == "" || con.value =="")
            {
                pwd.classList.add("error");
                con.classList.add("error");
                span2.style.display = "block";
                span2.innerText = "Password cannot be Null";
                span3.style.display = "block";
                span3.innerText = "Confirm Password cannot be Null";
                e.preventDefault();
                

           }

            else if(pwd.value != con.value){

               pwd.classList.add("error");
               con.classList.add("error");
               span3.style.display = "block";
               span3.innerText = "Password and Confirm Password should match";
               e.preventDefault();
               

           }

           else if (pwd.value.length < 6)
            {
               pwd.classList.add("error");
               con.classList.add("error");
               span3.style.display = "block";
               span3.innerText = "Password should contain minimum 6 characters";
               e.preventDefault();      
               
            }

            else if (reg_exp_password.test(pwd.value)==false)
            {
                pwd.classList.add("error");
                con.classList.add("error");
                span3.style.display = "block";
                span3.innerText = "Invalid Password!!!The password field should contain at least six characters, one uppercase letter, one number and one special character (!,@,#,$,%,^,&,*,+)";
                e.preventDefault();
                
            

            } 






            
            

        }


        


        

    }



 


