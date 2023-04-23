const express=require("express")
const app=express()
const cors=require("cors")
const port=4000
const xss=require("xss")
const generate=require('./generate')


app.use(express.json())
// app.use(xss())
app.use(cors({
    origin:"*",
}))


app.get('/',(req,res)=>{
    res.send("hello world")
})


app.post("/generate",async (req,res)=>{
    const {queryDescription}=req.body;
    try{
        const Query = await generate(queryDescription);
    res.json({ Query });

    }catch(err){
        console.log(err);
        res.status(500).send("Internal server error")
    }
})

app.listen(port,()=>{
    console.log(`server stated on port ${port}`)
})