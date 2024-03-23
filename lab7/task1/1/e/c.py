def xor(string):
    x, y = map(int, string.split())
    if x == y:
        return 0
    else:
        return 1
print(xor(input()))