// Author:

/*******************************************************************************
                          Global UI Variables

  canvasDiv, textDiv, buttonDiv, sliderDiv
  In the project's HTML, the divs that will contain various elements that may
  be created in setup(). Useful for styling (e.g., keeping them all centered).

  canvas
  The p5.js canvas. This is where all the magic happens!

  textP
  This is where you will print any kind of text (e.g., the label of an image).

  slider, sadSpan, happySpan
  A slider that goes from sad (left) to happy (right).

  buttons
  If included, these are for user interaction (e.g., training a model, inputting
  data).
*******************************************************************************/

//let canvasDiv;

/*******************************************************************************
                            Global ML Variables

  featureExtractor
  An object that can extract the features from the MobileNet model.

  predictor
  The new model we have created from MobileNet's features.

  video
  A video loaded into the program for object detection.

  isModelReady, isTrainingComplete
  Initialized to false in setup(). Set to true when the model has been loaded
  successfully, or when training is complete.

  addedExamples
  The number of examples that have been added to the training data.
*******************************************************************************/

//let featureExtractor;

/******************************************************************************
                                  setup()

  This is a built-in p5.js function that is automatically called when the
  program starts, just before draw(). This is used for initializing global
  variables, building the UI, and loading images, video, data, and models.
*******************************************************************************/

function setup() {

}

/******************************************************************************
                                  draw()

  This is a built-in p5.js function that is automatically called in a repeated
  loop, just after setup(). This is used for handling animations, or running
  anything over and over again throughout a program.
*******************************************************************************/

function draw() {

}

/******************************************************************************
                               buildInput()

  Builds all of the app's buttons and and the slider. When the addExampleButton
  is clicked, the current image on the canvas is added to the training data,
  along the current value of the slider between "Happy" and "Sad".

  When the training button is clicked, the model begins training on its current
  training data, and a function called whileTraining() is passed as a callback
  to run while this is happening.
*******************************************************************************/

function buildInput() {

}

/******************************************************************************
                               videoReady()

  A callback function. Called after the video has been loaded. First, we'll
  hide the video (remember, there will be two videos if we don't do this) using:

  video.display("display", "none");

  Then, now that we have video, we extract the features from the MobileNet
  model with:

  featureExtractor = ml5.featureExtractor("MobileNet", featureExtractorLoaded);
*******************************************************************************/

function videoReady() {

}

/******************************************************************************
                               featureExtractorLoaded()

  A callback function. Called after the MobileNet model has been loaded and its
  feature extractor has been created. Here we load the new regression model
  based on the features of MobileNet. We'll simply call the model "predictor",
  and pass modelReady() as a callback for when the model has loaded.
*******************************************************************************/

function featureExtractorLoaded() {

}

/******************************************************************************
                                  modelReady()

  A callback function. Called after the regression model has been loaded. Here
  we set isModelReady to true, print some instructional text ("Add training
  data, then click train!"), then reveal the button and slider divs so users can
  interact with the app.
*******************************************************************************/

function modelReady() {

}

/******************************************************************************
                                  whileTraining()

  A callback function. Called continuously as the new regression model is being
  trained. If there is a loss (error) value reported by the model's training
  process, log it to the console. Otherwise, the model is done training, so set
  isTrainingComplete to true. You should notice the loss value going down as
  the model becomes better at its regression task over time.
*******************************************************************************/

function whileTraining(loss) {

}

/******************************************************************************
                          gotResults(error, results)

  This function is a callback for predict(). In other words, after our new
  regression model has calculated a value for the image, it should call this
  function next.

  parameters
  - error: If there was an error while running classify(), it should be brought
  up here and the function shouldn't do anything else.
  - results: The results of classify(). This will be an object we can use to
  get some useful information, such as the predicted label of the image, as
  well as how confident the model is about that assigned label.
*******************************************************************************/

function gotResults(error, results) {

}
