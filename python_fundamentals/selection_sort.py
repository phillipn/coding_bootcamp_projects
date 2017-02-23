import random
import time

def selectionSort(list):
    start = time.time()
    min = None
    for index in xrange(len(list)):
        for i in xrange(len(list[index:])):
            i += index
            if not min or list[i] < min:
                min = list[i]
                min_index = i
        list[min_index], list[index] = (list[index], list[min_index])
        min = None
    end = time.time()
    time_elapsed = end - start
    print(list)
    print 'List sorted in ' + str(time_elapsed) + ' seconds'

rand_vals = []
for i in xrange(100):
    rand_vals.append(int(random.randint(0,10000)))

selectionSort(rand_vals)
