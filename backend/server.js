import app  from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`Server runnning on Port ${process.env.PORT}`);

});