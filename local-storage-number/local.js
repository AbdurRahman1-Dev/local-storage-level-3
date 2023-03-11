
let num = 0;

const increase = () => {
  num++;

  localStorage.setItem("Number", num);

  document.getElementById('number').innerText = num;
}


let getNUm = localStorage.getItem("Number");
document.getElementById('number').innerText = getNUm;
