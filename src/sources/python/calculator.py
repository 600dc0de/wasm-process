def calculator(a, b, operation):
    if operation == '+':
        return a + b
    elif operation == '-':
        return a - b
    elif operation == '*':
        return a * b
    elif operation == '/':
        return a / b if b != 0 else 'Деление на ноль'
    else:
        return 'Неизвестная операция'

print(calculator(10, 5, '+'))