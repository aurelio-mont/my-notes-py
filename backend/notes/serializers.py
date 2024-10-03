""" Class for the Note serializer """

from rest_framework import serializers

from .models import Note


class NoteSerializer(serializers.ModelSerializer):
    """Serializer for the Note object"""

    class Meta:
        """Meta class for the serializer"""

        model = Note
        fields = "__all__"
        extra_kwargs = {"user": {"read_only": True}}
