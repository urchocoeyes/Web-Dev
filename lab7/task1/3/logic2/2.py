def lone_sum(a, b, c):
  summ = 0
  summ += a if a not in [b, c] else 0
  summ += b if b not in [a, c] else 0
  summ += c if c not in [b, a] else 0
  return summ
