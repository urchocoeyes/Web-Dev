def make_bricks(small, big, goal):
  some = goal
  some -= 5 * min(big, goal / 5)
  return some - small <= 0