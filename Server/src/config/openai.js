const { Configuration, OpenAIApi } = require('openai')
require("dotenv").config()

module.exports = class openai{

	static configuration(){
		const configuration = new Configuration({
			apiKey: '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',
		})

		return new OpenAIApi(configuration)
	}

	static textCompletion ({prompt}) {
    return 	{
			model:"text-davinci-003",
			prompt:`${prompt}`,
			temperature:0,
			max_tokens: 3500,
			top_p:1,
			frequency_penalty: 0.5,
			presence_penalty: 0
		}
  }
}
