'use strict';

const Client = require('../model/client.model');
exports.findAll = function(req, res) {
    Client.findAll(function(err, client) {
    console.log('controller')
    
   if (err)
    res.send(err);
      console.log('res', client);
        res.send(client);
  });
};

exports.create = function(req, res) {
    const new_client = new Client(req.body);
   console.log('#test', )
    if(typeof req.body.constructor === 'object' && Object.keys(req.body).length === 0){
        return res.status(400).send({ error:true, message: 'Please provide all required field' });
    
    }else{
        Client.create(new_client, function(err, client) {
         if (err)
          res.send(err);
             res.json({error:false,message:"Base added successfully!",data:client});
        });
    }
};

exports.findById = function(req, res) {
    Client.findById(req.params.id, function(err, client) {
        
        if (err)
         res.send(err);
          res.json(client);
    });
};
exports.update = function(req, res) {
    
    if(typeof req.body.constructor === object && Object.keys(req.body).length === 0){
        return res.status(400).send({ error:true, message: 'Please provide all required field' });
    
    }else{
       
        Client.update(req.params.id, new Client(req.body), function(err, client) {
            if (err)
             res.send(err);
              res.json({ error:false, message: 'Base successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
    Client.delete( req.params.id, function(err, client) {
    if (err)
     res.send(err);
      res.json({ error:false, message: 'Base successfully deleted' });
  });
};

