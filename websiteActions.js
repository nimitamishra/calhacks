// var hoursContainer = document.querySelector('.hours')
// var minutesContainer = document.querySelector('.minutes')
// var secondsContainer = document.querySelector('.seconds')
// var tickElements = Array.from(document.querySelectorAll('.tick'))

// var last = new Date(0)
// last.setUTCHours(-1)

// var tickState = true

// function updateTime () {
//   var now = new Date

//   var lastHours = last.getHours().toString()
//   var nowHours = now.getHours().toString()
//   if (lastHours !== nowHours) {
//     updateContainer(hoursContainer, nowHours)
//   }

//   var lastMinutes = last.getMinutes().toString()
//   var nowMinutes = now.getMinutes().toString()
//   if (lastMinutes !== nowMinutes) {
//     updateContainer(minutesContainer, nowMinutes)
//   }

// //   var lastSeconds = last.getSeconds().toString()
// //   var nowSeconds = now.getSeconds().toString()
// //   if (lastSeconds !== nowSeconds) {
// //     //tick()
// //     updateContainer(secondsContainer, nowSeconds)
// //   }

//   last = now
// }

// function tick () {
//   tickElements.forEach(t => t.classList.toggle('tick-hidden'))
// }

// function updateContainer (container, newTime) {
//   var time = newTime.split('')

//   if (time.length === 1) {
//     time.unshift('0')
//   }


//   var first = container.firstElementChild
//   if (first.lastElementChild.textContent !== time[0]) {
//     updateNumber(first, time[0])
//   }

//   var last = container.lastElementChild
//   if (last.lastElementChild.textContent !== time[1]) {
//     updateNumber(last, time[1])
//   }
// }

// function updateNumber (element, number) {
//   //element.lastElementChild.textContent = number
//   var second = element.lastElementChild.cloneNode(true)
//   second.textContent = number

//   element.appendChild(second)
//   element.classList.add('move')

//   setTimeout(function () {
//     element.classList.remove('move')
//   }, 990)
//   setTimeout(function () {
//     element.removeChild(element.firstElementChild)
//   }, 990)
// }

// setInterval(updateTime, 100)
// document.getElementById("addFriends").addEventListener("click", changePage, false);
// function changePage(){
//     location.src = "connectQuestions.html";
// }


var dict = {};


document.getElementById("addFriends").onclick = function () {
    console.log("addFriends clicked");
    window.location.replace = "connectQuestions.html";
    console.log(window.location);
}
//yay okay, so this works for making the pages change
document.onload = console.log(window.location);
document.getElementById("enterName").addEventListener(click, () => {
    console.log("enterName clicked");
    //adding names to dictionary as keys
    let name = document.getElementById("name").value;
    dict[name] = [];
    console.log("dict[name] created");
}, false);

