
import random

head_count = 0
tail_count = 0

for i in xrange(5000):
    toss = round(random.random())
    if toss == 1:
        toss = 'head'
        head_count += 1
    else:
        toss = 'tail'
        tail_count += 1
    print "Attempt #{}: Throwing a coin... It's a {}! ... Got {} head(s) so far and {} tail(s) so far.".format(i, toss, head_count, tail_count)
print 'Ending the program, thank you!'
