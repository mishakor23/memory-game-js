fetch('http://kde.link/test/get_field_size.php')
  .then(response => {
    return response.json();
  }).then(data => getData(data))
  .catch(() => console.log('Can\'t get response'));

let picturesLinks = [
  'https://kde.link/test/0.png',
  'https://kde.link/test/1.png',
  'https://kde.link/test/2.png',
  'https://kde.link/test/3.png',
  'https://kde.link/test/4.png',
  'https://kde.link/test/5.png',
  'https://kde.link/test/6.png',
  'https://kde.link/test/7.png',
  'https://kde.link/test/8.png',
  'https://kde.link/test/9.png'
];

const table = document.getElementById('gameTable');


function getData(data){
  console.log(data);
  let tableSize = data.width * data.height;
  console.log(tableSize);
  return tableSize;
}

function createCard (numberOfCards) {
  let card = document.createElement('div');
  let img = document.createElement('img');
  for(let i = 0; i < numberOfCards; i++){
    card.className = 'card';
    img.src = picturesLinks[0];
    card.appendChild(img);
    table.appendChild(card);
  }
}

createCard(5)
