def in1to10(n, outside_mode):
  outmode = True if n <= 1 or n >= 10 else False
  not_outmode = True if n in range(1, 11) else False
  return outmode if outside_mode == True else not_outmode
