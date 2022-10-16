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


// console.log("test");
document.onload = console.log(window.location);
let contacts = {};
let contact = {};
if (window.location == "http://127.0.0.1:5500/homePage.html") {
    document.getElementById('viewContacts').onclick = function () {
        url_redirect('contactsDisplay.html');
    }
    document.getElementById("addFriends").onclick = function () {
        url_redirect("connectQuestions.html");
        console.log("addFriends clicked");
        console.log(window.location);
    }
}

//yay okay, so this works for making the pages change

if (window.location == "http://127.0.0.1:5500/connectQuestions.html") {
    document.getElementById("enterName").onclick = function () {
        console.log("enterName clicked");
        var person_name = document.getElementById("name").value;
        console.log(person_name);
        contact.name = person_name;
        console.log(typeof(person_name));
        console.log(contact);
        url_redirect("frequency.html");
        //adding names to dictionary as keys
        // let person_name = document.getElementById("name").value;
        // document.writeln("The name entered was " + name);
    }
    
}

if (window.location == "http://127.0.0.1:5500/frequency.html") {
    document.getElementById("op1").onclick = function () {
        console.log("redirect to info.html");
        url_redirect("info.html");
    }
    document.getElementById("op2").onclick = function () {
        console.log("redirect to info.html");
        url_redirect("info.html");
    }
    document.getElementById("op3").onclick = function () {
        console.log("redirect to info.html");
        url_redirect("info.html");
    }
}


if (window.location == "http://127.0.0.1:5500/info.html") {
    document.getElementById('submitButtonContactInfo').onclick = function () {
        console.log("clicked");
        var contactFreq = document.getElementById('option1').value;
        var phoneNum = document.getElementById('number').value;
        var email = document.getElementById('email').value;
        var insta = document.getElementById('social-insta').value;
        var notes = document.getElementById('notes').value
        contact['contactFreq'] = contactFreq;
        contact['phoneNum'] = phoneNum;
        contact['email'] = email;
        contact['insta'] = insta;
        contact['notes'] = notes;
        console.log(contact);
        contacts.person = contact;
        url_redirect('homePage.html');
        console.log(contacts);
        //we want to set the info in the text boxes to their resepctive info for the contact
    }
}

if (window.location == "http://127.0.0.1:5500/contactsDisplay.html") {
    for(person in contacts) {
        console.log("hfsdoayarrrrr");
        console.log(person.name());
        // for (var i in person) {
        //     document.getElementById('displayContacts').innerHTML += person[i];
        // }
        // console.log(person);
        // document.write(person['name']);
        // document.write(person['contactFreq']);
        // document.write(person['phoneNum']);
        // document.write(person['insta']);
        // document.write(person['notes']);
    }
}


function url_redirect(url){
    var X = setTimeout(function(){
        window.location.replace(url);
        return true;
    },300);

    if( window.location = url ){
        clearTimeout(X);
        return true;
    } else {
        if( window.location.href = url ){
            clearTimeout(X);
            return true;
        }else{
            clearTimeout(X);
            window.location.replace(url);
            return true;
        }
    }
    return false;
};