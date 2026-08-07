# AI Tools for Development

## Which AI tool did I try?

I used ChatGPT as an AI assistant during my development work. I mainly used it when I needed help understanding errors, debugging code, learning unfamiliar concepts, and checking possible solutions.

I found it useful because I could describe the problem I was having and ask follow-up questions when I did not understand the first explanation.

## Examples of prompts I used

Some examples of prompts I asked were:

1. "Why am I getting this error when I run my code, and how can I fix it?"

2. "Explain what git bisect does and how I can use it to find the commit that introduced a bug."

3. "How do I create a basic CRUD API using NestJS?"

These prompts helped me understand both the problem and the steps I could take to solve it.

## Debugging example

One example was when I was working with Git and `git bisect`. I had a simple Python multiplication program and needed to identify which commit introduced a bug.

I asked ChatGPT for help understanding how to use `git bisect` and the order of the commands.

I then used commands such as:

`git bisect start`

`git bisect bad 752c6b8`

`git bisect good 923bea4`

The result identified:

`752c6b8 - Introduce bug in multiply function`

as the first bad commit.

The AI explanation helped me understand what each command was doing, but I still ran the commands myself and checked the result in the terminal.

## What worked well?

ChatGPT was useful for explaining technical concepts in simpler language. It was also helpful when I was stuck because I could provide an error or terminal output and ask what it meant.

Another benefit was being able to ask follow-up questions. If one solution did not work, I could provide the new result and continue debugging.

## What did not work well?

AI suggestions are not always correct on the first attempt. Sometimes a suggested command may not match the exact state of my project.

I learned that I should not copy commands without understanding them. I need to check the suggested solution, run it carefully, and verify the result myself.

## When is AI most useful for coding?

I think AI is most useful when debugging errors, learning new concepts, understanding unfamiliar code, and getting an explanation of possible solutions.

It is especially helpful when I am stuck and need guidance on what to check next. However, I still need to understand the code and test the solution myself rather than depending completely on AI.
