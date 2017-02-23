from django.shortcuts import render, redirect

from .models import Course, Comment

def index(request):
    classes = Course.objects.all().prefetch_related('comment_set')
    return render(request, 'classes/index.html', {'classes': classes})

def create(request):
    if request.method == 'POST':
        course = Course.objects.create(name=request.POST['name'], description=request.POST['description'])
        return redirect('classes:index')
    return redirect('classes:index')

def delete(request, id):
    course = Course.objects.get(id=id)
    if request.method == 'GET':
        return render(request, 'classes/delete.html', {'course': course})
    elif request.method == 'POST':
        course.comment_set.all().delete()
        course.delete()
        return redirect('classes:index')
    return redirect('classes:index')

def comment(request, id):
    course = Course.objects.get(id=id)
    Comment.objects.create(course= course, comment=request.POST['comment'])
    return redirect('classes:index')
