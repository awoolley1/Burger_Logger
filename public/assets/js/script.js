// link to main handlebars 
// + add event listener for button here
//ajax call to the put route that I create

document.addEventListener("DOMContentLoaded", (event) => {
    if (event) {
      console.info("DOM loaded");
    } 

  // UPDATE
   // const changeToDevouredBtn = document.querySelectorAll(".change-devoured"); 


  // CREATE
  const createBurgerBtn = document.getElementById('create-form');

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', (e) => {
      e.preventDefault();

      const newBurger = {
        name: document.getElementById('ca').value.trim(),
      };

 
      fetch('/api/burgers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },


        body: JSON.stringify(newBurger),
      }).then(() => {
  
        document.getElementById('ca').value = '';

        console.log('Created a new Burger!');
        location.reload();
      });
    });
  }

});


