export const extractSubcategory = (categoryRow) => {
    let result = ["unknown", null]

    if(!categoryRow){
        return result
    } 

    if(categoryRow.includes("-")){
        const firstDashIndex = categoryRow.indexOf("-");
        let category = categoryRow.substring(0, firstDashIndex).trim()
        let subcategory = categoryRow.substring(firstDashIndex + 1).trim()
        result = [category, subcategory]
    } else {
        result[0] = categoryRow
    }
    return result
}

export const transformPrice = (price) => {
    if (price && typeof price === "string" && price[0] === "$") {
      return Number(price.slice(1));
    }
};