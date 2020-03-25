from rest_framework.response import Response
from rest_framework.views import APIView
import json


class Login(APIView):
    """
        This is login view
    """

    def post(self, request):
        data = json.loads(request.body)
