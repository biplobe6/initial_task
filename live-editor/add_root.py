import sys
import os
import django

BASE = os.path.dirname(__file__)
ROOT =  os.path.abspath(
    os.path.join(
        BASE,
        "../src"
    )
)


sys.path.insert(0, ROOT)
os.environ["DJANGO_SETTINGS_MODULE"] = "main.settings"
django.setup()
