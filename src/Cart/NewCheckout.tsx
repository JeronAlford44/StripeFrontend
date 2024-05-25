import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'
import { useEffect, useState } from 'react'
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js'
import { useCart } from '../GlobalProviders/CartProvider'
import { Product } from '../Catalog/items'

export const stripePromise = loadStripe(
  'pk_test_51P9sC2KLCmwYX1xyvntRwqQM9FHxgdKprKWqgnZVWQ8fd6wMoJbJubxp51D2uSGkZIBoNj8hNT4poyx9wI3rE19z00s4WXixFl'
)

interface PaymentIntentRequestBody {
  items: Product[]
  customerName: string
  customerEmail: string
}
interface PaymentIntentResponseBody {
  clientSecret: string
}
export default function NewCheckoutForm() {
  const cart = useCart()

  const [clientSecret, setClientSecret] = useState<string>('')
  useEffect(() => {
    if (!cart?.checkoutInitiated) {
      return
    }
    const GetClientSecret = async () => {
      const requestBody: PaymentIntentRequestBody = {
        items: cart?.cartItems || [],
        customerName: 'Jeron',
        customerEmail: 'jeron.alford@gmail.com',
      }
      try {
        console.log(requestBody)
        const req = await fetch('https://localhost:8080/checkout/payment_intent', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: { 'Content-Type': 'application/json' },
        })
        const response: PaymentIntentResponseBody = await req.json()
        setClientSecret(response.clientSecret)
        return response.clientSecret
      } catch (err) {
        return err as Error
      }
    }

    GetClientSecret()
    //fix dependency later; we want it to only trigger when checkout button is clicked
  }, [cart?.checkoutInitiated, cart?.cartItems])
  //update client secret using use effect and state
  // const clientSecret = `{{${newPaymentIntent()}}}`,

  const options: StripeElementsOptions = {
    clientSecret: clientSecret,
    theme: 'stripe',
  } as StripeElementsOptions
  return (
    <section>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </section>
  )
}
