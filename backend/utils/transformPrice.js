export const transformPrice = (price) => {
  if (price && typeof price === "string" && price[0] === "$") {
    return Number(price.slice(1));
  }
};

export const transformProductsForPresentation = (products) => {
  const groupedProducts = {};

  products.forEach((product) => {
      const { brand } = product;
      if(!groupedProducts[brand]){        
        groupedProducts[brand] = [product];
      } else {
        groupedProducts[brand].push(product);
      }
  });

  const transformedProducts = Object.entries(groupedProducts).map(
      ([brand, products]) => ({
          brand,
          products,
      })
  );

  return transformedProducts
}