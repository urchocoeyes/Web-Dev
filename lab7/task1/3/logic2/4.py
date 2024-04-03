def no_teen_sum(a, b, c):
  summ = 0
  summ += a if a not in [13, 14, 17, 18, 19] else 0
  summ += b if b not in [13, 14, 17, 18, 19] else 0
  summ += c if c not in [13, 14, 17, 18, 19] else 0
  return summ