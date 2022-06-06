var dayNtime = $("#currentDay").text(dayjs().format('MMM D dddd, h:mmA'));
var saveBtn = $(".saveBtn").on("click", saveContent);
var colorBlock = $("textarea");


$(".time-block").each(function() {
    var nowHour = parseInt(dayjs().format('H')); // toNumber 24hours('H')
    var timeBlock = parseInt($(this).attr("id")); // toNumber time-block
    if (timeBlock > nowHour) { // future show green
        colorBlock.addClass("future");
        colorBlock.removeClass("past");
        colorBlock.removeClass("present");
    } else if (timeBlock < nowHour) { // past show gray
        colorBlock.addClass("past");
        colorBlock.removeClass("future");
        colorBlock.removeClass("present");
    } else { // present show red
        colorBlock.addClass("present");
        colorBlock.removeClass("future");
        colorBlock.removeClass("past");
    }
});
// colorBlock.toggleClass("past");
// colorBlock.toggleClass("present");
// colorBlock.toggleClass("future");


// event.preventDefault()




function saveContent() {
    console.log("123");

}
