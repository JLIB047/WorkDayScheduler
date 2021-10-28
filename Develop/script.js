//Display Date and Time 
var today = window.setInterval(function (){
    $("#currentDay").html(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'))
}, 1000);

$(document).ready(function(){
    //savebtn click listener
    $("#saveBtn").on("click", function(){
        //get nearby values of the desciption in Jquery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //save text in local storage
        localStorage.setItem(text,time);
        
        
    })

    //check the time and add the classes for background indicators
    // as the day goes by the List will update background colors 
     

    // get items from local storage 
})


