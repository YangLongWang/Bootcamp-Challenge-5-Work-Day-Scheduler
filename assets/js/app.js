// day.js display date
var dayNtime = $("#currentDay").text(dayjs().format('MMM D dddd, h:mmA'));
var input = $("textarea");

var tapid = 0;

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

// create content
// $(".time-block").each(function() {

//     $(this).on("click", "textarea", function() {
//         // var isEdit = $(this).hasAttribute();

//         console.log(text);

//         // console.log(tasks);
//         console.log(this);

//     })

//     // var note = $(this).text().trim();
//     // var noteInput = $("textarea").addClass("description col-10").val(note);
//     // $(this).replaceWith(noteInput);
// })

// event.preventDefault();

// after clicking the button, the info can save into localstorage 
var saveBtn = $(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("data-hour");
    var input = $(this).siblings(".description").val();
    if (!input) {
        alert("Please enter something.");
    } else {
        alert("The text is saved!");
    }
    localStorage.setItem(time, input);
});

// function loadContent() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
// }

// var contentEl = $(".time-block").on("click", "textarea", enterContent);



// loadContent();