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

    var timeTracker = function() {
        //get the current time 
        var nowTime = moment().hour();
        //loop over class time block 
        $(".time-block").each(function(){
            var blockTime = $(this).attr("id").split("hour")[1];
            var hour = parseInt(blockTime);
            console.log(hour);
            console.log(nowTime);
             //past 
            if (hour < nowTime){
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            //present
            if (hour === nowTime){
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
                
            }
            //future 
            if (hour > nowTime){
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
                
            }

         
        })
        
        
    }
    //check the time and add the classes for background indicators
    // as the day goes by the List will update background colors 
    // get items from local storage 
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    
    timeTracker();
})


