class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def displayHealth(self):
        print '{} has a health of {}'.format(self.name, self.health)
        return self

an = Animal('bob')

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150

    def pet(self):
        self.health += 5
        return self

dog = Dog('a')
print dog.run().run().walk().pet().displayHealth()

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170

    def fly(self):
        self.health -= 10
        return self

    def displayHealth(self):
        print 'This is a dragon!'
        print '{} has a health of {}'.format(self.name, self.health)
        return self

dragon = Dragon('Mamby')
print dragon.run().run().walk().fly().displayHealth()
