n = int(input())
array = list(map(int, input().split()))
for i in range(n - 1, -1, -1):
    print(array[i], end=' ')
