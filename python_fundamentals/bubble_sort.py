import random
import time

def bubble_sort(list):
    start = time.time()
    while True:
        switch = False
        for index in xrange(len(list)):
            if index == len(list) -1:
                break
            if list[index] > list[index+1]:
                switch = True
                list[index], list[index+1] = (list[index+1], list[index])
        if not switch:
            end = time.time()
            time_elapsed = end - start
            print(list)
            print 'List sorted in ' + str(time_elapsed) + ' seconds'
            break

rand_vals = []
for i in xrange(100):
    rand_vals.append(int(random.randint(0,10000)))

bubble_sort(rand_vals)
