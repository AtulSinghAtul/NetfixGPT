import OpenAI from "openai";

// const openai_key = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: "",
  dangerouslyAllowBrowser: true,
});

export default openai;
