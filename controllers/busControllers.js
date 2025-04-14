const db = require('../db/connection');


// Add bus
exports.addBus = (req, res)=>{
    const { busNumber,totalseats, availableseats } = req.body;
    const sql = 'INSERT INTO buses (busNumber, totalseats, availableseats) VALUES (?, ?, ?)';
    db.query(sql, [busNumber, totalseats, availableseats], (err, result)=>{
        if(err){
            console.error('Insert Error:', err);
            return res.status(500).send('Error inserting bus');
        }
        console.log('Bus added:', result);
        res.status(201).send('Bus added successfully!');
    });
}


// Get all buses which has seat greater than 10
exports.getAllBuses = (req, res)=>{
    const seat = parseInt(req.params.seat);
    const sql = 'SELECT * FROM buses WHERE availableseats > ?';
    db.query(sql, [seat],  (err, result)=>{
        if(err){
            console.error('Error fetching buses: ', err);
            return res.status(500).send('Error fetching buses');
        }
        if(result.length === 0) return res.status(404).send('No buses found');
        console.log('Buses fetched successfully!');
        res.status(200).json(result);
    })
}