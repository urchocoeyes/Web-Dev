def cat_dog(str):
  cnt_cat = cnt_dog = 0
  # return str.count('dog') == str.count('cat')
  for i in range(len(str) - 2): # if len(str) = 6 it will count by index up to [0 1 2 3 4)
    if str[i] == 'c' and str[i + 1] == 'a' and str[i + 2] == 't':
      cnt_cat += 1
    elif str[i] == 'd' and str[i + 1] == 'o' and str[i + 2] == 'g':
      cnt_dog += 1
  return cnt_dog == cnt_cat
    
