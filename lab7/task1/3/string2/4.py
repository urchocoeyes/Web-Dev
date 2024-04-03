def count_code(str): # 0 1 2 3 4 5 -->len(str) = 6
  appearance = 0
  for i in range(len(str) - 3):
    if str[i] == 'c' and str[i + 1] == 'o' and \
    (str[i + 3] == 'e'):
      appearance += 1
  return appearance
