class Car(object):
    def __init__(self,price,speed,fuel,mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.set_tax()
        self.display_all()

    def set_tax(self):
        if self.price > 10000:
            self.tax = .15
        else:
            self.tax = .12
        return self

    def display_all(self):
        print 'Price: 2000\nSpeed: 35mph Fuel: Full\nMileage: 15mpg\nTax: 0.12'
        return self

car1 = Car(10,10,10,10)
car1.display_all().display_all()
