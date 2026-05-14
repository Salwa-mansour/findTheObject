import express from "express";
import cors from "cors";
import levelRouter from "./routs/levelRouter.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/", levelRouter);

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

