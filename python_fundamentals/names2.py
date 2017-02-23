import timeit

def print_names(obj):
    for key, val in obj.items():
        print key
        for index, obj2 in enumerate(val):
            print str(index) + ' - ' + obj2['first_name'] + ' ' + obj2['last_name'] + ' - ' + str(len(obj2['last_name'] + obj2['first_name']))

#timer = timeit.Timer(stmt="print_names({\
#'Students': [\
#     {'first_name':  'Michael', 'last_name' : 'Jordan'},\
#     {'first_name' : 'John', 'last_name' : 'Rosales'},\
#     {'first_name' : 'Mark', 'last_name' : 'Guillen'},\
#     {'first_name' : 'KB', 'last_name' : 'Tonel'}\
#  ],\
# 'Instructors': [\
#     {'first_name' : 'Michael', 'last_name' : 'Choi'},\
#     {'first_name' : 'Martin', 'last_name' : 'Puryear'}\
#  ]\
# })", setup='from __main__ import print_names')

#print(timer.timeit())

print_names({
'Students': [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
],
'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
]
})
