from datetime import datetime
from flask import Flask
app = Flask(__name__)

@app.route('/time')
def get_current_time():
    now = datetime.now()
    return {'time': now.strftime("%H:%M:%S")}