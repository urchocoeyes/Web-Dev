import math

a, b = int(input()), int(input())
for i in range(a, b + 1):
    sqrt = int(math.sqrt(i))
    if sqrt ** 2 == i:
        print(i, end=' ')