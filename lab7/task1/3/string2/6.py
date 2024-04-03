def xyz_there(str):
  cnt = 0
  for i in range(len(str) - 2):
    if str[i] == 'x' \
    and str[i + 1] == 'y' and str[i + 2] == 'z':
      if str[i - 1] != '.':
        cnt += 1
  return True if cnt > 0 else False
