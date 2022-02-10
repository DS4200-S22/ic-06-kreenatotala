/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
    console.log("Button 1 was clicked"); 
    document.getElementById("random_num").innerHTML = Math.floor(Math.random() * 1000);
}

function button2Clicked() {
    console.log("Button 2 was clicked");
    if (document.getElementById("circle").style.fill === "blue") {
        document.getElementById("circle").style.fill = "green";
    } else if (document.getElementById("circle").style.fill === "green") {
        document.getElementById("circle").style.fill = "blue";
    }
    
    
    
}