/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];



/*Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
*/

  function createMenu(menuInfo){
  const newMenu = document.createElement('div')
  const unordedList = document.createElement('ul')
  


/* The function takes an array as its only argument.*/
newMenu.appendChild(unordedList);



/*Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>*/

  menuInfo.forEach(element => {
    const listItem = document.createElement('li');
    listItem.textContent = element;
    unordedList.appendChild(listItem);
  });



/*Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.*/

const menuButton = document.querySelector('.menu-button');


/*Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).*/

newMenu.classList.add('menu');
menuButton.addEventListener('click', () => {
newMenu.classList.toggle('menu--open');
});



/*Step 5: return the menu component.*/

return newMenu;

}


/*Step 6: add the menu component to the DOM.*/
const newHeader = document.querySelector('.header');
newHeader.appendChild(createMenu(menuItems));

