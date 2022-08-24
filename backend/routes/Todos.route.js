const express = require('express')
const todosRoute = express.Router();

// Todos model
let TodosModel = require('../modules/Todos');

// Get all data

todosRoute.route('/').get((req,res ,next) =>{
  TodosModel.find((error, data) => {
      if(error){
          return next(error)
      } else{
          res.json(data)
      }
  })
})

// Create todo

todosRoute.route('/create-todo').post((req,res,next)=>[
  TodosModel.create(req.body, (err,data) =>{
      if(err){
          return next(err)
      }else{
          res.json(data)
      }
  })
])

// Edit TODO

todosRoute.route('/edit-todo/:id').get((req,res,next) =>{
  TodosModel.findById(req.params.id, (err,data) =>{
      if(err){
          return next(err)
      }else{
          res.json(data)
      }
  })
})

todosRoute.route('/update-todo/:id').put((req,res,next) =>{
  TodosModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
  }, (err,data) =>{
      if(err){
          return next(err)
      }else{
          res.json(data)
          console.log("la to do a été modifié avec succès");
      }
  })
})

// Delete

todosRoute.route('/delete-todo/:id').delete((req,res,next) =>{
  TodosModel.findByIdAndDelete(req.params.id, (err,data) =>{
      if(err){
          return next(err)
      }else{
          res.status(200).json({
              message: data
          })
      }
  })
})

module.exports = todosRoute
