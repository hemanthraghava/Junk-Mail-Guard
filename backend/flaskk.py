from flask import Flask, request, jsonify
from flask_cors import CORS
import util

app = Flask(__name__)
CORS(app)  


util.modell()  

@app.route('/detectspamornot', methods=['POST'])
def detectspamornot():
    try:
        mymessage = request.form.get('message')
        if not mymessage:
            return jsonify({'errorr': 'Missing "message" field'}), 400
        
        prediction = util.getoutput(mymessage)  
        return jsonify({'spamornot': prediction})
    
    except Exception as e:
        return jsonify({'errorr': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)