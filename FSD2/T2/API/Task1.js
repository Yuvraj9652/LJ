// Task (Restful API)-1: Write an expressJS code in which RESTapi is created for json object named data which contains name,id,branch,city and contact properties. 

// On “/api” page it should display all the content.

// Upon passing id on the browser url it should display the content having that id. (i.e. on localhost:7899/api/101) 

// Upon passing branch on the browser url it should display the content having that branch. (i.e. on localhost:7899/api/cse)

const express = require('express');
const  router = express.Router();

const data = [
    { id: 101, name: 'John Doe', branch: 'CSE', city: 'New York', contact: '1234567890' },
    { id: 102, name: 'Jane Smith', branch: 'ECE', city: 'Los Angeles', contact: '0987654321' },
    { id: 103, name: 'Alice Johnson', branch: 'ME', city: 'Chicago', contact: '5555555555' },
    { id: 104, name: 'Bob Brown', branch: 'CSE', city: 'Houston', contact: '4444444444' }
];
router.get('/api', (req, res) => {
    res.json(data);
});

router.get('/api/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const result = data.find(item => item.id === id);
    if (result) {
        res.json(result);
    } else {
        res.status(404).json({ message: 'Data not found' });
    }
});
router.get('/api/branch/:branch', (req, res) => {
    const branch = req.params.branch.toUpperCase();
    const result = data.filter(item => item.branch === branch);
    if (result.length > 0) {
        res.json(result);
    }
    else {
        res.status(404).json({ message: 'Data not found' });
    }
});
module.exports = router;