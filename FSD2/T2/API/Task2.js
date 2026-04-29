
// Write an expressJS code in which RESTapi is created for json object named Places I love which contains name,country,state,city and rating out of 10(no decimal points) is given.upon passing ratings on the browser it should display the places having that rating.i.e. on localhost:30001/a/10 should display all the places having 10 ratings. 

const placesILove = [

  { name: 'Ahmedabd',country: 'India', state: 'Gujarat', city: 'Ahmedabad',  rating: 10  },

  {name: 'Mumbai', country: 'India',  state: 'Maharashtra', city: 'Mumbai', rating: 9  },

  { name: 'Nairobi', country: 'Kenya',  state: 'Nairobi County', city: 'Nairobi',  rating: 8  },

  { name: 'Melbourne', country: 'Australia',  state: 'Victoria', city: 'Melbourne',  rating: 10  }

];

const express = require('express');
const router = express.Router();
router.get('/a/:rating', (req, res) => {
    const rating = parseInt(req.params.rating);
    const result = placesILove.filter(place => place.rating === rating);
    if (result.length > 0) {
        res.json(result);
    } else {
        res.status(404).json({ message: 'No places found with the given rating' });
    }
});
module.exports = router;