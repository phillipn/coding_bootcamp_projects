from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages

from .models import User, Post, Comment

def home(request):
    return render(request, 'users/home.html')

def login(request):
    if request.method == 'POST':
        response = User.objects.login(request.POST)
        if 'login_errors' in response:
            messages.error(request, response['login_errors'], extra_tags='login_error')
            return redirect('users:login')
        elif 'success' in response:
            request.session['user'] = response['success']
            messages.success(request, 'You have been logged in')
            return redirect('users:dashboard')
    return render(request, 'users/login.html')

def register(request):
    if request.method == 'POST':
        response = User.objects.register(request.POST)
        if 'registration_errors' in response:
            for error in response['registration_errors']:
                messages.error(request, error, extra_tags='register_error')
            return redirect('users:login')
        elif 'success' in response:
            request.session['user'] = response['success']
            messages.success(request, 'Welcome to the club, {}!'.format(response['success']['first_name']))
        return redirect('users:dashboard')
    return render(request, 'users/register.html')

def dashboard(request):
    users = User.objects.all()
    return render(request, 'users/dashboard.html', {'users': users})

def new(request):
    if not request.session['user']['user_level'] == 'Admin':
        return redirect(request, 'users:register')
    if request.method == 'POST':
        response = User.objects.register(request.POST)
        if 'registration_errors' in response:
            for error in response['registration_errors']:
                messages.error(request, error)
        elif 'success' in response:
            messages.success(request, 'User added')
        return redirect('users:dashboard')
    return render(request, 'users/add_user.html')

def edit(request, id):
    user = User.objects.get(id=id)
    return render(request, 'users/edit.html', {'user':user})

def user_edit(request):
    if 'user' in request.session:
        user = User.objects.get(id=request.session['user']['id'])
        return render(request, 'users/user_edit.html', {'user':user})
    else:
        return redirect('users:login')

def update_description(request, id):
    user = User.objects.get(id=id)
    if request.method == 'POST':
        response = User.objects.update_description(request.POST, user)
        if 'errors' in response:
            for error in response['errors']:
                messages.error(request, error)
        elif 'success' in response:
            messages.success(request, response['success'])
            return redirect('users:dashboard')
    return redirect('users:edit', id=id)

def update_password(request, id):
    if not request.session['user']['user_level'] == 'Admin':
        return redirect(request, 'users:dashboard')
    user = User.objects.get(id=id)
    if request.method == 'POST':
        response = User.objects.update_password(request.POST, user)
        if 'errors' in response:
            for error in response['errors']:
                messages.error(request, error)
        elif 'success' in response:
            messages.success(request, response['success'])
            return redirect('users:dashboard')
    return redirect('users:edit', id=id)

def update_user(request, id):
    if not request.session['user']['user_level'] == 'Admin':
        return redirect(request, 'users:dashboard')
    user = User.objects.get(id=id)
    if request.method == 'POST':
        response = User.objects.update_user(request.POST, user)
        if 'errors' in response:
            for error in response['errors']:
                messages.error(request, error)
        elif 'success' in response:
            messages.success(request, response['success'])
            return redirect('users:dashboard')
    return redirect('users:edit', id=id)

def show(request, id):
    user = User.objects.get(id=id)
    posts = Post.objects.filter(user_to=user).prefetch_related('comment_set')

    return render(request, 'users/show.html', {'user': user, 'posts': posts})

def create_post(request):
    if request.method == 'POST':
        user_from = User.objects.get(id=request.session['user']['id'])
        user_to = User.objects.get(id=request.POST['user_to'])
        content = request.POST['content']
        Post.objects.create(content=content, user_from=user_from, user_to=user_to)
        messages.success(request, 'Message created')
    return redirect('users:show', id=user_to.id)

def create_comment(request):
    if request.method == 'POST':
        user = User.objects.get(id=request.session['user']['id'])
        content = request.POST['content']
        post_id = request.POST['post_id']
        post = Post.objects.get(id=post_id)
        Comment.objects.create(content=content, user=user, post=post)
        messages.success(request, 'Comment created')
    return redirect('users:show', id=post.user_to.id)

def delete(request, id):
    user = get_object_or_404(User, id=id)
    Comment.objects.filter(user=user).delete()
    user.delete()
    return redirect('users:dashboard')

def logout(request):
    request.session.clear()
    messages.success(request, "You have been logged out.")
    return redirect('users:login')
