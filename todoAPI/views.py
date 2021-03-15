from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TasksSerializer

from .models import Tasks
# Create your views here.


@api_view(['GET'])  # function from DRF
def apiOverview(request):
    todoAPI_urls = {
        'List': '/task-list/',
        'Detail View': '/task-detail/<str:pk>/',
        'Create': '/task-create/',
        'Update': '/task-update/',
        'Delete': '/task-delete/',
    }
    return Response(todoAPI_urls)


@api_view(['GET'])  # function from DRF
def taskList(request):
    tasks = Tasks.objects.all()
    # serializing all data many=True
    serializer = TasksSerializer(tasks, many=True)
    return Response(serializer.data)


@api_view(['GET'])  # function from DRF
def taskDetail(request, pk):
    tasks = Tasks.objects.get(id=pk)
    # serializing all data many=True
    serializer = TasksSerializer(tasks, many=False)
    return Response(serializer.data)


@api_view(['POST'])  # function from DRF
def taskCreate(request):
    serializer = TasksSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])  # function from DRF
def taskUpdate(request, pk):
    tasks = Tasks.objects.get(id=pk)
    serializer = TasksSerializer(instance=tasks, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])  # function from DRF
def taskDelete(request, pk):
    tasks = Tasks.objects.get(id=pk)
    tasks.delete()
    return Response("Item successfully deleted !")
