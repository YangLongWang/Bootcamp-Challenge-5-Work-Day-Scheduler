var dayNtime = $("#currentDay").text(dayjs().format('MMM D dddd, h:mmA'));
var saveBtn = $(".saveBtn").on("click", saveContent);
var colorBlock = $("textarea");

// toNumber 24hours('H')
var nowHour = parseInt(dayjs().format('H')); 

$(".time-block").each(function() {
    // toNumber time-block
    var timeBlock = parseInt($(this).attr("id")); 
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



// event.preventDefault()




function saveContent() {
    console.log("123");

}
