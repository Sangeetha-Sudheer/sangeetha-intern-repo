
# 4.2 Naming Variables & Functions

## Best Practices

Clear variable and function names should explain what the code represents or what an operation does.

Good names should:

- describe the purpose of the value or function;
- avoid vague names such as `x`, `temp`, or `data` when a clearer name is possible;
- use consistent naming conventions;
- make code understandable without unnecessary comments.

## Original Example

In the original version, the names are too vague:

```python
def calc(a, b):
    x = a * b
    return x
```

The names `calc`, `a`, `b`, and `x` do not clearly explain what the function is calculating.

## Refactored Version

I renamed the function and variables so their purpose is clear:

```python
def calculate_order_total(item_price, quantity):
    order_total = item_price * quantity
    return order_total
```

The new names are better because:

- `calculate_order_total` explains what the function does.
- `item_price` explains what the first value represents.
- `quantity` explains what the second value represents.
- `order_total` explains the result of the calculation.

## Reflection

### What makes a good variable or function name?

A good name clearly describes the purpose of a variable or function. I should be able to understand what the code does without needing extra explanation.

Names should be descriptive but not unnecessarily long. They should also follow the naming conventions used by the project.

### What issues can arise from poorly named variables?

Poor names make code harder to understand, debug, review, and maintain.

For example, a variable named `x` does not tell another developer what value it contains. This can cause confusion and make mistakes more likely when the code is changed later.

### How did refactoring improve code readability?

The refactored version is easier for me to understand because the names explain the purpose of each value and operation.

Instead of trying to work out what `calc(a, b)` means, I can immediately understand that `calculate_order_total(item_price, quantity)` calculates the total price for an order.

## Implementation Evidence

I updated the naming example and reflection in `clean_code.md`.

Relevant naming-variable/function work can be seen in commit:

`fabe2c2`


