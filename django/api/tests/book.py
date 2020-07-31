import unittest
from rest_framework.test import APIRequestFactory
from ..models import Book
from ..serializers import BookSerializer

class BookTestCase(unittest.TestCase):

    def setUp(self):
        Book.objects.create(author='テスト', title='テスト', subtitle='テスト')

    def testIndex(self):
        factory = APIRequestFactory()
        request = factory.get('/book/')
        

