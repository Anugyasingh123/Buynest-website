const express = require('express');
const authMiddleware = require('../../../middleware/authmiddleware');
const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
    res.json({ message: `Checkout successful, welcome ${req.user.name}` });
});

module.exports = router;
