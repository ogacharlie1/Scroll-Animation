// first we bring in our parameters
// first, we bring in the boxes and put them in an array or a node list
const boxes = document.querySelectorAll('.box')

// Next we start off an event when we scroll by adding an eventlistener and check the positioning of the boxes
window.addEventListener('scroll', checkBoxes)

checkBoxes()

// Here we write a function to decide at which point we want the boxes to come in to the screen when we scroll.
function checkBoxes () {
    const triggerBottom = window.innerHeight / 5 * 4

    // Here try to get the top of each boxes by using this function getBoundingClientRect().top and attaching the side you want. As i added .top at the end.
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
 
        // Next we check if top of the box is less than the trigger button. if it is add the class of show if its not, we remove the class of show. 
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
