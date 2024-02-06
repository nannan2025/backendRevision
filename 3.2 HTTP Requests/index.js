import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hellooo World</h1>"); 
// or res.send("Hello World");
});

app.get("/About", (req, res) => {
    res.send("<h1>About me</h1><p>My name is Nan Nan</p>");
})


app.get("/contact", (req, res) => {
    res.send("<h1>My Contact</h1><p>My email is nsinhtoo_2025@depauw.edu</p>");
 });
 
app.listen (port, ()=>{ 
    console.log(`Server running on port ${port}.`);
}); 