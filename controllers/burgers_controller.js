const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// router.post('/api/cats', (req, res) => {
//   cat.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], (result) => {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put('/api/cats/:id', (req, res) => {
//   const condition = `id = ${req.params.id}`;

//   console.log('condition', condition);

//   cat.update(
//     {
//       sleepy: req.body.sleepy,
//     },
//     condition,
//     (result) => {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
//     }
//   );
// });


// Export routes for server.js to use.
module.exports = router;
