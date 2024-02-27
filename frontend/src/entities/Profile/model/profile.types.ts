export interface User {
    id?: string;
    username?: string;
    avatar?: string;
    bio?: string;
    orders: [];
    cart: "";
}

export interface CartItem {
    productId: number;
    quantity: number;
    // Add other cart item fields as needed
}
  
export interface Order {
    orderId: number;
    products: CartItem[];
    // Add other order fields as needed
} 

export interface ProfileState {
    user: User | null; // Nullable if user is not authenticated
    isAuthenticated: boolean;
    cart: CartItem[];
    orders: Order[];
}