const buttonAddon2 = document.getElementById('button-addon2');
const list_group = document.getElementById('list-group');
const close_btn = document.getElementById('close_btn');
const list = document.getElementById('list');
const input = document.getElementById('input');

function dynamicFun() {
  if (input.value === '') {
    Swal.fire('Please Enter your text');
  } else {
    list_group.innerHTML += `  <li id="list" class="list-group-item">
    ${input.value}
    <button
      id="close_btn"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </li>`;
  }
  input.value = '';
  saveData();
}

buttonAddon2.addEventListener('click', dynamicFun);

document.addEventListener('click', (e) => {
  let target = e.target.closest('#close_btn');
  const lli = e.target.closest('#list');
  console.log('ok');
  lli.remove();
});

document.addEventListener('keypress', (e) => {
  if (e.key == 'Enter') {
    dynamicFun();
  }
});

function saveData() {
  localStorage.setItem('data', list_group.innerHTML);
}

function showData() {
  list_group.innerHTML = localStorage.getItem('data');
}
showData();
