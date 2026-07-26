Identifying and Fixing Code Smells
What Are Code Smells?
Code smells are signs that code may be tough to understand, maintain, test, or extend. They do not continuously mean the code is incorrect, but they frequently designate that refactoring could recover the design.

Common code smells include:
- Magic numbers along with strings
- Long functions
- Duplicate code
- Large classes
- Deeply nested conditionals
- Commented-out code
- Inconsistent naming

1. Magic Numbers and Strings
Before Refactoring
```python
def calculate_discount(total):
    if total > 100:
        return total * 0.9
    return total
```

The values `100` and `0.9` are hardcoded and their meaning is not immediately clear.

After Refactoring
```python
DISCOUNT_THRESHOLD = 100
DISCOUNT_RATE = 0.10

def calculate_discount(total):
    if total > DISCOUNT_THRESHOLD:
        return total * (1 - DISCOUNT_RATE)

    return total
```

By means of named constants builds the purpose of both value clear plus permits future updates to be made in one place.
2. Long Functions
Before Refactoring
```python
def process_order(items, customer_email):
    total = sum(item["price"] for item in items)

    if total > 100:
        total *= 0.9

    print(f"Sending receipt to {customer_email}")
    print(f"Order total: {total}")

    return total
```
This function calculates the total, employs a discount, also sends a receipt.
Refactoring

```python
def calculate_order_total(items):
    return sum(item["price"] for item in items)


def apply_discount(total):
    if total > DISCOUNT_THRESHOLD:
        return total * (1 - DISCOUNT_RATE)

    return total


def send_receipt(customer_email, total):
    print(f"Sending receipt to {customer_email}")
    print(f"Order total: {total}")


def process_order(items, customer_email):
    total = calculate_order_total(items)
    discounted_total = apply_discount(total)
    send_receipt(customer_email, discounted_total)

    return discounted_total
```

Ending the function into smaller functions gives each function one clear responsibility.
3. Duplicate Code

Before Refactoring
```python
student_scores = [80, 90, 100]
student_average = sum(student_scores) / len(student_scores)

employee_scores = [70, 85, 95]
employee_average = sum(employee_scores) / len(employee_scores)
```
After Refactoring
```python
def calculate_average(scores):
    if not scores:
        return 0

    return sum(scores) / len(scores)


student_average = calculate_average([80, 90, 100])
employee_average = calculate_average([70, 85, 95])
```
The repeated calculation is now controlled by one reusable function.
4. Large Classes
Before Refactoring
```python
class UserManager:
    def create_user(self, name):
        print(f"Creating user: {name}")

    def send_email(self, email):
        print(f"Sending email to: {email}")

    def generate_report(self):
        print("Generating report")
```

This class handles user management, email communication, and reporting.

After Refactoring
```python
class UserService:
    def create_user(self, name):
        print(f"Creating user: {name}")

class EmailService:
    def send_email(self, email):
        print(f"Sending email to: {email}")

class ReportService:
    def generate_report(self):
        print("Generating report")
```
Unravelling responsibilities makes the classes calmer to understand, test, plus maintain.

5. Deeply Nested Conditionals

Before Refactoring
```python
def access_dashboard(user):
    if user is not None:
        if user["is_active"]:
            if user["is_admin"]:
                return "Access granted"

    return "Access denied"
```

After Refactoring
```python
def access_dashboard(user):
    if user is None:
        return "Access denied"

    if not user["is_active"]:
        return "Access denied"

    if not user["is_admin"]:
        return "Access denied"

    return "Access granted"
```
Guard clauses moderate nesting plus make the control flow simpler to follow.

6. Commented-Out Code

Before Refactoring
```python
def greet_user(name):
    # print("Starting greeting")
    print(f"Hello, {name}")
    # print("Greeting completed")
```

After Refactoring
```python
def greet_user(name):
    print(f"Hello, {name}")
```

Unused code would be detached instead of being left commented out. Preceding versions can be healthier through Git history if needed.

7. Inconsistent Naming
Before Refactoring
```python
def calc(x, y):
    result_value = x + y
    return result_value
```

After Refactoring
```python
def calculate_total(first_value, second_value):
    total = first_value + second_value
    return total
```

Meaningful and consistent names make the code easier to understand.

Reflection
What code smells did I find?
I identified magic numbers, long functions, duplicate code, a class with too numerous tasks, intensely nested conditionals, commented-out code, then unclear naming. These issues completed the examples harder to understand then maintain.

How did refactoring improve readability and maintainability?
Refactoring better the code by presenting descriptive constants, lesser functions, reusable logic, focused classes, guard clauses, as well as clearer names. All section now has an added obvious purpose, then future modifications can be made with less risk of moving unrelated behaviour.

How can avoiding code smells make future debugging easier?
Clean plus focused code types it easier to discover the source of a problem. Reduced functions plus classes can be verified independently, clear names make the program calmer to follow, besides removing duplication stops the same bug from looking in several places.

