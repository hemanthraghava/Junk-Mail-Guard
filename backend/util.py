import pickle

mymodel = None  

def modell():
    global mymodel
    with open("C:/Users/heman/machine learning/JunkMailGuard/backend/sampl/picklemodel", 'rb') as h:  
        mymodel = pickle.load(h)
        print("The model is performing successfully")

def getoutput(message):
    if mymodel is None:
        raise ValueError("Model is not running Call the modell() first.")

    res = [message]  
    op = mymodel.predict(res)  

    return "spam" if op[0] == 1 else "not spam" 

if __name__ == '__main__':
    modell()
    print(getoutput("You won 1000000 rupees exclusive offer to you dont miss this reward!"))
