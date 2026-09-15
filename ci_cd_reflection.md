# CI/CD Reflection

## What is the purpose of CI/CD?

Continuous Integration (CI) helps developers automatically check their code whenever changes are pushed or a pull request is created.

It can run tests, linting, formatting checks, and other automated checks before code is merged.

Continuous Deployment or Continuous Delivery (CD) helps automate the process of preparing and releasing software after the code has passed the required checks.

The main purpose of CI/CD is to find problems early, reduce manual work, and make software changes safer and more consistent.

## How does automating style checks improve project quality?

Automated style checks help make sure that code and documentation follow the same standards.

They can detect formatting problems, Markdown issues, spelling mistakes, and other small errors before changes are merged.

This improves readability and consistency across the project.

It also reduces the amount of time reviewers need to spend checking simple style problems manually.

## What are some challenges with enforcing checks in CI/CD?

One challenge is that CI checks can fail because of configuration problems rather than problems in the actual code.

Developers also need to understand the errors produced by the tools so they can fix them correctly.

Another challenge is choosing useful checks without making the pipeline too slow.

If too many checks are added, developers may need to wait longer for pull request feedback.

Teams also need to keep CI configuration and dependencies updated.

## How do CI/CD pipelines differ between small projects and large teams?

Small projects usually have simpler CI/CD pipelines.

They may only run a few checks such as tests, linting, formatting, and build validation.

Large teams normally need more complex pipelines because many developers are contributing to the same codebase.

Large projects may include multiple test stages, security checks, code quality checks, build processes, deployment environments, and approval steps.

The main idea is the same in both cases: automatically check changes before they are accepted.

## What I implemented

I created a GitHub Actions CI workflow that runs Markdown linting and spell checking.

The workflow runs automatically for pull requests.

I used Markdownlint to check Markdown formatting and CSpell to check spelling.

I also configured Husky to run checks before a commit is created.

I opened a test pull request and confirmed that the automated GitHub Actions checks passed successfully.

This helped me understand how CI checks can detect problems before code is merged and how Git hooks can catch issues earlier on the developer's computer.
