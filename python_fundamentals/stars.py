def stars(list):
    for item in list:
        print item * '*'
# stars([4, 6, 1, 3, 5, 7, 25])

def stars2(list):
    for item in list:
        if isinstance(item, str):
            print item[0].lower() * len(item)
        elif isinstance(item, int):
            print '*' * item

stars2([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])
