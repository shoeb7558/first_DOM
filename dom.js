
 document.addEventListener('DOMContentLoaded', function() {
 
 var form = document.getElementById('addForm');
  var itemList = document.getElementById('items');
  var filter = document.getElementById('filter');

  // Form submit event
  form.addEventListener('submit', addItem);
  // Delete event
  itemList.addEventListener('click', removeItem);
  // Filter event
  filter.addEventListener('keyup', filterItems);

  function addItem(e) {
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var newItem1 = document.getElementById('email').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItem1));

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-info btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

    itemList.appendChild(li);

    //addToLocalStorage(newItem, newItem1);
    addToLocalStorageAndCrudCrud(newItem, newItem1);
    fetchAndRenderItems();

    // Reset the form
    form.reset();
  }

  function removeItem(e) {
    if (e.target.classList.contains('delete')) {
      if (confirm('Are You Sure?')) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }

  function filterItems(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function (item1) {
      var itemName = item1.firstChild.textContent;
      var itemDescription = item1.firstChild.nextSibling.textContent;
      var combinedText = itemName + itemDescription;

      if (combinedText.toLowerCase().indexOf(text) != -1) {
        item1.style.display = 'block';
      } else {
        item1.style.display = 'none';
      }
    });
  }

  //function addToLocalStorage(name, email) {
  //  const user = {
  //    name: name,
  //    email: email
  //  };

  //  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
   // existingUsers.push(user);
  //  localStorage.setItem('users', JSON.stringify(existingUsers));
  //}

  function addToLocalStorageAndCrudCrud(name, email) {
    const user = {
      name: name,
      email: email
    };

    // Save data to CRUD CRUD API using Axios
    axios.post("https://crudcrud.com/api/8ce90492c21a452688f87ff01e5b0db8/uniqueitemlist", user)
      .then((response) => {
        console.log('Data saved to CRUD CRUD API successfully.');
        // Fetch updated data after successful save
        //fetchAndRenderItems();
      })
      .catch((error) => {
        console.log('Error :', error);
      });
  }

  function fetchAndRenderItems() {
    axios.get("https://crudcrud.com/api/8ce90492c21a452688f87ff01e5b0db8/uniqueitemlist")
      .then((response) => {
        // Clear existing items
        itemList.innerHTML = '';
        
        // Render items
        for (var i = 0; i < response.data.length; i++) {
          var item = response.data[i];
          var li = document.createElement('li');
          li.className = 'list-group-item';
          li.appendChild(document.createTextNode(item.name));
          li.appendChild(document.createTextNode(item.email));
  
          var deleteBtn = document.createElement('button');
          deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
          deleteBtn.appendChild(document.createTextNode('X'));
          li.appendChild(deleteBtn);
  
          var editBtn = document.createElement('button');
          editBtn.className = 'btn btn-info btn-sm float-right edit';
          editBtn.appendChild(document.createTextNode('Edit'));
          li.appendChild(editBtn);
  
          itemList.appendChild(li);
        }
      })
      .catch((error) => {
        console.log('Error fetching data from CRUD CRUD API:', error);
      });
  }

  function deleteItem(itemId) {
      if (confirm('Are you sure you want to delete this item?')) {
        // Get the item text for deletion
        var itemText = document.getElementById(itemId).textContent.trim();
        
        // Send a request to delete the item from the server
        axios.delete("https://crudcrud.com/api/8ce90492c21a452688f87ff01e5b0db8/uniqueitemlist/" + itemId)
          .then((response) => {
            console.log('Item deleted successfully:', itemText);
            // Fetch and render updated items after successful deletion
            fetchAndRenderItems();
          })
          .catch((error) => {
            console.log('Error deleting item:', error);
          });
      }
    }
  fetchAndRenderItems()

  
});
