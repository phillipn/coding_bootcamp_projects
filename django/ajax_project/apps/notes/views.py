from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from .models import Note

@csrf_exempt
def index(request):
    notes = Note.objects.all()
    return render(request, 'notes/index.html', {'notes': notes})

@csrf_exempt
def create(request):
    if request.method == 'POST':
        Note.objects.create(title=request.POST['title'])
    return redirect('notes:partial')

def partial(request):
    notes = Note.objects.all()
    return render(request, 'notes/partial.html', {'notes': notes})

@csrf_exempt
def add_content(request):
    content = request.POST['content']
    id = request.POST['id']
    note = Note.objects.get(id=id)
    note.content = content
    note.save()
    return redirect('notes:partial')

@csrf_exempt
def delete(request, id):
    Note.objects.get(id=id).delete()
    return redirect('notes:partial')
