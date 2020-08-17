from rest_framework.views import APIView

from rest_framework.response import Response
import requests
import pandas as pd
from io import BytesIO

class JapaneseHolidayViewSet(APIView):
    """
    日本の祝日を取得するAPI
    """
    def get(self, request, format=None):
        return Response([])


    def fetch_csv(url: str):
        """
        CSVデータのダウンロードとDataframeへの変換
        """
        # SSL警告文をDisabled
        requests.packages.urllib3.disable_warnings()
        # dh key too small対策
        requests.packages.urllib3.util.ssl_.DEFAULT_CIPHERS += ":HIGH:!DH:!aNULL"
        try:
            requests.packages.urllib3.contrib.pyopenssl.uril.ssl_.DEFAULT_CIPHERS += ":HIGH:!DH:!aNULL"
        except AttributeError:
            pass
        # リクエスト
        r = requests.get(url)
        csv_str = BytesIO(r.content)
        df = pd.read_csv(csv_str, sep=",", encoding="shift-jis")
        return df
