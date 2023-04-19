# Alex's postfix notation / reverse polish notation calculator interpreter

## Why?

Reverse Polish notation is a bit of an interesting mathematical thing - unlike infix (your everyday) mathematics notation there's no need for operator precedence or brackets - each operation simply happens on the top 2 numbers from the stack, and that interested me! I'm also aware that it's a very simple thing to interpret through, which helps when it's the first interpreter you're writing yourself from scratch!
This was also a good opportunity for me to refresh my knowledge on TypeScript and learn/remember how to set up a TypeScript project.

## What should I expect?

* It's not pretty - the focus here is really on the interpreter, rather than the user interface
* It will interpret a [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation) expression step by step, or continuously as you type it. Try it out with something like this: `1 2 + 3 4 - * 5 + 6 * 7 - 8 * 9 -`, you should be able to run slowly through that and see how the end result of 31 is reached
* Currently it has very little / no error handling! If something goes wrong, I suggest you reload the page and try again.

## How was this built?

This project was started solo, then streamed at https://twitch.tv/penguat

You can join my Discord community [here](https://discord.gg/h842RVyK) if you want to ask any questions, or see when I'll next be live!

## How do I download and run it?

You should start by cloning this repository (the big green button above!)

You'll also need Node and npm. It was built with Node v18.16.0

In the project folder you have cloned, you should install its' dependencies using `npm i`

You can then build the project with `npm run build` and see the project working by opening index.html

## How do I run the tests?

Once you've run `npm i` you can run the tests with `npm run test`

