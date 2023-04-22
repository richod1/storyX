const {Configuations,OpenApi}=require("openai")
require('dotenv').config()
const openaiApi=process.env.OPEN_AI_API;

if(!openaiApi){
    console.error("Opps Api Broken!!");
    process.exit(1);
}

const configuaration=new Configuations({
    apikey:process.env.OPEN_AI_API,
})

const openApi=new OpenApi(configuaration)


module.exports=openApi;
