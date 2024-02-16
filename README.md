# PropftxBackend
In the backend of the "Propftx Movies" project, developed using MongoDB, Mongoose, Node.js, and Express.js, the focus is on building a robust and secure API that supports authentication and authorization functionalities to ensure data integrity and user privacy.
The backend architecture revolves around Node.js and Express.js, providing a scalable and performant server environment. Express.js serves as the web application framework, enabling the creation of RESTful APIs to handle various client requests, such as fetching movie data, user authentication, and CRUD operations on the database.
Authentication and authorization functionalities are core components of the backend. Authentication mechanisms, such as JSON Web Tokens (JWT), are employed to verify the identity of users during login and subsequent requests. Upon successful authentication, JWT tokens containing user information and permissions are generated and sent to the client for subsequent requests.
Authorization logic is implemented to restrict access to certain endpoints or functionalities based on the user's role or permissions. Middleware functions are used to intercept incoming requests and validate the JWT tokens, ensuring that only authenticated users with the appropriate privileges can perform certain actions, such as creating or modifying movie data.
Furthermore, the backend includes error handling middleware to gracefully handle exceptions and provide meaningful error responses to the client. This enhances the reliability and user experience of the application by preventing unexpected crashes and improving debugging capabilities.

# Tech Stack
1. Node.js
2. Express JS
3. MongoDB
4. Mongoose
5. JWT
6. Bcrypt
7. Mongoose Schema

# API Endpoints
## 1. Signup : /users/signup
The /users/signup endpoint serves as a pivotal entry point for user registration within the "Propftx Movies" backend. Upon receiving a POST request containing user registration details, such as username and password, the endpoint initiates the process of creating a new user account in the database.One crucial aspect of user registration is ensuring the security of user passwords. To achieve this, the backend utilizes the bcrypt hashing algorithm to securely hash the user's password before storing it in the database. 

## 2. Login : /users/login
The /users/login endpoint is a critical component of the authentication system within the "Propftx Movies" backend. Upon receiving a POST request containing user credentials, such as username and password, the endpoint initiates the authentication process by verifying these credentials against the user data stored in the database.
Using secure mechanisms, such as bcrypt hashing for password comparison, the endpoint ensures the integrity and confidentiality of user credentials during the authentication process. If the provided credentials match those of an existing user in the database, indicating a successful login attempt, the endpoint generates a JSON Web Token (JWT) as a secure authentication token.

## 3. Get all movies : /movies/
The /movies/ endpoint serves as a gateway for authenticated users within the "Propftx Movies" backend to access a comprehensive list of movies stored in the database. When an authenticated user sends a GET request to this endpoint, the backend retrieves all available movie entries from the database and returns them as a response.

## 4. Get single movie :/movies/${id}
The /movies/${id} endpoint serves as a dedicated route within the "Propftx Movies" backend, allowing authenticated users to retrieve detailed information about a specific movie from the database. When an authenticated user sends a GET request to this endpoint with a valid movie ID parameter, the backend queries the database to fetch the corresponding movie entry.

## 5. Create Movie : /movies/create
The /movies/create endpoint is a restricted route within the "Propftx Movies" backend, designed specifically for authenticated and authorized users with administrative privileges to create new movie entries in the database. When an authenticated user with administrative permissions sends a POST request to this endpoint, the backend verifies their authorization status before allowing the creation of a new movie.

## 6. Update Movie : /movies/update/${id}
The /movies/update/${id} endpoint is a secure route within the "Propftx Movies" backend, specifically designed for authenticated and authorized users with administrative privileges to update existing movie entries in the database. Before allowing any modifications to the movie data, the backend verifies both the authentication and authorization status of the user.

## 7. Delete movie : /movies/delete/:${id}
The /movies/delete/:${id} endpoint is a protected route within the "Propftx Movies" backend, reserved for authenticated and authorized users with administrative privileges to delete specific movie entries from the database. Before allowing any deletions, the backend verifies both the authentication and authorization status of the user.
