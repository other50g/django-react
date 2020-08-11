import unittest
from django.test import TestCase
from rest_framework import status
from django.urls import reverse
from ..models import Book
from ..views import BookViewSet

class BookTestCase(TestCase):

    def setUp(self):
        Book.objects.create(author='テスト', title='テスト', subtitle='テスト')

    def testIndex(self):
        response = self.client.get(reverse('book-list'), content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
