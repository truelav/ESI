
export interface User { 
    map(
        arg0: (
          product: import("./User").User
        ) => import("react/jsx-runtime").JSX.Element
      ): import("react/jsx-runtime").JSX.Element;
    _id: string;
    name: string
    email: string
    password: string
    isActive: boolean
    roles: string[]
    createdAt: string
    updatedAt: string
}