const express = require('express');
const app = express();
const muscles = require('./data.js');

// ************
// utility functions
// ************

// ************
// Middleware
// ************
function endpointValidator(req, res, next) {
  console.log(req.originalUrl);
  console.log(req.path);
  // splice to remove first element ['']
  const paramsArr = req.path.split('/').splice(1);
  console.log(paramsArr);

  if (!(paramsArr[0] in muscles))
    return res
      .status(404)
      .send(
        `Bad Request: No matching category, ${paramsArr[0]} not in database`
      );

  for (let i = 1; i < paramsArr.length; i++) {
    if (!(paramsArr[i] in muscles[paramsArr[i - 1]]))
      return res
        .status(404)
        .send(
          `Bad Request: No matching category, ${paramsArr[i]} not in database`
        );
  }
  next();
}

app.use('/muscles', endpointValidator);
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
