let center_li_1 = document.querySelectorAll('[data-name="center_li_1"]')
let center_li_2 = document.querySelectorAll('[data-name="center_li_2"]')
let center_li_3 = document.querySelectorAll('[data-name="center_li_3"]')
let center_li_4 = document.querySelectorAll('[data-name="center_li_4"]')
let center_li_5 = document.querySelectorAll('[data-name="center_li_5"]')
let center_li_6 = document.querySelectorAll('[data-name="center_li_6"]')
function addClickListener(center_li) {
  center_li[1].addEventListener('click', () => {
    center_li[0].classList.toggle('heighter');
    center_li[1].classList.toggle('img_up');
    center_li[2].classList.toggle('block');
  });
}

let centerLiData = [
  { name: 'center_li_1', elements: null },
  { name: 'center_li_2', elements: null },
  { name: 'center_li_3', elements: null },
  { name: 'center_li_4', elements: null },
  { name: 'center_li_5', elements: null },
  { name: 'center_li_6', elements: null }
];

centerLiData.forEach(item => {
  item.elements = document.querySelectorAll(`[data-name="${item.name}"]`);
  addClickListener(item.elements);
});