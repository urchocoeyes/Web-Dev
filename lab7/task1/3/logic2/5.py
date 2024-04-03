def round_element(element):
  return (element + 5) // 10 * 10
  
def round_sum(a, b, c):
  return round_element(a) + round_element(b) + round_element(c)
# element = int(input())
# print((element + 5) // 10 * 10)