// import required essentials
const express = require('express');
// create new router
const router = express.Router();

// create a JSON data array
let data = [
  { id: 1, series_name: 'Big Sister', directors_name: "Tom", episodes_name: "pilot" "ep1" "ep2", actors_name: "jerry" "milsa" "chester" },
  { id: 2, series_name: 'friends', directors_name: "lukka", episodes_name: "pilot" "ep1" "ep2", actors_name: "jerry" "milsa" "chester" },
  { id: 3, series_name: 'big bang theory', directors_name: "Tom", episodes_name: "pilot" "ep1" "ep2", actors_name: "jerry" "milsa" "chester" },
  { id: 4, series_name: 'malcom in the middle', directors_name: "David", episodes_name: "pilot" "ep1" "ep2", actors_name: "jerry" "milsa" "chester" },
  { id: 5, series_name: 'breaking bad', directors_name: "Tom", episodes_name: "pilot" "ep1" "ep2", actors_name: "jerry" "milsa" "chester" },
];


// HTTP methods ↓↓ starts here.

// READ

router.get('/', function (req, res) {
  res.status(200).json(data);
});

// READ
router.get('/:id', function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

// CREATE
router.post('/', function (req, res) {
  let itemIds = data.map(item => item.id);
  let seriesName = data.map(item => item.series_name);
  let directorName = data.map(item => item.directors_name);
  let episodesName = data.map(item => item.episodes_name);
  let actorsName = data.map(item => item.actors_name);



  // create an object of new Item
  let newItem = {
    id: newId,
    series_name: req.body.series_name,
    directors_name: req.body.directors_name,
    episodes_name: req.body.episodes_name,
    actors_name: req.body.actors_name,
  };

  data.push(newItem);

  res.status(201).json(newItem);
});

//update

router.put('/:id', function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    let updated = {
      id: found.id,
      series_name: req.body.series_name,
      directors_name: req.body.directors_name,
      episodes_name: req.body.episodes_name,
      actors_name: req.body.actors_name,
    };
    let targetIndex = data.indexOf(found);
    data.splice(targetIndex, 1, updated);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

// DELETE
router.delete('/:id', function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {

    let targetIndex = data.indexOf(found);

    data.splice(targetIndex, 1);
  }

  res.sendStatus(204);
});

module.exports = router;