
export const OpenStripeCheckoutSessionUrl = async(requestBody: any) => {
   
      const req = await fetch('http://localhost:8080/checkout/session', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      })
      const response:any = await req.json()
      const sessionUrl = response.sessionUrl

      window.open(sessionUrl, '_blank')
      console.log(response)
    
   
}
