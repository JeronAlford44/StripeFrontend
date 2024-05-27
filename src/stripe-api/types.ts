export type StripePrice = {
    
}

export type StripeProduct = {
    id: string
    default_price: string,
    description: string
    images: string[],
    metadata: {
        count: number;
    }
}
export type StripeLineItem = {
    cost: string
    quantity: number
    itemName: string
}
export type StripeCheckoutRequestBody = {

}