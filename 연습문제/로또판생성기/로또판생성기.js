const createBtn = document.querySelector('#create');
const resetBtn = document.querySelector('#reset');
const printBtn = document.querySelector('#print');
const btnContainer = document.querySelector('.btnContainer');
const numberDiv = document.querySelector('.numberDiv');
const display = document.querySelector('.display');

createBtn.addEventListener('click', () => {
  if (btnContainer.classList.contains('hidden')) {
    btnContainer.classList.remove('hidden');
    numberDiv.classList.remove('hidden');
    createBtn.classList.add('hidden');
  } 
});

printBtn.addEventListener('click', () => {});

resetBtn.addEventListener('click', () => {});
