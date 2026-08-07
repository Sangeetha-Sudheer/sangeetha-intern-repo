# Writing Meaningful Commit Messages

## What makes a good commit message?

A good commit message should be clear, concise, and specific. It should explain what was changed without requiring someone to inspect the code first. A meaningful commit message makes the Git history easier to understand and helps developers quickly identify the purpose of a change.

For example, `Add note about clear commit messages` is better than `fixed stuff` because it clearly describes what was changed.

## How does a clear commit message help with team collaboration?

Clear commit messages help team members understand the history of a project. When several developers are working on the same repository, they can look at the Git history and quickly understand what changes were made and why.

This is also useful during code reviews and debugging because developers can identify relevant changes without opening every commit.

## How can poor commit messages cause issues later?

Poor commit messages can make the project history difficult to understand. A vague message such as `fixed stuff` does not explain what was fixed or which part of the project was changed.

Messages that are too detailed can also make the Git history difficult to scan. A good commit message should provide enough information to explain the change while remaining concise.

## Commit Message Practice

I created three commits to compare different commit message styles.

### 1. Vague commit message

`6991a42 fixed stuff`

This message is vague because it does not explain what was changed or why the change was made. Someone reading the Git history would need to inspect the commit to understand it.

### 2. Overly detailed commit message

`75dcf6d Updated commit message practice file by adding a new sentence explaining that this file is being used to test different Git commit message styles during my internship`

This message explains the change, but it contains more detail than necessary. It is difficult to scan quickly in the Git history.

### 3. Well-structured commit message

`2d21d2d Add note about clear commit messages`

This message is clear and concise. It uses an action word and explains exactly what was added without unnecessary information.

## Reflection

This exercise showed me that commit messages should balance clarity and conciseness. Vague messages do not provide enough information, while overly detailed messages make the Git history harder to read. A short and descriptive message makes it easier for both me and other developers to understand the purpose of a commit.
