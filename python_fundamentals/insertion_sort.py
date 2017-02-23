import random
import time

def insertion_sort(arr):
    start = time.time()
    for i, item in enumerate(arr):
        if i == 0:
            continue
        while i > 0:
            if arr[i] < arr[i-1]:
                arr[i-1], arr[i] = (arr[i], arr[i-1])
            i -= 1
    end = time.time()
    time_elapsed = end - start
    print "List sorted in " + str(time_elapsed) + " seconds."
    return arr

rand_vals = []
for i in xrange(100):
    rand_vals.append(int(random.randint(0,10000)))

print insertion_sort(rand_vals)
