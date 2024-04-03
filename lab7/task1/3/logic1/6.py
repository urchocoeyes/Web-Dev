def alarm_clock(day, vacation):
  v = '10:00' if day in range(1, 6) else 'off'
  nv = '7:00' if day in range(1, 6) else '10:00'
  return v if vacation else nv
  
