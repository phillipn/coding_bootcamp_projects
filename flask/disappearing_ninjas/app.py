from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return "No ninjas here"

@app.route('/ninjas')
@app.route('/ninjas/<ninja>')
def ninjas(ninja=None):
    if not ninja:
        src = url_for('static', filename='images/Ninjas/tmnt.png')
    elif ninja == 'red':
        src = url_for('static', filename='images/Ninjas/raphael.jpg')
    elif ninja == 'blue':
        src = url_for('static', filename='images/Ninjas/leonardo.jpg')
    elif ninja == 'orange':
        src = url_for('static', filename='images/Ninjas/michelangelo.jpg')
    elif ninja == 'purple':
        src = url_for('static', filename='images/Ninjas/donatello.jpg')
    else:
        src = url_for('static', filename='images/Ninjas/notapril.jpg')

    return render_template('ninja.html', src=src)

app.run(debug=True)
