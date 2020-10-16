import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as routesV1 from "./routes/v1";
import * as routesV2 from "./routes/v2";
import bodyParser   from  "body-parser"

// initialize configuration
dotenv.config();


const port = process.env.SERVER_PORT; // default port to listen
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" );
} );
routesV1.register(app)
routesV2.register(app)

app.use((req,res,next) =>{
    res.locals.userValue = null;
    next();
})

// start the Express server
app.listen( port, () => {
     // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );