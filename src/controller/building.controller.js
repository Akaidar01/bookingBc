
'use strict';

const Building = require('../model/building.model');
exports.findAll = function(req, res) {
    Building.findAll(function(err, building) {
    console.log('controller')
    
   if (err)
    res.send(err);
      console.log('res', building);
        res.send(building);
  });
};

exports.create = function(req, res) {
    const new_Building = new Building(req.body);
   console.log('#test', )
    if(typeof req.body.constructor === 'object' && Object.keys(req.body).length === 0){
        return res.status(400).send({ error:true, message: 'Please provide all required field' });
    
    }else{
        Building.create(new_Building, function(err, Building) {
         if (err)
          res.send(err);
             res.json({error:false,message:"Base added successfully!",data:Building});
        });
    }
};

exports.findById = function(req, res) {
    Building.findById(req.params.id, function(err, building) {
        
        if (err)
         res.send(err);
          res.json(building);
    });
};
exports.update = function(req, res) {
    
    if(typeof req.body.constructor === object && Object.keys(req.body).length === 0){
        return res.status(400).send({ error:true, message: 'Please provide all required field' });
    
    }else{
       
        Building.update(req.params.id, new Building(req.body), function(err, building) {
            if (err)
             res.send(err);
              res.json({ error:false, message: 'Base successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
  Building.delete( req.params.id, function(err, building) {
    if (err)
     res.send(err);
      res.json({ error:false, message: 'Base successfully deleted' });
  });
};

