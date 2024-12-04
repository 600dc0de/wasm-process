from datetime import datetime

def days_until(target_date):
    target = datetime.strptime(target_date, '%Y-%m-%d')
    today = datetime.today()
    return (target - today).days

print(days_until('2024-12-31'))