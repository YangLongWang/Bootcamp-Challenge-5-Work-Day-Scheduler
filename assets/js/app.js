// day.js display date
var dayNtime = $("#currentDay").text(dayjs().format('MMM D dddd, h:mmA'));

// according to time show different color block
$(".time-block").each(function() {
    // toNumber 24hours('H')
    var nowHour = parseInt(dayjs().format('H'));     
    // toNumber time-block
    var timeBlock = parseInt($(this).attr("data-hour")); 
    if (timeBlock > nowHour) { 
        // future show green
        $(this).toggleClass("future");

    } else if (timeBlock < nowHour) { 
        // past show gray
        $(this).toggleClass("past");

    } else { 
        // present show red
        $(this).toggleClass("present");

    }
});

// after clicking the button, the info can save into localstorage 
var saveBtn = $(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("data-hour");
    var input = $(this).siblings(".description").val();
    
    if (input) {
        alert("The text is saved!");
    }
    
    localStorage.setItem(time, input);
});

// load info
function loadContent() {
    $(".time-block").each(function() {
        var text = $(this).attr("data-hour");
        var load = localStorage.getItem(text);   
        $(this).children(".description").val(load);     
    })
}

loadContent();