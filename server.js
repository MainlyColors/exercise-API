const express = require('express');
const app = express();
const muscles = require('./data.js');

// ************
// data
// ************

// ************
// Middleware
// ************

// ************
// Routes
// ************

// all routes
app.get('/', (req, res) => {
  res.send(muscles);
});

app.get('/muscles', (req, res) => {
  res.send(muscles);
});

// main outer level
app.get('/muscles/:mainMuscleGroup', (req, res) => {
  const mainMuscleGroup = req.params.mainMuscleGroup.toLowerCase();
  console.log(mainMuscleGroup);
  res.send(muscles[mainMuscleGroup]);
});

// nested one level, see all exercises
app.get('/muscles/:mainMuscleGroup/:specificMuscle', (req, res) => {
  const mainMuscleGroup = req.params.mainMuscleGroup.toLowerCase();
  const specificMuscle = req.params.specificMuscle.toLowerCase();

  // temporary for non objects that get converted to string
  res.type('application/json');
  // JSON.stringify to convert 0 => "0"
  res.send(JSON.stringify(muscles[mainMuscleGroup][specificMuscle]));
});

// nested 2 levels, see all exercise types
app.get(
  '/muscles/:mainMuscleGroup/:specificMuscle/:exerciseType',
  (req, res) => {
    const mainMuscleGroup = req.params.mainMuscleGroup.toLowerCase();
    const specificMuscle = req.params.specificMuscle.toLowerCase();
    const exerciseType = req.params.exerciseType.toLowerCase();

    // temporary for non objects that get converted to string
    res.type('application/json');
    // JSON.stringify to convert 0 => "0"
    res.send(
      JSON.stringify(muscles[mainMuscleGroup][specificMuscle][exerciseType])
    );
  }
);

// ************
// Middleware - after
// ************

// handle unknown requests
function unhandledRoute(req, res, next) {
  return res.status(404).send('Bad Request: endpoint unknown');
}

app.use(unhandledRoute);

const PORT = 8000;
app.listen(PORT, (err) => {
  console.log(`Server listening to port ${PORT}`);
});
