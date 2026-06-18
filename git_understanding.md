#what caused conflicts?
The conflict has occurred as the same section of the file has been modified in both the main branches along with a feature branch before they merged.


I created a new branch called 'conflict-test' and line was edited in README.md, then committed it. Then I went to 'main' and edited the *same line* in README.md differently and committed. It flagged a merge conflict when I tried to merge 'conflict-test' into 'main'. 


#how did I resolve it?
I used VS code to open README.md, then I 'Accepted Both Changes' option to keep both versions of the line and remove conflict. After saving the files, I went to GitHub Desktop and clicked "Continue Merge", completing the merge.

#what did I learn?

Merge conflict is caused when two branches change the same line of a file.
Conflict markers tell what's different between two versions.
Clear communication with tea members helps us to know who is working on what. 

