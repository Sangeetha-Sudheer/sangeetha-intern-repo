#what caused conflicts?
The conflict has occurred as the same section of the file has been modified in both the main branches along with a feature branch before they merged.


I created a new branch called 'conflict-test' and line was edited in README.md, then committed it. Then I went to 'main' and edited the *same line* in README.md differently and committed. It flagged a merge conflict when I tried to merge 'conflict-test' into 'main'. 


#how did I resolve it?
I used VS code to open README.md, then I 'Accepted Both Changes' option to keep both versions of the line and remove conflict. After saving the files, I went to GitHub Desktop and clicked "Continue Merge", completing the merge.

#what did I learn?

Merge conflict is caused when two branches change the same line of a file.
Conflict markers tell what's different between two versions.
Clear communication with tea members helps us to know who is working on what. 

Git Pull Request Reflection

Why are Pull Requests important in a team workflow?
Pull Requests let developers to review code beforehand it is merged into the main branch. They inspire collaboration, benefit catch bugs early, recover code quality, then provide a history of why changes were built.

What makes a well-structured Pull Request?
A good Pull Request has a pure title, a short description of the changes, small, motivated commits, plus clarifies the commitment of the work. It should be informal for reviewers to recognise plus test.

What did you learn from reviewing an open-source Pull Request?
I studied that code assessments include more than examination whether code works. Reviewers argue design decisions, coding style, readability, testing, along with potential improvements earlier positive changes. This collaborative process benefits uphold high-quality software.

