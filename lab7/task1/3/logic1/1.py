def cigar_party(cigars, is_weekend):
  return (is_weekend == True and cigars >= 40) or (is_weekend == False and cigars >= 40 and cigars <= 60) 
