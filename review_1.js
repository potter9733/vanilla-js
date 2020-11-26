const h2 = document.querySelector('h2');
const body = document.querySelector('body');
const color = ['thistle', 'turquoise', 'teal', 'red'];

const superEventHandler = {
    handleResize: function() {
        h2.style.color = color[0];
        h2.innerHTML = 'You just resized!';
    },
    handleMouseover: function() {
        h2.style.color = color[1];
        h2.innerHTML = 'The mouse is here!'
    },
    handleMouseout: function() {
        h2.style.color = color[2];
        h2.innerHTML = 'The mouse is gone!'     
    },
    handleContextmenu: function () {
        h2.style.color = color[3];
        h2.innerHTML = 'That was a right click!'
    }
}

h2.addEventListener('mouseover', superEventHandler.handleMouseover);
h2.addEventListener('mouseout', superEventHandler.handleMouseout);
window.addEventListener('contextmenu', superEventHandler.handleContextmenu);
window.addEventListener('resize', superEventHandler.handleResize);