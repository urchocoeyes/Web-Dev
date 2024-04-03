def sum13(nums):
 cnt = 0
 for i in range(len(nums)):
   if nums[i] == 13 or (i - 1 != -1 and nums[i - 1] == 13):
     continue
   cnt += nums[i]
 return cnt