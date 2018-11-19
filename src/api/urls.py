from django.conf.urls import url
from . import views


app_name = "api"

urlpatterns = [
    url(r'^contact$', views.Add.as_view(), name="Add_contact"),
    url(r'^contact/(?P<id>\d+)$', views.Details.as_view(), name="contact_details"),
    url(r'^contact/all$', views.All.as_view(), name="contact_list")
]
