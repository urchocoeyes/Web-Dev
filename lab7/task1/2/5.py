def is_leap(year):
    flag = False
    flag = True if (year % 4 == 0 and year % 100 != 0 or year % 400 == 0) else False
    return flag

year = int(input())
print(is_leap(year))