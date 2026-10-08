
import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
import levelRouter from "./routs/levelRouter.js";
import controlePanelRouter from "./routs/controlePanelRouter.js"
const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = process.env.NODE_ENV === 'production'
    ? [process.env.PRODUCTION_CLIENT]
    : [process.env.DEVELOPMENT_CLIENT];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, 
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/", levelRouter);
app.use("/levelcontroll",controlePanelRouter)

// The Global Error Middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        status: 'error',
        message: err.message || 'Internal Server Error'
    });
});

 //------------------end of routes--------------
app.use('/{*splat}', async (req, res) => {
    // *splat matches any path without the root path. If you need to match the root path as well /, you can use /{*splat}, wrapping the wildcard in braces.
    //res.sendFile(path.join(__dirname,'views','404.html'))
      res.status("404").json( { message: `path ${req.originalUrl} not found ` } );
  });
 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

