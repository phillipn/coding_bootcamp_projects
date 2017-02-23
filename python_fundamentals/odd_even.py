def odd_even(n):
    for i in xrange(n):
        if i % 2 == 0:
            state = 'even'
        else:
            state = 'odd'

        print "Number is {}. This is an {} number.".format(i, state)

odd_even(2000)
