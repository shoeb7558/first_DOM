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

item[1].style.backgroundColor = 'green';

// Make the 3rd item invisible
item[2].style.display = 'none';

// Using QuerySelectorAll, change the font color to green for the 2nd item in the item list
var secondItem = document.querySelectorAll('#items .list-group-item')[1];
secondItem.style.color = 'green';

// Choose all the odd elements and make their background green using QuerySelectorAll
var oddItems = document.querySelectorAll('#items .list-group-item:nth-child(odd)');
for (var i = 0; i < oddItems.length; i++) {
    oddItems[i].style.backgroundColor = 'green';
}

