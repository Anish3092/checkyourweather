const express = require("express");
const app = express();
const path  = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;

//public static path
const staticPath = path.join(__dirname,"../public");
const templet_path = path.join(__dirname,"../templets/views");
const partials_path = path.join(__dirname,"../templets/partials");

app.set("view engine","hbs");
app.set("views",templet_path);
hbs.registerPartials(partials_path)

app.use(express.static(staticPath));

//routing
app.get("/",(req, res)=>{
    res.render("main");
});
app.get("/about",(req, res)=>{
    res.render("about");
});
app.get("/weather",(req, res)=>{
    res.render("weather");
});
app.get("*",(req, res)=>{
    res.render("404error",{
        errormsg : "OOPS! Page not found"
    });
});

app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})