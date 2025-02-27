console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector('#launchButton')
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')
// B- MESSAGES
const successMessage = document.querySelector('.success')
console.log(successMessage)
const failureMessage = document.querySelector('.failure')
// console.log(launchButton, confirmButton, cancelButton, successMessage, failureMessage)

// C- MODAL
const modal = document.querySelector('.modal')
// console.log(modal)


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute
launchButton.onclick = function(){
    console.log('button clicked')
}
//  C- element.addEventListener('click', callback)
launchButton.addEventListener('click', function(e) {
    // console.log(`
    //     event type: ${e.type}
    //     event target: ${e.target.nodeName}
    // `)
})

Array.from(document.links).forEach(element => {
    element.addEventListener('click', e =>{
        console.log(`The ${e.target.textContent} not working`)
        e.preventDefault();
    })
});

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
launchButton.addEventListener('click', function(){
    modal.classList.remove('off');
    successMessage.classList.add('off');
    failureMessage.classList.add('off');
})

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
confirmButton.addEventListener('click', function(){
    modal.classList.add('off');
    successMessage.classList.remove('off');
})

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
cancelButton.addEventListener('click', function(){
    modal.classList.add('off');
    failureMessage.classList.remove('off');
})

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
document.addEventListener('keydown', function(event){
    // console.log(e.key); // key information
    if (event.key === 'Escape') {
        modal.classList.add('off');
    }
})

// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
// function openModal() {
// }

// function closeModal() {

// }

// function killReports() {

// }


// 👉 TASK 9- [STRETCH] Using the mousemove event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.