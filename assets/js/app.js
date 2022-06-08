// day.js display date
var dayNtime = $("#currentDay").text(dayjs().format('MMM D dddd, h:mmA'));
var input = $("textarea");
var tasks = [];


// according to time show different color block
$(".time-block").each(function() {
    // toNumber 24hours('H')
    var nowHour = parseInt(dayjs().format('H'));     
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

// create content
$("textarea").each(function() {

    // var noteInput = $("textarea");
    // noteInput.text = noteInput;
    // console.log(noteInput.text);

    // tasks.push(noteInput);
    // console.log(tasks);

    // $(this).on("click", "textarea", function() {
        // var isEdit = $(this).hasAttribute();

        // var noteInput = $("textarea").text();
        // tasks.push(noteInput);
        // console.log(tasks);

    // })

    // var note = $(this).text().trim();
    // var noteInput = $("textarea").addClass("description col-10").val(note);
    // $(this).replaceWith(noteInput);
})

// event.preventDefault();

// after clicking the button, the info can save into localstorage 
function saveContent() {
    tasks.push(input.val());
    localStorage.setItem("tasks", JSON.stringify(tasks));

}
// JSON.stringify(tasks)

function loadContent() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
}


var saveBtn = $(".saveBtn").on("click", saveContent);
// var contentEl = $(".time-block").on("click", "textarea", enterContent);



loadContent();