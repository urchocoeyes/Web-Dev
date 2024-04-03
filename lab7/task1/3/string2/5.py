def end_other(a, b):
  shorter, longer = (a, b) if len(a) <= len(b) else (b, a)
  return longer.lower().endswith(shorter.lower())
