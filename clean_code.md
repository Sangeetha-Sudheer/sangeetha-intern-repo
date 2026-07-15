Understanding Clean Code Principles
Clean Code Principles
1. Simplicity
Keep code as modest as possible. Simple code is simpler to apprehend, test, plus maintain.
2. Readability
Code would be informal for other developers to read. Meaningful variable names, proper formatting, besides comments were essential progress readability.
3. Maintainability
Well-structured code agrees future developers to adjust or extend the program with smallest effort.
4. Consistency
Follow the constant coding style, naming conventions, plus project standards through the codebase.
5. Efficiency
Write code that makes well without building it gratuitously complex. Focus on writing clean code first, then enhance when essential.
Example of Messy Code:
```python
a=[1,2,3]
b=0
for i in a:
 b+=i
print(b)
```
Why is this difficult to read?
- Variable names might not define their purpose.
- Formatting is inconstant.
- There are no comments describing the code.
- It is tougher for additional developer to understand rapidly.

Cleaner Version:
```python
numbers = [1, 2, 3]
total = 0

for number in numbers:
    total += number

print(total)
```
Why is this better?
- Important variable names.
- Suitable indentation.
- Informal to understand.
- Simpler to maintain then encompass.

