const express = require('express');
const RestaurantModel = require('../models/Restaurant');
const app = express();

//Read restaurants
//http://localhost:3000/restaurants
app.get('/restaurants', async (req, res) => {
    const restaurants = await RestaurantModel.find({});
   
    
    try {
      console.log(restaurants[0].surname)
      res.status(200).send(restaurants);
    } catch (err) {
      res.status(500).send(err);
    }
  });

//Search restaurants by cuisine
//http://localhost:3000/restaurants/cuisine/Japanese
app.get('/restaurants/cuisine/:name', async (req, res) => {
    const name = req.params.name
    const restaurants = await RestaurantModel.find({cuisine : name});
    

    
    try {
      if(restaurants.length != 0){
        res.send(restaurants);
      }else{
        res.send(JSON.stringify({status:false, message: "No data found"}))
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });

  //Read restaurants in Descending order with selected columns 
  //http://localhost:3000/restaurant?sortBy=DESC
  app.get('/restaurant', async (req, res) => {
    const restaurant = await RestaurantModel.find({}).select("cuisine name borough restaurant_id").sort({'restaurant_id': 'desc'});
    
    
    try {
      console.log(restaurant[0].surname)
      res.status(200).send(restaurant);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  //Read restaurants in Ascending order with selected columns 
  //http://localhost:3000/restaurante?sortBy=ASC
  app.get('/restaurante', async (req, res) => {
    const restaurante = await RestaurantModel.find({}).select("cuisine name borough restaurant_id").sort({'restaurant_id': 'asc'});
    
    
    try {
      console.log(restaurante[0].surname)
      res.status(200).send(restaurante);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  //http://localhost:3000/restaurants/Delicatessen
  app.get('/restaurants/Delicatessen', async (req, res) => {
    try {
      const restaurants = RestaurantModel.
                          find({})
                          .where('cuisine').equals('Delicatessen')
                          .where('borough').equals('Brooklyn')
                          .sort('name')
                          .select('cuisine name borough')
                          .exec((err, data) => {
                            if (err){
                                res.send(JSON.stringify({status:false, message: "No data found"}));
                            }else{
                                res.send(data);
                            }
                          });
      } catch (err) {
        res.status(500).send(err);
      }
  });
  

  





  module.exports = app