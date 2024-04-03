def make_chocolate(small, big, goal):
  rem = goal % 5
  if (small + (big*5) < goal):
    return -1
  elif (rem <= small and goal - big*5 > 4):
    return rem + 5
  elif (rem <= small):
    return rem
  else:
    return -1