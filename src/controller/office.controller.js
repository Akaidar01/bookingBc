'use strict';

const office = require('../model/office.model');
const officeFilter = require('../model/office.filter.model');
const { get } = require('../routes/Api/buildings');

exports.findAll = function(req, res) {
    office.findAll(function(err, office) {
    console.log('controller')
    
   if (err)
    res.send(err);
      console.log('res', office);
        res.send(office);
  });
};



exports.create = function(req, res) {
    const new_office = new office(req.body);
   console.log('#test', )
    if(typeof req.body.constructor === 'object' && Object.keys(req.body).length === 0){
        return res.status(400).send({ error:true, message: 'Please provide all required field' });
    
    }else{
        office.create(new_office, function(err, office) {
         if (err)
          res.send(err);
          console.log(office)
             res.json({error:false,message:"Base added successfully!",data:office});
        });
    }
};

exports.findById = function(req, res) {
    office.findById(req.params.id, function(err, office) {
        
        if (err)
         res.send(err);
          res.json(office);
    });
};
exports.update = function(req, res) {
    
    if(typeof req.body.constructor === object && Object.keys(req.body).length === 0){
        return res.status(400).send({ error:true, message: 'Please provide all required field' });
    
    }else{
       
        office.update(req.params.id, new office(req.body), function(err, office) {
            if (err)
             res.send(err);
              res.json({ error:false, message: 'Base successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
    office.delete( req.params.id, function(err, office) {
    if (err)
     res.send(err);
      res.json({ error:false, message: 'Base successfully deleted' });
  });
};


exports.filter = function(req, res) {
    officeFilter.filter(req.query,function(err, office) {
    
       if (err)
        res.send(err);
        
        let count = 0;
        if(office && office !== null){
            office.forEach(element => 
                count = count + element.cost
            )
        }

        res.send({
            office: office, 
            count: count
        });
        // officeFilter.count(req.query,function(err, count) {
        //     if (err)
        //     res.send(err);

           
        //     const result = Object.values(JSON.parse(JSON.stringify(count)));
        //     console.log('#result',result)
        //     console.log('#result',result[0])

        //     let mapped = Object.values(result[0])
        //     res.send({
        //         office: office, 
        //         count: mapped});
        // })
    });
};
// const where = {
//     from: {
//         $between: [startDate, endDate]
//     }
// };