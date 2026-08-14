# Understanding Clean Code Principles

## Clean Code Principles

### 1. Simplicity

Keep code as simple as possible. Simple code is easier to understand, test, and maintain.

### 2. Readability

Code should be easy for other developers to read. Meaningful variable names, proper formatting, and clear structure make code easier to understand.

### 3. Maintainability

Well-structured code allows future developers to modify or extend the program with less effort.

### 4. Consistency

Follow consistent coding styles, naming conventions, and project standards throughout the codebase.

### 5. Efficiency

Write code that performs well without making it unnecessarily complex. Focus on writing clear and correct code first, then optimize when necessary.

## Example of Messy Code

```python
a=[1,2,3]
b=0
for i in a:
 b+=i
print(b)
```

### Why is this difficult to read?

- The variable names do not clearly describe their purpose.
- The formatting is inconsistent.
- It is harder for another developer to quickly understand what the code is doing.
- The code could be made clearer by using descriptive variable names and consistent formatting.

## Cleaner Version

```python
numbers = [1, 2, 3]
total = 0

for number in numbers:
    total += number

print(total)
```

### Why is this better?

- `numbers` clearly describes the list being processed.
- `total` clearly describes the value being calculated.
- `number` is more descriptive than `i`.
- The indentation and spacing are consistent.
- The code is easier to understand and maintain.

4.2
## 4.2 Naming Variables & Functions

### Best Practices

Good variable and function names should clearly describe their purpose.

Useful naming practices include:

- Use meaningful and descriptive names.
- Avoid unclear names such as `x`, `data`, `temp`, or `stuff` unless the meaning is obvious.
- Use nouns for variables because they represent data.
- Use verbs for functions because functions perform actions.
- Follow the naming conventions of the programming language.
- Keep naming consistent throughout the project.

### Unclear Example

```python
def calc(a, b):
    c = a * b
    return c

x = 10
y = 5
z = calc(x, y)

print(z)
This example is difficult to understand because the names do not explain what the values represent. The function name calc also does not explain what calculation is being performed.

Refactored Version

def calculate_rectangle_area(length, width):
    area = length * width
    return area

rectangle_length = 10
rectangle_width = 5
rectangle_area = calculate_rectangle_area(
    rectangle_length,
    rectangle_width
)

print(rectangle_area)
Why the New Names Are Better

The new names make the purpose of the code clear without needing extra comments.

calculate_rectangle_area() clearly explains what the function does.
length and width explain what the parameters represent.
rectangle_length and rectangle_width show what the values belong to.
rectangle_area clearly describes the result.
Reflection
What makes a good variable or function name?

A good name clearly explains the purpose of the variable or function. It should be descriptive enough that another developer can understand the code without needing to guess what each value means.

What issues can arise from poorly named variables?

Poorly named variables make code harder to read, debug, review, and maintain. Developers may misunderstand the purpose of a value or spend extra time tracing how it is used.

How did refactoring improve code readability?

Refactoring improved readability because the new names explain the purpose of each value and operation. I can now understand that the function calculates the area of a rectangle without reading through the implementation in detail.

4.3
Writing Small, Focused Functions:

### Writing Small, Focused Functions

Small functions are easier to understand, test, reuse, and maintain because each function has one clear responsibility.

### Original Function

I started with this `process_order` function, which performs several different tasks inside one function:

```python
def process_order(customer, items):
    total = 0

    for item in items:
        total += item["price"]

    print("Customer:", customer)
    print("Items:", len(items))
    print("Total:", total)

    if total > 100:
        discount = total * 0.1
        total -= discount

    print("Final Price:", total)

##Refactored Version

def calculate_total(items):
    return sum(item["price"] for item in items)


def apply_discount(total):
    if total > 100:
        return total * 0.9
    return total


def display_order(customer, items, total):
    print("Customer:", customer)
    print("Items:", len(items))
    print("Final Price:", total)


def process_order(customer, items):
    total = calculate_total(items)
    total = apply_discount(total)
    display_order(customer, items, total)

What Each Function Does
calculate_total() has one responsibility: calculating the total price of the items.
apply_discount() handles the discount rule and returns the final total.
display_order() is responsible only for displaying the order information.
process_order() coordinates the smaller functions to complete the overall order process.
Reflection

The original function was harder to maintain because it handled calculation, discount logic, and output in one place. If I needed to change the discount rule or the way order information was displayed, I would have to modify the same function and risk affecting unrelated behaviour.

After refactoring, I found the code easier to read because each function name clearly describes its purpose. The main process_order() function now shows the overall workflow without containing all of the implementation details.

