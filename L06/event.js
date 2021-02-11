// document.querySelector('.clear-tasks').addEventListener('click', function(){
   
//     console.log('Hello World');

// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    //console.log('clicked');
    let value;

    value = e;

    //Event target element
    value = e.target;
    value = e.target.Id;
    value = e.target.className;
    value = e.target.classList;

    //Event type
    value = e.type;

    //Timestamp
    value = e.timestamp;

    // Coords event relative to the window
    value = e.clientY
    value - e.clientX

    // Coords event relative to element

    console.log(value);
}
