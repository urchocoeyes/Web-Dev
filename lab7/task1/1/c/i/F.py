string_version = input()
integer_version = int(string_version)
result = ''
for i in range(len(string_version)):
    qaldyq = integer_version % 10
    integer_version //= 10
    result += str(qaldyq)
print(result)