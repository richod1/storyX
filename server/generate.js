const openAiClient=require('./app.js')


const generate=async (queryDescription)=>{
const divinciModel=async (queryDescription)=>{
    const response= await openAiClient.createCompletion({
        model: 'text-davinci-003',
      prompt: `Can you please generate a story for me based on the keyword \n\n${queryDescription}?
       I'd like to explore a world where this keyword holds
        immense power and see how it affects the characters and their journey. Feel free to be creative and
         surprise me with the plot and characters!`,
      max_tokens: 100,
      temperature: 0,
    });
    return response.data.choices[0].text;
}
const chatGPT = async (queryDescription) => {
    const message = [
      { role: "system", content: `You are a story teller accept this \n\n ${queryDescription}` },
      { role: "user", content: ` Hi, can you help me generate a story based on a \n\n ${queryDescription}?` },
      { role: "assistant", content:`Can you create a world where \n\n ${queryDescription} is real and holds immense power, and then show me how it affects the characters and their journey` },
      { role: "user", content: `Surprise me! I'm open to any genre or tone that you think would fit the story:\n\n${queryDescription}` },
    ];
    const response = await openAiClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: message,
    });

    return response.data.choices[0].message.content;
  }

  const storyQuery = await chatGPT(queryDescription);
  return storyQuery;
}

module.exports=generate;