Splitting the function also improves testing. I can test calculate_total() independently with different item lists and test apply_discount() separately with totals above and below 100. This makes it easier for me to identify which part of the code is causing a problem if a test fails.

## 4.5 Commenting & Documentation

### Best Practices

Good comments should explain why a piece of code exists or provide context that is not obvious from the code itself.

Comments should:

- Be clear and concise.
- Explain important decisions or unusual behaviour.
- Be kept up to date when the code changes.
- Avoid repeating information that is already obvious from the code.
- Be used when extra context would help another developer understand the code.

### Poorly Commented Code

```python
# Add 1 to x
x = x + 1

# Check if x is greater than 10
if x > 10:
    # Print big
    print("Big")
Improved Version

retry_count = retry_count + 1

# Stop retrying after the maximum number of attempts has been reached.
if retry_count > 10:
    print("Maximum retry attempts reached")
The improved version uses a meaningful variable name and only includes a comment where extra context is useful. The comment explains the reason for the condition instead of repeating the code.

Reflection
When should I add comments?

I should add comments when the reason behind a piece of code is not obvious from the code itself. Comments are useful for explaining business rules, unusual decisions, workarounds, or behaviour that another developer may not understand immediately.

I should also use documentation for public functions or APIs when other developers need to understand how to use them.

When should I improve the code instead of adding comments?

I should improve the code when a comment is only being used to explain confusing variable names or complicated logic. In those situations, it is better to use clearer names, smaller functions, or simpler control flow.

For example, changing x to retry_count makes the purpose of the variable much clearer without needing a comment.

This task showed me that comments should support readable code, not replace it.


---

Avoiding Code Duplication (DRY Principle)
What is the DRY Principle?

The "Don't Repeat Yourself" (DRY) principle conditions that every piece of knowledge or logic should occur in only one place in the codebase. Resaying the similar code in various locations makes care more hard and surges the likelihood of bugs.

Example
Before Refactoring
```python
numbers1 = [80, 90, 100]
average1 = sum(numbers1) / len(numbers1)

numbers2 = [70, 85, 95]
average2 = sum(numbers2) / len(numbers2)
```

After Refactoring

```python
def calculate_average(numbers):
    return sum(numbers) / len(numbers)

numbers1 = [80, 90, 100]
numbers2 = [70, 85, 95]

average1 = calculate_average(numbers1)
average2 = calculate_average(numbers2)
```

Reflection

What were the issues with duplicated code?
Duplicated code sorts software harder to maintain as the same logic must be updated in numerous places. It also rises the chance of presenting inconsistent behaviour or bugs when one copy is altered but another is not.

How did refactoring improve maintainability?
Refactoring stimulated the repeated logic into a returnable function. This types the code simpler to read, lessens duplication, recovers consistency, and brands future changes simpler as updates only need to be complete in one location.


---

## Handling Errors & Edge Cases

### Why Error Handling Matters

Error handling makes software more reliable because it prevents unexpected inputs from causing crashes or incorrect behaviour. It also gives users and developers clearer information about what went wrong.

### Guard Clauses

Guard clauses check invalid conditions at the beginning of a function and stop the function early. This keeps the main logic easier to read and prevents invalid data from continuing through the program.

### Function I Refactored

I used the `process_order(items, customer_email)` function from my repository.

#### Original Function

```python
def process_order(items, customer_email):
    total = calculate_order_total(items)
    discounted_total = apply_discount(total)
    send_receipt(customer_email, discounted_total)

    return discounted_total

###Refactored Function

def process_order(items, customer_email):
    if not items:
        raise ValueError("Order must contain at least one item.")

    if not customer_email or "@" not in customer_email:
        raise ValueError("A valid customer email is required.")

    total = calculate_order_total(items)
    discounted_total = apply_discount(total)
    send_receipt(customer_email, discounted_total)

    return discounted_total

### Problems and Edge Cases

The original `process_order(items, customer_email)` function assumes that all inputs are valid.

Problems I identified:
- `items` could be empty or `None`.
- `customer_email` could be empty.
- An invalid email address could be passed to the function.
- The function starts processing the order without validating these inputs first.

The refactored function uses guard clauses to validate the inputs before processing the order.

### Reflection

The original function did not handle invalid or missing inputs before calculating the order total and sending the receipt. This could cause unexpected errors or allow the function to continue with invalid data.

I added guard clauses at the beginning of the function. The first check ensures that the order contains at least one item. The second check ensures that a customer email is provided and contains an `@` symbol. If either condition is invalid, the function raises a clear `ValueError` instead of continuing.

