const newPaymentIntent = async() => {
    // Make request to backend
    // Return the PaymentIntent’s client secret in the 
    // response to finish the payment on the client.
    let secret = undefined
    try{
    //get client secret from backend by initiating payment intent
    const req = await fetch('new payment intent endpoint from backend')
    const {client_secret}: {client_secret: string} = await req.json()
    secret = client_secret
    }
    catch(err){
        const error = err as Error
        
    }
    return secret
}
export default newPaymentIntent
