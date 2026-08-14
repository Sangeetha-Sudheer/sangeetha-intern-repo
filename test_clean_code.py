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

