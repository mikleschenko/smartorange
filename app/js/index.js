'use strict';

let open = document.getElementById('open-btn'),
    close = document.getElementById('close-btn'),
    modal = document.getElementById('modal');

close.addEventListener('click', function () {
    modal.classList.toggle("closed");
});

open.addEventListener('click', function () {
    modal.classList.toggle("closed");
});
