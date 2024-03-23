def minn(string):
    return min(list(map(int, string.split())))
print(minn(input()))