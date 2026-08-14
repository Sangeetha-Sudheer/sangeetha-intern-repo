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

## 4.7 Refactoring Code for Simplicity

### Refactoring Technique

One useful refactoring technique is simplifying nested conditional logic. Deeply nested `if` statements can make code harder to read because the developer has to follow several levels of indentation to understand the result.

I refactored the following `check_discount()` function to make its control flow simpler.

### Original Code

```python
def check_discount(age, is_student):
    if age >= 65:
        return 20
    else:
        if is_student:
            return 15
        else:
            return 0

What Made the Original Code Complex?

The original function contains unnecessary nested if and else blocks. After the first condition returns a value, the remaining logic does not need to be inside an else.

The extra nesting makes the function longer and requires more effort to follow the control flow.

Refactored Code
def check_discount(age, is_student):
    if age >= 65:
        return 20


    if is_student:
        return 15


    return 0
What I Changed

I removed the unnecessary else blocks and used early returns.

The behaviour of the function remains the same:

Customers aged 65 or older receive a 20% discount.
Students receive a 15% discount.
Everyone else receives no discount.
Reflection
What made the original code complex?

I found the original function harder to read because the second condition was nested inside an else block even though the first condition already returned a value. The additional indentation made a simple decision structure look more complicated than necessary.

How did refactoring improve it?

After refactoring, the function has a flatter control flow and fewer unnecessary branches. I can now read each condition from top to bottom without following nested blocks. The code is shorter, easier to understand, and easier to modify or test while keeping the same behaviour.



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

## 4.10 Code Formatting & Style Guides

### Why Consistent Code Style Matters

Consistent formatting makes code easier to read, review, and maintain. When developers follow the same style rules, the codebase becomes more predictable and easier to work with.

I reviewed the Airbnb JavaScript Style Guide and focused on practices such as:
- using meaningful variable and function names
- keeping indentation and spacing consistent
- using `const` and `let` appropriately
- keeping imports organised
- writing readable functions and classes

### ESLint and Prettier Setup

I used the existing `nestjs-crud-demo` project in my repository.

The tools were already installed in the project.

I confirmed the installed versions using:

```bash
npx eslint --version
npx prettier --version
The versions were:

ESLint: v9.39.5
Prettier: 3.9.6

The project also already contained an eslint.config.mjs configuration file.

Running ESLint

I ran ESLint on the source code using:
npx eslint "src/**/*.{ts,js}"
The first ESLint run reported:

2 problems (1 error, 1 warning)

The issues were:

src/main.ts
Warning: a Promise was not awaited or explicitly handled.
Rule: @typescript-eslint/no-floating-promises
src/users/users.module.ts
Error: Prettier expected a comma to be inserted.
Rule: prettier/prettier

Running Prettier

I checked the formatting with:

npx prettier --check "src/**/*.{ts,js,json}"

Prettier reported:

[warn] src/users/users.module.ts
[warn] Code style issues found in the above file.

I fixed the formatting issue using:

npx prettier --write "src/users/users.module.ts"

After formatting, I ran the check again:

npx prettier --check "src/**/*.{ts,js,json}"

The result was:

All matched files use Prettier code style!
ESLint Result After Formatting

I ran ESLint again:

npx eslint "src/**/*.{ts,js}"

The result became:

1 problem (0 errors, 1 warning)

The formatting error in src/users/users.module.ts was fixed. The remaining warning was in src/main.ts for an unhandled Promise.

Reflection
Why is code formatting important?

Code formatting is important because it keeps the codebase consistent and easier to understand. It also makes code reviews simpler because developers can focus on the logic instead of inconsistent spacing or formatting.

What issues did the linter detect?

ESLint detected two issues during the first run. One was a formatting error in src/users/users.module.ts, where a comma was missing according to the Prettier rules. The other was a warning in src/main.ts because a Promise was not awaited or explicitly handled.

After running Prettier, the formatting error was fixed and ESLint reported only the remaining Promise warning.

Did formatting make the code easier to read?

Yes. Formatting made the code more consistent and easier to scan. Prettier automatically corrected the formatting in src/users/users.module.ts, which removed the style error and made the file follow the same formatting rules as the rest of the project.

