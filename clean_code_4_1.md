# 4.1 Understanding Clean Code Principles

## Clean Code Principles

### Simplicity

Keep code as simple as possible. Simple code is easier to understand, test, and maintain.

### Readability

Code should be easy for other developers to read. Meaningful variable names, clear formatting, and a logical structure improve readability.

### Maintainability

Well-structured code is easier to modify, fix, and extend in the future.

### Consistency

Developers should follow consistent naming conventions, formatting rules, and project standards throughout the codebase.

### Efficiency

Code should perform its task effectively without unnecessary complexity or premature optimisation.

## Messy Code Example

```python
a=[1,2,3]
b=0

for i in a:
    b+=i

print(b)
```

### Why is this difficult to read?

The code works, but it is harder to understand because:

- the variable names `a`, `b`, and `i` do not clearly describe their purpose;
- spacing and formatting are inconsistent;
- another developer has to spend more time working out what the code is doing.

## Cleaner Version

```python
numbers = [1, 2, 3]
total = 0

for number in numbers:
    total += number

print(total)
```

### Why is this better?

The cleaner version is easier to understand because:

- `numbers` clearly describes the list being processed;
- `total` clearly explains the value being calculated;
- `number` is clearer than `i`;
- indentation and spacing are consistent;
- the overall structure is easier to read and maintain.

## Reflection

This task helped me understand that clean code is not only about making code work. It is also about making the code easy for other developers to understand and change.

Using simple logic, clear names, consistent formatting, and a readable structure makes the code easier to maintain.

The messy example was harder to understand because the variable names were vague and the formatting was inconsistent. After rewriting it, the purpose of each variable became clearer and the code became easier to follow.

## Implementation Evidence

I updated the clean code principles, messy example, cleaner rewrite, and explanations for Issue #64.
