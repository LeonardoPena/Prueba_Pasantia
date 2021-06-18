const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Usando requests de GET en /usuarios'
    });
});

router.post('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Usando requests de post en /usuarios'
    });
});

router.get('/:userid', (req, res, next)=>{

    const id = req.params.userid;
    if (id ==='especial'){
        res.status(200).json({
            message: 'Esto funciona omg'
        });
    }else{
        res.status(200).json({
            message: 'Esto no funciona pero si omg'
        });
    }
});

router.patch('/:userid', (req, res, next)=>{

    res.status(200).json({
        message: 'Updateado todo'
    });
    
});

router.delete('/:userid', (req, res, next)=>{

    res.status(200).json({
        message: 'Borrado todo'
    });
    
});

module.exports = router;