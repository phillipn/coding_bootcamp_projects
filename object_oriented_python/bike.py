class Bike(object):
    def __init__(self, max_speed, price):
        self.max_speed = max_speed
        self.price = price
        self.miles = 0

    def display_info(self):
        print  '''This bike is priced at {} dollars. Max speed of {} with {} miles on it''' \
               .format(self.price, self.max_speed, self.miles)

    def ride(self):
        print 'Riding...'
        self.miles += 10

    def reverse(self):
        if self.miles >= 5:
            print 'Reversing...'
            self.miles -= 5
        elif self.miles > 0:
            print 'Reversing...'
            self.miles = 0
        else:
            print 'End of the line'


bike1  = Bike(100, 100)
bike2  = Bike(200, 200)
bike3  = Bike(300, 300)

bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.display_info()

bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse()
bike2.display_info()

bike3.reverse()
bike3.reverse()
bike3.reverse()
bike3.display_info()
