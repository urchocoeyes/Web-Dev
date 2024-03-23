def array_front9(nums):
    within_interval = 1
    for i in range(len(nums)):
      if within_interval > 4: 
        break
      else:
          within_interval += 1
          if nums[i] == 9:
            return True
    return False
