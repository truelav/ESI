ABOUT
An Inventory management system for keeping track of available products, adding, modifying and removing. Also it will have account permissions based on roles (Sales, Customer). It will have a searchable catalog and multiple filters and sorts. Also it will have a function to automatically create a PDF presentation based o selected products

BACKEND

    Routes:
        GET : ('/') =>
        GET : ('/products') =>
        GET : ('/products/:id') =>
        GET : ('/users') =>
        GET : ('/users/:id') =>
        GET : ('/presentation') =>

        POST : ('/products') =>
        POST : ('/products/:id') =>
        POST : ('/users/:id') =>
        POST : ('/presentation')

        PUT : ('/products') =>
        PUT : ('/products/:id') =>
        PUT : ('/users/:id') =>

        DELETE : ('/products') =>
        DELETE : ('/products/:id') =>
        DELETE : ('/users/:id') =>

    Controllers:


    Error Handling:


    Validators:

FRONTEND

    Routes:
        ( "/" )
        ( "/login" )
        ( "/products" )
        ( "/dashboard" )
        ( "/presentation" )

