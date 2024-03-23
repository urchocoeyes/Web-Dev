def not_string(str):
  return (str if str[0:3] == 'not' and len(str) >=3 else "not" + str)
