def sum67(nums):
  summ = 0
  flag = False
  
  for num in nums:
    if num == 6: # после каждого 6 обязательно одна семерка появляется
      flag = True
      continue
    if num == 7 and flag:
      flag = False
      continue
    if not flag:
      summ += num
  return summ
      