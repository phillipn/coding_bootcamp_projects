from django.shortcuts import render, redirect
from django.db import IntegrityError
from django.contrib import messages

from ..login.models import User
from .models import Course, Comment, CourseStudents

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


def users_courses(request):
    if request.method == 'POST':
        user = User.objects.get(id=request.session['user']['id'])

        class_id = request.POST['class_id']
        course = Course.objects.get(id=class_id)
        try:
            CourseStudents.objects.create(user=user, course=course)
        except IntegrityError:
            messages.error(request, 'You are already enrolled in {}'.format(course.name))
            return redirect('classes:users_courses')
        else:
            messages.success(request, '{}, you have successfully enrolled in {}.'.format(user.first_name, course.name))

        return redirect('classes:users_courses')

    classes = Course.objects.all()
    return render(request, 'classes/users_courses.html', {'classes': classes})
