# 3.3 Understanding git bisect

## What does git bisect do?

`git bisect` helps identify the exact commit that introduced a bug.

It uses a binary search approach. I mark one known working commit as `good` and one known broken commit as `bad`. Git then checks commits between them and asks me to test each one.

Based on whether each tested commit is good or bad, Git reduces the search range until it finds the first bad commit.

## My Test Scenario

I created a small Python test scenario using `bisect_demo.py`.

I made a series of commits and introduced a bug in one of them.

The bug changed the multiplication behaviour in the program, which caused the output to become incorrect.

I then used `git bisect` to find the commit where the bug was introduced.

## Commands I Used

I started the bisect process with:

```bash
git bisect start
```

I marked the broken commit as bad:

```bash
git bisect bad 752c6b8
```

I marked an earlier working commit as good:

```bash
git bisect good 923bea4
```

Git then checked commits between the known good and bad commits.

For each commit, I ran:

```bash
python3 bisect_demo.py
```

After checking the program result, I marked the commit as either:

```bash
git bisect good
```

or:

```bash
git bisect bad
```

I repeated this until Git identified the first bad commit.

## Commit That Introduced the Bug

The first bad commit identified by `git bisect` was:

`752c6b8`

This was the commit where I introduced the bug in the multiplication function.

## Resetting git bisect

After finding the faulty commit, I ended the bisect session using:

```bash
git bisect reset
```

This returned my repository to the branch and commit I was using before the bisect process started.

## When would I use git bisect in real-world debugging?

I would use `git bisect` when a feature used to work correctly but is now broken and I do not know which commit caused the problem.

It would be especially useful when many commits have been made between the last known working version and the current broken version.

Instead of reviewing every commit manually, I can use `git bisect` to narrow down the problem much faster.

## How does git bisect compare with manually reviewing commits?

Manually checking every commit can take a long time when there are many commits.

`git bisect` is more efficient because it uses binary search. It repeatedly reduces the number of possible commits until the first bad commit is found.

This makes debugging faster and gives me a clear commit to investigate.

## CLI Experience

I used the Git command line interface for this exercise.

Using the CLI helped me understand the individual `git bisect` steps clearly because I could see when I marked commits as good or bad and when Git identified the first bad commit.

## Evidence

I attached a screenshot in Issue #61 showing the `git bisect` commands, the testing steps, and the first bad commit that Git identified.
