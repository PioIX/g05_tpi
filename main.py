from flask import Flask, render_template
import sqlite3
import random

app = Flask(__name__)

#cosas para que funcionen los continuar
quiz = 0
ahorcado = 0

od = random.randint(1,3)
conn_quiz = sqlite3.connect("databases/quiz.db")
conn_ahorcado = sqlite3.connect("databases/Ahorcado.db")
q = f"""SELECT pregunta, correcta, incorrecta_1, incorrecta_2, incorrecta_3, ODS FROM Quiz WHERE ODS = '{od}'"""
a = f"""SELECT palabra, ODS FROM Ahorcado WHERE ODS = '{od}'"""
conn_quiz.execute(q)
conn_ahorcado.execute(a)


@app.route('/')
def index():
    return render_template("home.html", aDonde = "https://ods.nicolasgr8.repl.co/introQuiz")

@app.route('/introQuiz')
def introquiz():
  return render_template("entremedio.html", juego = "Quiz", ods ="ODS 1: Fin de la pobreza", aDonde = "https://ods.nicolasgr8.repl.co/quiz")

@app.route("/quiz")
def prueba():
  if quiz == 0:
    return render_template("quiz.html", pregunta = "hola", respuestaBien = "como", respuestaMal1 = "lol", respuestaMal2 = "lul", respuestaMal3 = "jijijija", paginaSiguiente = "https://ods.nicolasgr8.repl.co/quiz")
    
  if quiz == 1:
    return render_template("quiz.html", pregunta = "hola", respuestaBien = "como", respuestaMal1 = "lol", respuestaMal2 = "lul", respuestaMal3 = "jijijija", paginaSiguiente = "https://ods.nicolasgr8.repl.co/introAhorcado")

@app.route("/introAhorcado")
def cacho():
  return render_template("entremedio.html", juego = "Ahorcado - ", ods = "ODS 2: Fin del hambre", aDonde = "https://ods.nicolasgr8.repl.co/ahorcado")

@app.route("/ahorcado")
def prueba3(ahorcado):
  if ahorcado == 0:
    return render_template("ahorcado.html", palabra = "hola", paginaSiguiente = "https://ods.nicolasgr8.repl.co/ahorcado")
    ahorcado += 1
  if quiz == 1:
    return render_template("ahorcado.html", palabra = "chau", paginaSiguiente = "https://ods.nicolasgr8.repl.co/introRosco")

@app.route("/introRosco")
def introrosco():
  return render_template("entremedio.html", juego = "Rosco", aDonde = "https://ods.nicolasgr8.repl.co/rosco")

app.run(host='0.0.0.0', port=81)