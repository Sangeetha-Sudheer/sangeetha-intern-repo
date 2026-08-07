# Git Bisect Reflection

## What does git bisect do?

Git bisect helps find the commit that introduced a bug. It uses a binary search between a known good commit and a known bad commit. Instead of checking every commit manually, Git moves through the commit history and asks me to mark each tested commit as good or bad.

## My Test Scenario

I created a simple Python file called `bisect_demo.py` with a multiplication function. I had an earlier commit where the multiplication function worked correctly.

The known good commit was:

`923bea4` - Add working multiplication program

I later introduced a bug in the multiplication function. The bad commit was:

`752c6b8` - Introduce bug in multiply function

I ran:

`git bisect start`

Then I marked the bad commit:

`git bisect bad 752c6b8`

Then I marked the known working commit:

`git bisect good 923bea4`

Git bisect compared the commits and returned:

`752c6b8461390953d43f930177829c5484c7aff5 is the first bad commit`

This confirmed that the commit "Introduce bug in multiply function" introduced the problem.

After finishing the test, I used:

`git bisect reset`

to return the repository to its normal state.

## When would I use git bisect?

I would use git bisect when something that previously worked suddenly stops working and I do not know which commit caused it. This would be useful in a real project where many changes have been committed and manually checking every commit would take a long time.

## Git Bisect vs Manual Commit Review

Before learning git bisect, I would probably look through commits one by one and try to find where the code changed. This can become slow when there are many commits.

Git bisect is more efficient because it reduces the number of commits that need to be tested. I found it useful because Git was able to identify the exact commit that introduced the bug instead of me manually searching through the whole commit history.
