from django.shortcuts import render

def show(request, color):
    if not color:
        path = 'tmnt.png'
    elif color == 'red':
        path = 'raphael.jpg'
    elif color == 'orange':
        path = 'michelangelo.jpg'
    elif color == 'purple':
        path = 'donatello.jpg'
    elif color == 'blue':
        path = 'leonardo.jpg'
    else:
        path = 'notapril.jpg'

    return render(request, 'turtles/show.html', {'ninja': path})
