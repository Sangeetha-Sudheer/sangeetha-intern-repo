# Data Privacy & Confidentiality Reflection

## Key takeaways from Focus Bear's privacy and confidentiality requirements

Sensitive information must be handled carefully because Focus Bear works with user data and internal company information. Data should only be accessed when it is required for legitimate work, and it should not be shared with unauthorised people.

Confidential information can include user information, account details, authentication credentials, API keys, database credentials, internal company documents, source code that is not intended to be public, logs containing sensitive information, and other private business information.

## Best practices for handling confidential data

- Only access information that is required for the task.
- Do not share sensitive information through unsecured channels.
- Do not commit passwords, API keys, database credentials, encryption keys, or `.env` files to GitHub.
- Use environment variables or approved secret-management systems for credentials.
- Follow the principle of least privilege when granting access.
- Lock the computer when stepping away.
- Avoid copying sensitive production data into test environments.
- Check screenshots, logs, and terminal output before sharing them to ensure they do not expose credentials or personal information.
- Keep software and dependencies updated when appropriate.
- Delete sensitive information securely when it is no longer required.

## Responding to a suspected data breach

If I notice a possible data breach or accidental disclosure, I should not ignore it or try to hide it. I should stop further exposure where it is safe to do so, avoid modifying evidence unnecessarily, and report the incident to the appropriate Focus Bear supervisor or responsible team member as soon as possible.

I should provide clear information about what happened, what information may have been exposed, when it happened, and what actions I have already taken.

## How I can handle data securely in my daily work

In my backend development work, I can improve data security by checking files before committing them, keeping secrets in environment variables, reviewing `git status` before pushing changes, and making sure `.env` files and other sensitive files are excluded through `.gitignore`.

I should also avoid placing confidential information in logs, screenshots, GitHub issues, or documentation.

## Safe storage, sharing, and disposal

Sensitive information should be stored only in approved and secure locations. Access should be limited to people who genuinely need it.

When sensitive information has to be shared, I should use approved secure communication or file-sharing methods instead of public links or unsecured messages.

When information is no longer required, it should be deleted using the appropriate company process rather than left in local folders, downloads, temporary files, or repositories.

## Common privacy mistakes and how to avoid them

Some common mistakes include:

- Accidentally committing `.env` files or credentials to GitHub.
- Posting API keys or encryption keys in screenshots.
- Sharing production data in public channels.
- Giving more repository or system access than necessary.
- Leaving a computer unlocked.
- Copying sensitive information into personal notes or unapproved services.
- Logging confidential data unnecessarily.

These can be reduced by checking changes before committing, reviewing screenshots before uploading them, using `.gitignore`, using secure credential storage, and following least-privilege access.

## Security habit I will adopt

One security habit I will consistently use is reviewing `git status` and the staged changes before every commit.

Before pushing code, I will check that files such as `.env`, credentials, private keys, database dumps, or other sensitive information have not accidentally been included.

## Key learning / security measure I will implement

A key learning for me is that security is part of everyday development rather than something that is only considered after coding is finished.

I will continue using environment variables for secrets and make sure confidential values are never hard-coded or committed to the repository.
