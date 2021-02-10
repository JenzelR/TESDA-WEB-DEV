//Window Methods / Objects / Properties

//Alert
alert('Bulaga!')


// Prompt
const input = prompt();
alert(input);

//Confirm
if(confirm('One is Right and one is wrong. Which one?')){
    console.log('No');
} else {
    console.log('Yes');
}

let value;

//Outter Height and Width
value = window.outerHeight;
value = window.outerWidth;

//Innder Height and Width
value = window.innerHeight;
value = window.innerWidth;

//Scroll Points
value = window.scrollY;
value = window.scrollX;

//Location Object
value = window.location;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;
value = window.location.search;

//Redirect
 window.location.href = 'https://mangakakalot.com/';

//Reload
 //window.location.reload();

//Navigation Object
value = window.navigator;
value = window.navigator.appName;
value = window.navigator.appVersion;
value = window.navigator.clipboard;
value = window.navigator.appCodeName;
value = window.navigator.userAgent;
value = window.navigator;
value = window.navigator.platform;
value = window.navigator.vendor;
value = window.navigator.languages;

console.log(value);
