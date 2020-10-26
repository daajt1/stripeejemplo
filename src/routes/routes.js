const { Router } = require ('express');
const stripe = require('stripe')// clave publica stripe ()
const router = Router();

router.get('/',(req,res)=> {
    res.render('index');
})

router.post('/checkout',async(req,res)=>{
   
    const customer = await stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
    
    const charge = await stripe.charge.create ({
        amount: '3000',
        currency: 'usd',
        customer: customer.id,
        description: 'Etiquetas'
    })
    console.log(charge.id);
    res.send('received');
})

module.exports = router;