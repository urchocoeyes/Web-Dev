n = int(input())
array = list(map(int, input().split()))
flag = False
for i in range(1, n):
    if array[i - 1] * array[i] > 0:
        flag = True
        break
print('YES' if flag else "NO")
