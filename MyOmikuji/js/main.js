'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',() => {
    const n = Math.floor(Math.random() * 3);
    btn.textContent = n;

    switch (n) {
      case 0:
        btn.textContent ='当たり';
        break;
      case 1:
        btn.textContent ='ハズレ';
        break;
      case 2:
        btn.textContent ='ハズレ';
        break;
      }
  });
}