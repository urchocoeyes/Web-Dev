def last2(str):
  if len(str) <= 2:
    return 0
  substring = str[-2:]
  counter = 0
  for i in range(len(str) - 2):
    cumulative = str[i: i + 2]
    if cumulative == substring:
      counter += 1
  return counter
  