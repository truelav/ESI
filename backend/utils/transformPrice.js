export const transformPrice = (price) => {
    let strPrice
    let numPrice

    if(typeof(price) === "string" && price[0] === "$"){
        const price = price.slice(1)
    }

    numPrice = Number(strPrice)

    // console.log(typeof(numPrice), numPrice)

    // product.price = numPrice
    return numPrice
}