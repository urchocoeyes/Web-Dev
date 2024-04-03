# def max_end3(nums):
#   maxx = max(nums[0], nums[-1])
#   for i in range(len(nums)):
#     nums[i] = maxx
#   return nums
def max_end3(nums):
  return [nums[0]] * len(nums) if nums[0] > nums[-1] else [nums[-1]] * 3
