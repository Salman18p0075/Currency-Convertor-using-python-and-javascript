from flask import Flask,render_template,request,jsonify
import requests


app = Flask(__name__)

@app.route('/')
def test():
    return render_template('currency.html')  

@app.route('/convert',methods=["POST"])
def convert():

    currency = request.form.get("currency")
    res = requests.get("https://api.exchangeratesapi.io/latest",params={"base":"USD","symbols":currency})
    if res.status_code != 200:
        return jsonify({"success":False})

    data = res.json()

    if currency not in data["rates"]:
        return jsonify({"success":False})

    return jsonify({"success":True,"rate":data["rates"][currency]})

    



if __name__ == "__main__":
    app.run(debug=True)

