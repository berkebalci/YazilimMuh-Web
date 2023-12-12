const baseUrl = 'http://localhost:5130';
const apiPath = '/api/lib';

const plus1 = document.querySelector('.button1');
const minus1 = document.querySelector('.button2');
const plus2 = document.querySelector('.button3');
const minus2 = document.querySelector('.button4');
const plus3 = document.querySelector('.button5');
const minus3 = document.querySelector('.button6');

function buildUrl(endpoint, kutuphaneAdi, bolumAdi) {
  return `${baseUrl}${apiPath}/${endpoint}?kutuphaneAdi=${kutuphaneAdi}&bolumAdi=${bolumAdi}`;
}

plus1.addEventListener('click', () => {
  const url = buildUrl('increaseFullness', 'talasKutuphanesi', 'sesliBolum');
  fetch(url, { method: 'PUT' })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Hata:', error));
});

minus1.addEventListener('click', () => {
  const url = buildUrl('decreaseFullness', 'talasKutuphanesi', 'sesliBolum');
  fetch(url, { method: 'PUT' })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Hata:', error));
});

plus2.addEventListener('click', () => {
  const url = buildUrl('increaseFullness', 'talasKutuphanesi', 'sessizBolum');
  fetch(url, { method: 'PUT' })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Hata:', error));
});

minus2.addEventListener('click', () => {
  const url = buildUrl('decreaseFullness', 'talasKutuphanesi', 'sessizBolum');
  fetch(url, { method: 'PUT' })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Hata:', error));
});

plus3.addEventListener('click', () => {
  const url = buildUrl('increaseFullness', 'talasKutuphanesi', 'akademikKisim');
  fetch(url, { method: 'PUT' })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Hata:', error));
});

minus3.addEventListener('click', () => {
  const url = buildUrl('decreaseFullness', 'talasKutuphanesi', 'akademikKisim');
  fetch(url, { method: 'PUT' })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Hata:', error));
});
