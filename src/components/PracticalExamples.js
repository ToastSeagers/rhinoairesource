import React, { useState } from 'react';

function PracticalExamples() {
  const [activeExample, setActiveExample] = useState(null);

  const examples = [
    {
      title: "Generate an image",
      content: "Look at this image and try to explain it to meta.ai. See if you can get it to create the same image. Meta is great for this because it generates and updates the image in real-time as you type."
    },
    {
      title: "Write better emails",
      content: "Write your own apology reply to this email: 'Dear John. I noticed that you took the cupcake from my desk. DON'T do that again! Sincerely, Barbara'. Then send a prompt to ChatGPT including the original as well as your email and ask for tips on how to improve it."
    },
    {
      title: "Write an action list",
      content: "Try asking an AI: 'I need to paint a wall in my house. Give me a list of what I need.' You can follow up each response with a clarifying prompt, such as 'shorten the list to only the essentials'."
    },
    {
      title: "Sparring partner",
      content: "Try this prompt: 'My friend, James, has sent me a message suggesting that we hike Table Mountain tomorrow but I am feeling rather lazy and would prefer to stay home and watch a movie with him. Act like my friend and convince me to rather go on the hike.'"
    },
    {
      title: "Choose your own adventure",
      content: "Try this prompt: 'Give me a \"choose your own adventure\" story where [give a scenario here]. Whenever you see a /, consider it an instruction rather than an answer to an option that you give me. Number the options so that I can answer easily.'"
    }
  ];

  return (
    <section className="practical-examples">
      <h2>Practical Examples</h2>
      {examples.map((example, index) => (
        <div key={index} className="example">
          <h3 onClick={() => setActiveExample(activeExample === index ? null : index)}>
            {example.title}
          </h3>
          {activeExample === index && <p>{example.content}</p>}
        </div>
      ))}
    </section>
  );
}

export default PracticalExamples;