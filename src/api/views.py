from rest_framework import generics, serializers
from api import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = [
            "id",
            'name'
        ]


class Add(generics.CreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = UserSerializer


class Details(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "id"


class All(generics.ListAPIView):
    queryset = models.User.objects.all()
    serializer_class = UserSerializer
