class MathDojo(object):
    def __init__(self):
        self.sum = 0

    def add(self, *args):
        for item in args:
            if type(item) is list:
                for i in item:
                    self.sum += i
            else:
                self.sum += item
        return self

    def subtract(self, *args):
        for item in args:
            if type(item) is list:
                for i in item:
                    self.sum -= i
            else:
                self.sum -= item
        return self


math = MathDojo()
print math.add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).sum
