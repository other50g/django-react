from rest_framework import serializers
from ..models.book import Book

class BookSerializer(serializers.ModelSerializer):

    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=True, max_length=255)
    subtitle = serializers.CharField(required=True, max_length=255)
    author = serializers.CharField(required=True, max_length=255)

    class Meta:
        model = Book
        fields = ('id', 'title', 'subtitle', 'author')

    def create(self, validated_data):
        return Book.objects.create(**validated_data)

    def update(self , instance, validated_data):
        return instance
