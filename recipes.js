const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js');

mongoose.connect('mongodb://localhost/recipeApp', {
  
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE
  
});
//-------iteration 1
const RecipeSchema = new Schema({
  title:{
    type: String,
    required: true,
    unique: true
  },
  level:{
    type: String,
    enum: ['Easy Peasy','Amateur Chef','UltraPro Chef']
  },
  ingredients:{
    type: Array,
  },
  cuisine:{
    type: String,
    required: true
  },
  dishType:{
    type: String,
    enum: ['Breakfast','Dish','Snack','Drink','Dessert','Other']
  },
  images:{
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg.'
  },
  duration:{
    type: Number,
    mean: 0
  },
  creator:{
    type: String
  },
  created:{
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model('Recipe', RecipeSchema );

   //-------iteration 2
    /*Recipe.create(data[0])
      .then(result => {
        console.log(result)
        mongoose.connection.close()//Cerrar la conexion con la base de datos
      })
      .catch(error => {
        console.log(error)
      })*/

//-------iteration 3
      /*Recipe.insertMany(data)
      .then(result => {
        //console.log(result)
        mongoose.connection.close()//Cerrar la conexion con la base de datos
      })
      .catch(error => {
        console.log(error)
      })

      Recipe.find({}, 'title')
      .then(result => {
        console.log(result)
        mongoose.connection.close()//Cerrar la conexion con la base de datos
      })
      .catch(error => {
        console.log(error)
      })*/

  //------Iteration4

      /*Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'}, { duration: '100' }, { new: true })
      .then(result => {
        console.log(result)
        mongoose.connection.close()//Cerrar la conexion con la base de datos
      })
      .catch(error => {
        console.log(error)
      })*/

  //------Iteration5

      Recipe.deleteOne({title: 'Carrot Cake'})
      .then(result => {
        console.log(result)
        mongoose.connection.close()//Cerrar la conexion con la base de datos
      })
      .catch(error => {
        console.log(error)
      })
module.exports = Recipe;

