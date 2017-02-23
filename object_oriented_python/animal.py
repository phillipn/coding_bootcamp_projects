class Animal(object):
    h = 100

    def __init__(self, name):
        self.name = name
        self.health = self.h

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def displayHealth(self):
        print '{} has a health of {}'.format(self.name, self.health)
        return self

class Dog(Animal):
    h = 150

    def pet(self):
        self.health += 5
        return self

class Dragon(Animal):
    h = 170

    def fly(self):
        self.health -= 10
        return self

    def displayHealth(self):
        print 'This is a dragon!'
        print '{} has a health of {}'.format(self.name, self.health)
        return self

dragon = Dragon('Mamby')
print dragon.run().run().walk().fly().displayHealth()
