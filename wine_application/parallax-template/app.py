#importing libraries
import os
import numpy as np
import flask
import pickle
from flask import Flask, render_template, request
from flask_material import Material

#creating instance of the class
app=Flask(__name__, static_url_path='')
Material(app)



# @app.route('/js/<path:path>')
# def send_js(path):
#     return send_from_directory('js', path)



#to tell flask what url shoud trigger the function index()
@app.route('/')
def index():
    return render_template('index.html')



# @app.route('/virtual_sommelier')
# def virtual_sommelier():
#     return render_template('virtual_sommelier.html')

#     #prediction function
# def WineRatingPredictor(to_predict_list):
#     to_predict = np.array(to_predict_list).reshape(1,5)
#     loaded_model = pickle.load(open("model.pkl","rb"))
#     result = loaded_model.predict(to_predict)
#     return result[0]


# @app.route('/virtual_sommelier',methods = ['POST'])
# def result():
#     if request.method == 'POST':
#         to_predict_list = request.form.to_dict()
#         to_predict_list=list(to_predict_list.values())
#         to_predict_list = list(map(int, to_predict_list))
#         result = WineRatingPredictor(to_predict_list)
         
#         if int(result)==1:
#             prediction='Income more than 50K'
#         else:
#             prediction='Income less that 50K'
            
#         return render_template("virtual_sommelier.html",prediction=prediction)

if __name__ == "__main__":
    app.run(debug=True)