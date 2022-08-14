var form = document.getElementById('form-add-items').addEventListener('submit', addItem);
var itemList = document.getElementById('list');
var filter = document.getElementById('filter');

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e) {
  e.preventDefault();

  var newItem = document.getElementById('item-input').value;
  var li = document.createElement('li');

  li.appendChild(document.createTextNode(newItem));
  li.className = 'list-item';

  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-button';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);

  itemList.appendChild(li);

  document.getElementById('item-input').value = "";
  console.log(newItem);
}

function removeItem(e) {
  if (e.target.className == "delete-button") {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li); 
    }
  }
}

function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var items = document.querySelectorAll('li');
  var arrayOfItems = Array.from(items).forEach(function(item){
    var itemContent = item.textContent;
    if (itemContent.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }

});

}


