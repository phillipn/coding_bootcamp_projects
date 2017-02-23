class Underscore(object):
    def map(self, arr, function):
        for index, value in enumerate(arr):
            arr[index] = function(value)
        return arr

    def reduce(self, arr, function):
        sum = 0
        for i in range(0, len(arr)):
            sum += function(arr, i)

    def find(self, arr, function):
        for i in range(0, len(arr)):
            if(function(arr[i])):
                return True
        return False

    def filter(self, arr, function):
        newArr = []
        for index, value in enumerate(arr):
            if function(arr[index]):
                newArr.append(value)
        return newArr

    def reject(self, arr, function):
        newArr = []
        for index, value in enumerate(arr):
            if not function(arr[index]):
                newArr.append(value)
        return newArr
# you just created a library with 5 methods!
# let's create an instance of our class
_ = Underscore() # yes we are setting our instance to a variable that is an underscore
times2 = _.map([1, 2, 3, 4, 5, 6], lambda x: x * 2)
#print times2

add = _.reduce([1, 2, 3, 4, 5, 6], lambda arr, x: arr[x])
#print add

evens = _.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)
#print evens

find_5 = _.find([1, 2, 3, 4, 3, 6], lambda x: x == 5)
#print find_5

odds = _.reject([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)
print odds
