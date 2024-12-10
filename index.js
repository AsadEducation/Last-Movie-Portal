const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware
app.use(cors());
app.use(express.json());


// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ueh5c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

var uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-shard-00-00.ueh5c.mongodb.net:27017,cluster0-shard-00-01.ueh5c.mongodb.net:27017,cluster0-shard-00-02.ueh5c.mongodb.net:27017/?ssl=true&replicaSet=atlas-dqjaaw-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const docs = [
    {

        "movie_poster": "https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg",
        "movie_title": "Harmony's Quest",
        "genre": "Fantasy",
        "duration": "2h 30m",
        "release_year": 2023,
        "rating": 9.0,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    },
    {

        "movie_poster": "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000",
        "movie_title": "Eternal Voyage",
        "genre": "Sci-Fi",
        "duration": "2h 15m",
        "release_year": 2022,
        "rating": 8.5,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    },
    {

        "movie_poster": "https://m.media-amazon.com/images/I/61CRq2R6i4L._AC_SL1024_.jpg",
        "movie_title": "Steel Horizon",
        "genre": "Action",
        "duration": "2h 10m",
        "release_year": 2020,
        "rating": 8.0,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    },
    {

        "movie_poster": "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
        "movie_title": "Whispering Shadows",
        "genre": "Thriller",
        "duration": "1h 45m",
        "release_year": 2021,
        "rating": 7.8,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    },
    {

        "movie_poster": "https://assets.mubicdn.net/images/notebook/post_images/31857/images-w1400.jpg?1607290863",
        "movie_title": "Rising Sun",
        "genre": "Drama",
        "duration": "1h 55m",
        "release_year": 2021,
        "rating": 7.5,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    },
    {

        "movie_poster": "https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=90&crop=false",
        "movie_title": "Japan the Land",
        "genre": "Action",
        "duration": "2h 55m",
        "release_year": 1990,
        "rating": 7.3,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    },
    {

        "movie_poster": "https://c8.alamy.com/comp/BGMMYM/avatar-year-2009-director-james-cameron-movie-poster-usa-BGMMYM.jpg",
        "movie_title": "Mystic Isles",
        "genre": "Adventure",
        "duration": "2h 10m",
        "release_year": 2001,
        "rating": 8.1,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    },
    {

        "movie_poster": "https://m.media-amazon.com/images/I/9133GvD3fyL.jpg",
        "movie_title": "Echoes of Eternity",
        "genre": "Sci-Fi",
        "duration": "2h 30m",
        "release_year": 2015,
        "rating": 8.4,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    },
    {

        "movie_poster": "https://m.media-amazon.com/images/I/712VowGyORL.jpg",
        "movie_title": "Shadows in the Fog",
        "genre": "Mystery",
        "duration": "1h 45m",
        "release_year": 2010,
        "rating": 7.2,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    },
    {

        "movie_poster": "https://c8.alamy.com/comp/F762XE/film-movie-poster-of-titanic-F762XE.jpg",
        "movie_title": "Crimson Dawn",
        "genre": "Action",
        "duration": "2h 15m",
        "release_year": 2020,
        "rating": 7.9,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    },
    {

        "movie_poster": "https://e0.pxfuel.com/wallpapers/104/660/desktop-wallpaper-interstellar-interstellar-movie-poster-background-film-poster.jpg",
        "movie_title": "Desert Mirage",
        "genre": "Drama",
        "duration": "1h 50m",
        "release_year": 1998,
        "rating": 6.8,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    },
    {

        "movie_poster": "https://graphicdesignjunction.com/wp-content/uploads/2012/05/movie-poster-34.jpg",
        "movie_title": "Chasing Starlight",
        "genre": "Romance",
        "duration": "1h 40m",
        "release_year": 2017,
        "rating": 8.0,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    },
    {

        "movie_poster": "https://media.karousell.com/media/photos/products/2020/4/28/high_quality_movie_posters_1588065091_2ff5d9c2_progressive.jpg",
        "movie_title": "The Forgotten Path",
        "genre": "Thriller",
        "duration": "2h 5m",
        "release_year": 2009,
        "rating": 7.6,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    },
    {

        "movie_poster": "https://marketplace.canva.com/EAFVOC6TAng/1/0/1131w/canva-yellow-and-white-action-movie-poster-_GG58WASM1E.jpg",
        "movie_title": "Rise of the Phoenix",
        "genre": "Fantasy",
        "duration": "2h 20m",
        "release_year": 2013,
        "rating": 8.7,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    },
    {

        "movie_poster": "https://png.pngtree.com/thumb_back/fw800/background/20240109/pngtree-a-compelling-movie-poster-background-image_15605697.jpg",
        "movie_title": "Silent Whispers",
        "genre": "Horror",
        "duration": "1h 55m",
        "release_year": 2011,
        "rating": 6.5,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    },
    {

        "movie_poster": "https://www.nsbpictures.com/wp-content/uploads/2018/08/movie-poster-backgrounds-1-1.jpg",
        "movie_title": "Winds of Change",
        "genre": "Drama",
        "duration": "1h 45m",
        "release_year": 1995,
        "rating": 7.4,
        "story": "A gripping tale of survival, courage, and hope, this movie chronicles the journey of an ordinary individual thrust into extraordinary circumstances. With breathtaking visuals and a powerful narrative, it delves deep into human resilience and the indomitable spirit to overcome challenges.",
        "details_button": "See Details"
    }

]



