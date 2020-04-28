from datetime import datetime, time

from django import template

register = template.Library()


@register.filter
def is_madrugada(user):
    try:
        now_time = datetime.now().time()
        if time(22, 59) <= now_time <= time(23, 59):
            return True
        elif time(0, 00) <= now_time <= time(5, 59):
            return True
        return False
    except (ValueError, ZeroDivisionError, Exception):
        return 0
