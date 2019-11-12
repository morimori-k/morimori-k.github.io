'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',() => {
    const n = Math.floor(Math.random() *5);
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
        case 3:
          btn.textContent ='もう一度';
          break;
        case 4:
          btn.textContent ='残念';
          break;
      }
  });
}