async function run() {
    try {

        await client.connect();

        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const dataBase = client.db('Movies-10');
        const movieCollection = dataBase.collection('MovieCollection');

        const favMovieCollection = dataBase.collection('favMovieCollection');


        // Insert the whole array only once
        const existingMovies = await movieCollection.countDocuments();
        if (existingMovies === 0) {
            const options = { ordered: true };
            const result = await movieCollection.insertMany(docs, options);
            console.log(`${result.insertedCount} initial documents inserted.`);
        } else {
            console.log("Initial documents already exist. Skipping bulk insertion.");
        }


        //loading all movie from database 
        app.get('/movies', async (req, res) => {
            const cursor = movieCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/movies/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await movieCollection.findOne(query);
            res.send(result);
        })

        // getting all favorite movies based on users email

        app.delete('/movies/:id', async (req, res) => {

            const id = req.params.id;
            const query = { _id: new ObjectId(id) };

            const result = await movieCollection.deleteOne(query);

            res.send(result);

        })


        // favorite movie endpoints 


        app.get('/favMovies/:email', async (req, res) => {

            const email = req.params.email;
            // console.log(email);

            const query = { email: email }

            const cursor = favMovieCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })


        app.post('/favMovies', async (req, res) => {
            let newMovie = req.body;

            let email = req.body.email;
            // console.log(email);

            // Convert _id to ObjectId if it exists in the request body
            if (newMovie._id) {
                newMovie._id = ObjectId.createFromHexString(newMovie._id);
            }

            try {
                const query = { _id: newMovie._id }; // Use ObjectId for the query
                const existingMovie = await favMovieCollection.findOne(query);

                if (existingMovie) {
                    return res.send({ success: false, message: "Movie already exists in favorites" });
                }

                const insertResult = await favMovieCollection.insertOne(newMovie);
                res.send({ success: true, insertedId: insertResult.insertedId });
            } catch (error) {
                console.error("Error:", error);
                res.status(500).send({ error: "Failed to process the request" });
            }
        });

        app.delete('/favMovies/:id', async (req, res) => {


            const id = req.params.id;

            const query = { _id: new ObjectId(id) };

            const result = await favMovieCollection.deleteOne(query);

            res.send(result);

        })

        // adding form movies endpoints 

        app.post('/addMovie',async(req,res)=>{

            const newMovie = req.body;
            const result = await movieCollection.insertOne(newMovie);
            res.send(result);
            
        })






    } finally {

    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hello Server ')
})

app.listen(port, () => {
    console.log(`server is running properly at : ${port}`);
})


// <div className="mb-4">
// <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">
//   Rating
// </label>
// {/* Assuming a rating package component is used here */}
// <div id="rating" className="flex items-center gap-2">
//   {/* Placeholder for rating package */}
//   <span className="text-gray-500">★ ★ ★ ★ ★</span>
// </div>
// </div>

