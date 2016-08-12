/*
=======================================================

** Week 4 - Project 1 **
*** jQuery! ***

For any methods that we didn't cover, please refer to the jQuery documentation.
https://api.jquery.com/

BASIC TRACK: 1-8
ADVANCED TRACK: 9-12
=======================================================
*/

// Add your JS here.

// Question 1

$(document).ready(function(){
    
    $("#hide-para").click(function(){
    $("#hide-para").hide();
    });
    
// Question 2
    
    $(".changeColor").click(function(){
    $("ul li:nth-child(3)").css("color", "#8A2BE2");
    });
    
// Question 3
    
    $("ul li:nth-child(4)").click(function(){
    $("ul li:nth-child(4)").append(" <li>Appended text</li>");
    });
    
// Question 4
    
    $("#removeLi").click(function(){
    $("ul li:nth-child(2)").remove();
    });
    
// Question 5
    
// When the last list item is clicked, change its font size to 40px and hide all other items.
    
    $("li").last().click(function(){
    $("li").last().css("font-size","40px");
    $( "li" ).not( ":last" ).hide();
    });
    
// Question 6
    
// When clicked make 1 more of me!
    
    $(".cute").click(function(){
    $(this).clone().appendTo("#append");
    });
    
// You can also use .after instead of append or appendTo
// Used this instead of ".cute" to avoid the duplication problem
// "cache" 
// var $cute = $(".cute");
// $cute.click(function(){
   
// var copy = $(this).clone();
// $(this).after(copy);   
//});
    
// Question 7
    
// On a double-click anywhere on the page, turn this rounded rectangle into a square.
// HINT: use .dblclick() instead of .click()
   
    $("body").dblclick(function(){
    $("#makeSquare").css({"height":"300px",
                          "background-color":"red",
                          "border-radius":"0px"
                         });
    });
    

// Question 8

//<p>8. Alert the user if they click this button: <button id="dontClick">Don't Click Here !</button></p>


    $("#dontClick").click(function(){

    alert("Please don't click me!");
        
        });

    
// Question 9
    
//    <p>9. On click, change the page background to match these beautiful swatches.</p>
//        <div class="swatches">
//        <div class="black swatch"></div>
//        <div class="wood swatch"></div>
//        <div class="chaos swatch"></div>
//        <div class="restore swatch"></div>
      
    $("#blackid").click(function(){

    $("body").css("background-color","#000");
        
        });
    
    $("#woodid").click(function(){

    $("body").addClass('wood');
                
        });
    
    $("#chaosid").click(function(){

    $("body").addClass('chaos');
                
        });
    
// Question 10
    
//<p>10. When your mouse is over the box, turn it red.<br>

    $("#hover").hover(function(){

    $("#hover").css("background-color","red");
    
        $("#hover").click(function(){

        $("#hover").addClass("green");
    
            $("#hover").click(function(){

                $("#hover").removeClass("green");
        
                });
        
            });
        
        });
    
// Question 11
    
//11. Add the class 'green' when clicked
    
// Answered above    
    
// Question 12
    
//12. Remove the class 'green' when clicked again.
    
// Answered above

});





