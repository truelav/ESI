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

        PUBLIC ROUTES
            ( "/login" )
            ( "/contact" )

        PROTECTED ROUTES

            ( "/products" )

            ( "/dashboard" ) -> ( "/inventory" ) -> ( "/users" ) -> ( "/products" )

            ( "/presentation" )

TO DO LIST :

    [ ] - BACKEND - Import many items
                    1. Import CSV File and parse each column, and save in DB
    [ ] - BACKEND - Save Image for Product
                    1. Import CSV File and parse each column, and save in DB


    [x] - BACKEND : Finish All the Products Controllers (AddMultipleProducts, EditProduct, DeactivateSingle, ActivateSingle, DeactivateMultiple and ActivateMultiple)
    [x] - BACKEND : Finish Authorization (Create JWT Cookie, Validate JWT Cookie, Refresh JWT and pull user role)
    [x] - BACKEND : Handle Upload CSV File and save it in the database
    [ ] - BACKEND : Handle Upload Images For Products and Users
    [ ] - BACKEND : Create PDF Presentation and Provide Download Link
    [ ] - BACKEND : Error Handling

    ________________________________________________________________________________________________________________

    [x] - FRONTEND : Create New User Form
    [ ] - FRONTEND : Login User
    [ ] - FRONTEND :

    [ ] - FRONTEND : Create Skeletons for Components
    [ ] - FRONTEND : Implement Async - Lazy Loading
    [ ] - FRONTEND : Implement Error Boundaries
    [ ] - FRONTEND : Implement Forms Validations
    [ ] - FRONTEND : Implement File Upload Validations
    [ ] - FRONTEND : Create All Dashboard Routes and Pages (Components)