Handling these errors improves reliability because invalid inputs are detected early and the caller receives a meaningful error message. It also keeps the normal processing logic simple and easier to understand.

I committed and pushed these changes to GitHub.

Refactoring Code for Simplicity

Common Refactoring Techniques
Some common refactoring techniques include:
- Getting repeated code into reusable functions.
- Renaming variables plus functions to mend readability.
- Reduction deeply nested `if` statements by means of guard clauses.
- Breaking large functions into smaller, focused functions.
- Eliminating duplicate or needless code.
- Streamlining complex conditional logic.

Example
Before Refactoring

```python
def check_discount(age, is_student):
    if age >= 65:
        return 20
    else:
        if is_student:
            return 15
        else:
            return 0
```

After Refactoring
```python
def check_discount(age, is_student):
    if age >= 65:
        return 20

    if is_student:
        return 15

    return 0
```

Reflection
What made the original code complex?
The original function controlled avoidable nested `if` statements, making the logic harder to read. The extra indentation reduced readability without adding any benefit.

How did refactoring improve it?
The refactored version consumptions early returns to shorten the control flow. The code is simpler to understand, involves less nesting, besides is simpler to uphold while producing the similar result.



4.9

## 4.9 Writing Unit Tests for Clean Code

### Why Unit Tests Are Important

Unit tests verify that individual functions behave as expected. They help detect bugs early, make refactoring safer, and give developers confidence that existing behaviour still works after code changes.

### Testing Framework

I used **pytest** for this task because it has simple syntax and makes it easy to write and run Python unit tests.

### Function Tested

I tested the `calculate_total(items)` function.

The function calculates the total price of all items in an order.

### Test File

I created `test_clean_code.py` with three tests:

- A test with multiple items.
- A test with one item.
- A test with an empty list.

```python
from order_utils import calculate_total


def test_calculate_total_multiple_items():
    items = [
        {"price": 10},
        {"price": 20},
        {"price": 30}
    ]

    assert calculate_total(items) == 60


def test_calculate_total_single_item():
    items = [
        {"price": 25}
    ]

    assert calculate_total(items) == 25


def test_calculate_total_empty_list():
    items = []

    assert calculate_total(items) == 0

Test Result

I ran:

python3 -m pytest test_clean_code.py

All three tests passed successfully.

Reflection

Writing unit tests helped me check the behaviour of calculate_total() independently from the rest of the program. Testing different inputs made it easier to confirm that the function works correctly for multiple items, one item, and an empty list.

The empty-list test was an important edge case. It confirmed that the function returns 0 rather than failing when there are no items.

Unit tests help keep code clean because they make future changes safer. If I refactor the function later, I can rerun the tests to check that its behaviour has not changed unexpectedly.

I created the test file, ran the tests successfully, and will commit and push the changes to GitHub.

Code Formatting & Style Guides
Why Is Consistent Code Style Important?
Consistent code formatting marks software calmer to read, understand, then preserve. When all developer obeys the same style guide, code assessments become faster, bugs are calmer to classify, plus team collaboration recovers. A reliable style also decreases needless formatting discussions so developers can effort on functionality.

 Airbnb JavaScript Style Guide
The Airbnb JavaScript Style Guide is one of the maximum widely old coding standards for JavaScript projects. It offers suggestions for:
- Naming variables and functions obviously.
- Reliable indentation plus spacing.
- Using `const` and `let` appropriately.
- Systematising imports.
- Writing readable functions plus classes.
- Following modern JavaScript best practices.

ESLint and Prettier
ESLint
ESLint is a static analysis tool that detects coding issues such as:
- Unused variables.
- Missing semicolons (depending on configuration).
- Incorrect variable declarations.
- Potential bugs.
- Violations of coding standards.

Prettier
Prettier automatically formats code by applying consistent:

- Indentation.
- Line spacing.
- Bracket placement.
- Quote style.
- Line wrapping.

Using ESLint together with Prettier helps maintain a clean and consistent codebase.

Reflection
Why is code formatting important?
Codes formatting recovers readability, makes collaboration calmer, and helps uphold a consistent coding standard past a project. Well-formatted code is simpler to review, debug, al well as maintain.

What issues did the linter detect?
Linters usually detect idle variables, changeable formatting, missing or unnecessary syntax, plus code that does not follow the project's style guide. These warnings help classify problems before the code is complex.

Did formatting make the code easier to read?
Yes. Constant formatting better readability by creating the code more ordered and predictable. It also reduced visual clutter, permitting the logic of the program to stand out more obviously.
