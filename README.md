# Work Day Scheduler
## Table of contents

- [Overview](#overview)
  - [Purpose](#purpose)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Purpose
- Creating an app for a daily planner to add important events in a busy work day, that's can manage time effectively.

### The challenge

Users should be able to:

- enter any events and text in every time block.
- save text when clicking the save button.
- refresh the webpage and the event still displays in every time block.


### Screenshot

![](./assets/images/Work%20Day%20Scheduler%20-%201127.0.0.1.png)
![](./assets/images/Work%20Day%20Scheduler%20-%202127.0.0.1.png)

### Links

- Solution URL: [https://github.com/YangLongWang/Bootcamp-Challenge-5-Work-Day-Scheduler](https://github.com/YangLongWang/Bootcamp-Challenge-5-Work-Day-Scheduler)
- Live Site URL: [https://yanglongwang.github.io/Bootcamp-Challenge-5-Work-Day-Scheduler/](https://yanglongwang.github.io/Bootcamp-Challenge-5-Work-Day-Scheduler/)

## My process

### Build with

- HTML-BOOTSTRAP
- CSS
- JQUERY

### What I learned

- According to the bootstrap document to set HTML format.
- According to the Jquery document try any methods.
- use day.js to replace moment.js

To see how I add code snippets, see below:

```Javascript
var dayNtime = $("#currentDay").text(dayjs().format('MMM D dddd, h:mmA'));

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
```
```HTML
<div class="row time-block" data-hour="9">
    <div class="hour col-1 pt-1">9AM</div>
    <textarea class="description col-10" data-text-id="9"></textarea>
    <div class="saveBtn col-1">
        <i class="fa-solid fa-floppy-disk"></i>
    </div>   
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.2/dayjs.min.js"></script>
```
## Author

- Github - [Longyang Wang](https://github.com/YangLongWang)