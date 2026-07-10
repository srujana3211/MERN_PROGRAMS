function attemptTracker()
{
    let attempts=3;
    return function()
    {
        return --attempts;
    }
}
const track=attemptTracker();
document.getElementById("btn").addEventListener("click",function(event){
    event.preventDefault();
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
   let message=document.getElementById("msg");
   let button= document.getElementById("btn");
   if(username==="")
   {
    message.textContent="Username cannot be empty";
    return;
   }
   if(password.length<6)
   {
    message.textContent="Password should be atleast 6 characters";
    return;
   }
   let remaining=track();
   if(remaining>=0)
   {
    message.textContent="wrong login! Attempts left"+remaining;
   }
   if(remaining<0)
   {
    message.textContent="Login attempts completed";
    button.disabled=true;
   }
})