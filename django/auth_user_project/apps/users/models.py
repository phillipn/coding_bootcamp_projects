from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.ForeignKey(User, unique=True)
    dob = models.DateField()
    admin_level = models.IntegerField(choices=((1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10)))

User.profile = property(lambda u: UserProfile.objects.get_or_create(user=u)[0])
