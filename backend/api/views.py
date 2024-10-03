""" Views for the API """

from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer


# Create your views here.
class CreateUserView(generics.CreateAPIView):
    """Create a new user in the system"""

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
