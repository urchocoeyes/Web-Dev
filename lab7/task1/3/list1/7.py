# def reverse3(nums):
#   for i in range(len(nums), -1, -1):
#     nums[len(nums) - i - 1] = nums[i] 
#   return nums
def reverse3(nums):
  l = []
  for i in range(len(nums) - 1, -1, -1):
    l.append(nums[i])
  return l
