""" Urls for the Notes app """

from django.urls import path

from .views import NoteDestroyView, NoteListCreateView

urlpatterns = [
    path("", NoteListCreateView.as_view(), name="notes"),
    path("delete/<int:pk>/", NoteDestroyView.as_view(), name="notes_delete"),
]
