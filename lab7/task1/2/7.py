def power(a, b, m):
    return pow(a, b) % m
a, b, m = int(input()), int(input()), int(input())
print(pow(a, b), power(a, b, m), sep='\n')