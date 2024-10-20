function addDish(){
    var orderInput=document.getElementById("orderinput");
    var orderlist=document.getElementById("orderlist");
    if(orderInput.value.trim()===""){
        alert("Please enter your order");
        return;
    }
    var li= document.createElement("li");
    li.innerHTML= orderInput.value + " " + '  <button onclick="editOrder(this)"> edit Dish</button>  <button onclick="delteOrder(this)">delete Dish</button> ';
    orderlist.appendChild(li);
    orderInput.value='';
    submitOrder();
};
function delteOrder(button){
    var li = button.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
};
function editOrder(dish){
    var li = dish.parentNode;
    var orderText=li.firstChild;
    var updatedDish=prompt("edit Dish", orderText.nodeValue);
    if(updatedDish!==null){
        orderText.nodeValue=updatedDish;
    }
};


function submitOrder() {
    var orderlist = document.getElementById("orderlist");
    var submitButtonContainer = document.getElementById("submitButtonContainer");

    // Check if there are Dishs in the list
    if (orderlist.children.length > 0) {
        if (!submitButtonContainer) {
            // Create a container for the submit button if it doesn't exist
            submitButtonContainer = document.createElement("div");
            submitButtonContainer.id = "submitButtonContainer";
            submitButtonContainer.innerHTML = '<button class="submit"><a href="./done.html" class="submit-link">Submit Order</a></button>';
            document.body.appendChild(submitButtonContainer);
        }
    } else {
        // Remove the submit button container if there are no Dishs
        if (submitButtonContainer) {
            submitButtonContainer.remove();
        }
    }
}

// Initial check to see if the submit button should be displayed
submitOrder();
