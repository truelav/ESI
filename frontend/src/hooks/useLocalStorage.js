export const useLocalStorage = (product) => {
    localStorage.setItem(product._id, product);
};
