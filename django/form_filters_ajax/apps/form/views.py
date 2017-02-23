from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from .models import User

@csrf_exempt
def form(request, page):
    user_count = User.objects.count()
    per_page = 1
    total_pages = (user_count / per_page) * 'x'

    if not page or page > total_pages:
        page = 1

    start = int(page) * per_page
    end = start + int(per_page)
    users = User.objects.all()[int(start)-1:int(end)-1]
    return render(request, 'form/form.html', {'users': users, 'total_pages': total_pages})

@csrf_exempt
def filter(request):
    name = request.POST['first_name']
    print name
    users = User.objects.filter(first_name__contains=name)
    return render(request, 'form/partial.html', {'users': users})
