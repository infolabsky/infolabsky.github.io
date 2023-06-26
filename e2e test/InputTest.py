from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import csv
import time


driver = webdriver.Chrome()

driver.get("http://localhost:3000")
time.sleep(1.5)

def matchElText(elId:str, refText:str, driver):
    el = driver.find_element(By.ID, elId)
    if(el==None):
        raise Exception("element with id "+ elId +" not found!")
    if(el.text.strip()!=refText.strip()):
        raise Exception("name are not match! " + str(el.text) + " should: " + str(refText))

def test(values, header, driver):
    #enter inputs
    ID_FIELD = "IDENTIFIER"
    inputEl = driver.find_element(By.ID, "id-input")
    inputEl.clear()
    inputEl.send_keys(values[header.index(ID_FIELD)])
    inputEl.send_keys(Keys.RETURN)
    time.sleep(0.5)
    #test student Name
    NAME_FIELD = "NAMA LENGKAP"
    matchElText("student-name", values[header.index(NAME_FIELD)], driver)
    #test result
    RESULT_FIELD = "KETERANGAN"
    matchElText("student-result", values[header.index(RESULT_FIELD)], driver)
    #test Kelas
    CLASS_FIELD = "KELAS"
    matchElText("student-class", values[header.index(CLASS_FIELD)], driver)
    driver.back()
    

with open('../assets/data/DATA BUAT KELULUSAN.csv') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    header = spamreader.__next__()
    for row in spamreader:
        test(row, header, driver)
        time.sleep(0.5)

