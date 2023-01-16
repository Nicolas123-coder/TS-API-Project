# Movie TS API 🎥

  
## How to run ⚙️

    npm i 
    npm run dev

## About the Project ✏️

The Project consists in a MVC Api builted in TypeScript, you can add, update, delete and get data about a movie (the data are specified in the Model).

For logs I used Winston, MongoDB for the DataBase and mongoose as Orm. 

## Movie Model (Entity)

    {
        title: {type:  String},
        rating: {type:  Number},
        description: {type:  String},
        director: {type:  String},
        stars: {type:  Array},
        poster: {type:  String}
    },
    {
        timestamps:  true
    }

 
## Routes
-[GET] Get All Movies
/api/movie

-[GET] Get Movie By ID 
/api/movie/id

-[POST] Create a Movie
/api/movie

-[DELETE] Delete Movie
/api/movie/id

-[PATCH] Update Movie
/api/movie/id


payload to UPDATE/POST: 

    {
            title: {type:  String},
            rating: {type:  Number},
            description: {type:  String},
            director: {type:  String},
            stars: {type:  Array},
            poster: {type:  String}
    },
