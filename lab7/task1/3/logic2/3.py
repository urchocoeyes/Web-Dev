def lucky_sum(a, b, c):
  summ = 0
  list = [a, b, c, 13]
  for number in list[:list.index(13)]:
    summ += number
  return summ
    