import unittest
from django.test import TestCase

from ...views.japanese.holiday import JapaneseHolidayViewSet
import pandas as pd

class JapaneseHolidayTestCase(TestCase):

    def testFetchCsv(self):
        """
        CSVファイルのダウンロード
        """
        # 日本の休日オープンデータのURL
        url = 'https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv'
        df = JapaneseHolidayViewSet.fetch_csv(url)
        self.assertEqual(type(df), pd.DataFrame)

