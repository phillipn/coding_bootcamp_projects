import timeit
# THE TWO SETUPS BELOW WILL EXECUTE UPON RUNNING THIS FILE AND PRINT THE TOTAL TIME
setup1 ='''
def exponentsOddGen(n):
   for i in (k**2 for k in xrange(1, n, 2)):
       pass
#
exponentsOddGen(1000)
'''

#print(timeit.timeit(setup=setup1, number=1000000))

setup2 ='''
def exponentsOddComp(n):
   for i in [k**2 for k in xrange(1, n, 2)]:
       pass

exponentsOddComp(1000)
'''

#print(timeit.timeit(setup=setup2, number=1000000))

# THE CODE BELOW WILL NEED TO BE PASTED INTO THE PYTHON SHELL
#__main__ refers to the open python terminal session. You need to import this function because the timieit function creates own scope
import timeit

def exponentsOddComp(n):
   for i in [k**2 for k in xrange(1, n, 2)]:
       pass

def exponentsOddGen(n):
   for i in (k**2 for k in xrange(1, n, 2)):
       pass

timer2 = timeit.Timer(stmt='exponentsOddComp(10000000)', setup='from __main__ import exponentsOddComp')
timer = timeit.Timer(stmt='exponentsOddGen(10000000)', setup='from __main__ import exponentsOddGen')
print timer2.timeit(number=1)
print timer.timeit(number=1)


# ASSUMING WE WANTED TO IMPORT THE SAID FUNCTION FROM ITS FILE EXPONENTS.PY, WE COULD DO THAT
import timeit
timer = timeit.Timer(stmt='exponentsOddGen(10000)', setup='from exponents import exponentsOddGen')
timer2 = timeit.Timer(stmt='exponentsOddComp(10000)', setup='from exponents import exponentsOddComp')
print timer.timeit(number=100)
print timer2.timeit(number=100)

# AN ALTERNATIVE FOR TETSING SHORTER SNIPPETS IS TO USE THE TERMINAL COMMAND FOR TESTIT
# python -m timeit "100*'string'"
# 1000000 loops, best of 3: 0.222 usec per loop

# python -m timeit "''.join(['string' for _ in range(100)])"
# 100000 loops, best of 3: 6.9 usec per loop

# python -m timeit "result = ''" "for i in range(100):" "  result = result + 'string'"
# 100000 loops, best of 3: 13.1 usec per loop
