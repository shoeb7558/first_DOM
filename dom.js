var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

header.style.borderBottom = 'solid 3px #000'
headerTitle.style.borderBottom = 'solid 3px #000'


var item = document.getElementsByClassName('list-group-item');

item[3].style.backgroundColor = 'green';

for(i=0; i< item.length; i++){
    item[i].style.fontWeight = 'bold';

}


var items = document.getElementsByClassName('list-group-item2');
items[0].style.fontWeight = 'bold';
items[0].style.backgroundColor = 'red';

