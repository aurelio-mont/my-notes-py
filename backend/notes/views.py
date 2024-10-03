""" Class for the Note view """

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .serializers import NoteSerializer
from .models import Note


class NoteListCreateView(generics.ListCreateAPIView):
    """Class for the Note list view"""

    serializer_class = NoteSerializer
    permmission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(user=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(user=self.request.user)
        else:
            return serializer.errors


class NoteDestroyView(generics.DestroyAPIView):
    """Class for the Note delete view"""

    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(user=user)
