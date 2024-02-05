TO DO LIST :

    BACKEND
        [ ] - Make Crate New User Public
        [ ] - Add isActive to User model
        [ ] - Add company field to User model
        [ ] - New User Email Service to send email to admin to activate account and User for info
        [ ] - Add activate, deactivate User Service
        [ ] - On login check if User isActive



        [ ] - Error Handling (Test Everything to make sure the App Doesnt Crash)
        [ ] - Save Cart To User Profile ( In case page refresh to not loose Cart Data)
        [ ] - Cart is a global state now, make instance of cart for each user
        [ ] - User Profile Page (Will show the order history and user info)
        [ ] - Refactor Controllers to separate logic into Services 

        - Services
            [ ] - Upload Products File, update only the fields like - quantity, price, upc, keep the rest of the info as is
            [ ] - Create Export Inventory Service
            [ ] - Redesign the Presentation Service PDF

    FRONTEND
        [x] - Error Handling and Error Component to show in case something going wrong !important
        [ ] - Save User Data into local storage in case of page refresh
        [ ] - Profile Page

    PRODUCTION
        [ ] - Add all variables to env and start making into production
        [ ] - test all functionality for deployment
        [ ]


    DEPLOYMENT
        [ ] - Make First Deployment and test live version