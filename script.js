'use strict';

let modals = document.querySelectorAll('.show-modal');


for (let i = 0; i < modals.length; i++) {
  document.querySelectorAll('.show-modal')[i].addEventListener('click', function () {
      document.querySelector('.modal').classList.remove('hidden');
      document.querySelector('.overlay').classList.remove('hidden');

        document.querySelector('.close-modal').addEventListener('click', function () {
          document.querySelector('.modal').classList.add('hidden');
          document.querySelector('.overlay').classList.add('hidden');
        });

       document.addEventListener("keydown",function (e) {
          if(e.key === "Escape"){
            document.querySelector('.modal').classList.add('hidden');
            document.querySelector('.overlay').classList.add('hidden');
          }
        })
      
    });
}

