import timeit

#FASTER!
def print_names(listOfObjs):
    for obj in listOfObjs:
        print obj['first_name'] + ' ' + obj['last_name']

def print_names2(listOfObjs):
    for obj in listOfObjs:
        print (' ').join(obj.values())

#timer = timeit.Timer(stmt="print_names([{'first_name':  'Michael', 'last_name' : 'Jordan'},{'first_name' : 'John', 'last_name' : 'Rosales'},{'first_name' : 'Mark', 'last_name' : 'Guillen'},{'first_name' : 'KB', 'last_name' : 'Tonel'}])", setup='from __main__ import print_names')
#timer2 = timeit.Timer(stmt="print_names2([{'first_name':  'Michael', 'last_name' : 'Jordan'},{'first_name' : 'John', 'last_name' : 'Rosales'},{'first_name' : 'Mark', 'last_name' : 'Guillen'},{'first_name' : 'KB', 'last_name' : 'Tonel'}])", setup='from __main__ import print_names2')

#print(timer.timeit())
#print(timer2.timeit())
print_names([
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
])
