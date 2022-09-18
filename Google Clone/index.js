const searchInput = document.querySelector("#sinput");
searchInput.addEventListener("keydown",function(event){
    if(event.code === "Enter"){
        search();
    }
});
function search(){
    const input = searchInput.value;
    window.location.href="https://www.google.co.in/search?q="+input+"&source=hp&ei=y_8mY6V9qeXj4Q-85blo&iflsig=AJiK0e8AAAAAYycN27FEvEMeFhKN7OwRC-cJkemea2lH&ved=0ahUKEwjljt6knZ76AhWp8jgGHbxyDg0Q4dUDCAc&uact=5&oq="+input+"&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEELEDENQCMggIABCABBCxAzIICC4QgAQQ1AIyCwgAEIAEELEDEIMBMgUIABCABDILCC4QgAQQsQMQ1AIyCAgAEIAEEMkDMggIABCABBCxAzIICC4QgAQQsQMyCwguEIAEELEDENQCOg4ILhCABBCxAxCDARDUAjoOCC4QgAQQsQMQxwEQ0QM6CggAELEDEIMBEAo6BQguEIAEOgsILhCABBCxAxCDAToICAAQsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOgsILhCABBDHARCvAVAAWMkGYMMIaABwAHgAgAHYAYgBvwaSAQUwLjQuMZgBAKABAQ&sclient=gws-wiz"
}