'use strict';

let scrollCheck = document.querySelector('.scrollCheck');

function init() {
    if (window.innerHeight === document.body.offsetHeight) {
        insertPosts();
        init();
    }
}
init();

document.addEventListener('scroll', function(event) {
    if (scrollCheck.getBoundingClientRect().top <= window.innerHeight) {
        insertPosts();
    }
});
function insertPosts() {
    let postsMarkup = '';
    for (let i = 0; i < 3; i++) {
        postsMarkup += getPostMarkup(i);
    }
    scrollCheck.insertAdjacentHTML('beforebegin', postsMarkup);
}
function getPostMarkup(counter) {
    let num = new Date().getTime() + counter;
    return `<div class="post">
        <img src="https://picsum.photos/200/300?random=${num}">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, rem veniam modi odit commodi excepturi beatae tempora soluta facilis. Tempora dolor ducimus at aliquam est.
    </div>`;
}