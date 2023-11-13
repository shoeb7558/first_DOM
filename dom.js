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


var newDiv = document.createElement('div');

newDiv.className = 'hello';

newDiv.id = 'hello1';

newDiv.setAttribute('title', 'Hello Div');

var newDivText = document.createTextNode('Hello World');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1)




var itemList = document.querySelector('#items');


var newItem = document.createElement('li');


newItem.textContent = 'New Item';

itemList.insertBefore(newItem, itemList.firstChild);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);


  var editBtn = document.createElement('button');

  // Add classes to del button
  editBtn.className = 'btn btn-info btn-sm float-right edit';

  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append button to li
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
      
    } else {
      item.style.display = 'none';
      
    }
  });
}
// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function (item1) {
      var itemName = item1.firstChild.textContent;
      var itemDescription = item1.firstChild.nextSibling.textContent; // Get the item1 text
      var combinedText = itemName + itemDescription;
  
      if (combinedText.toLowerCase().indexOf(text) != -1) {
        item1.style.display = 'block';
      } else {
        item1.style.display = 'none';
      }
    });
  }
  





