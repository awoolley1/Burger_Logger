// link to main handlebars 
// + add event listener for button here
//ajax call to the put route that I create

document.addEventListener("DOMContentLoaded", (event) => {
    if (event) {
      console.info("DOM loaded");
    } 

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

   // UPDATE
   const changeToDevouredBtn = document.querySelectorAll(".change-devoured"); 

   if (changeToDevouredBtn) {
    changeToDevouredBtn.forEach((button) => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        var devourState = e.target.getAttribute('data-devoured');

        const newDevourState = !devourState;

        fetch(`/api/burgers/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(newDevourState),
        }).then((response) => {

          if (response.ok) {
            console.log(`changed devoured to: ${newDevourState}`);
            location.reload('/');
          } else {
            alert('something went wrong!');
          }
        });
      });
    });
  }

});


