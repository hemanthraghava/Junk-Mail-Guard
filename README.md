# Junk Mail Guard

Machine Learning-Powered Spam Detection Web App


## Description
JunkMailGuard is web-based-application that uses Machine Learning Algorithm to detect weather the email is spam/junk or not spam.i developed this project in python by using libraries like numpy, pandas, scickit-learn, pickle, etc and  i used python flask server for web-application and api creation and i  created frontend using  html,css and javascript.

## Tech Stack

**Machine Learning**: Scikit-Learn, Pandas, Numpy

**Web Framework**: Flask

**Frontend**: HTML/CSS, Bootstrap, JavaScript

**Deployment**: Pickle (model serialization)
## Screenshots

![App Screenshot](https://res.cloudinary.com/djhtlzxes/image/upload/v1741502347/website.png_oufvye.png)


## Project Summary
Now a days people are receiving countless emails filled with scams, phishing attempts, and malware etc.These messages can trick users to reveal their  sensitive information, downloading harmful software, or even losing money. so by detecting and filtering the unwanted and spam emails we can protect the users from cyber threats by blocking malicious content and Improve productivity by reducing time spent sorting through junk emails. so i created a JunkMailGuard website by using machine learning algorithms like  Multinomial Naviebayes classifier ,etc .

#### project process

  ***1.Dataset Acquisition***:

Firstly i downloaded the spam emails dataset from Kaggle website i.e https://www.kaggle.com/datasets/ashfakyeafi/spam-email-classification


2.***Data Preprocessing and Feature Engineering***:
 
 I performed several data-preprocessing and feature engineering techniques like Used CountVectorizer to convert email text data into numerical features for model training.

***3.Building the model***:

 I Implemented a  multinomial Naive Bayes Classification algorithm for spam detection and Used GridSearchCV to tune hyperparameters and improve model accuracy.

***4.Model Deployment***:

Finally i Serialized the trained model using Pickle and Developed a Flask web application for easy user interaction and classification.




## Installation

***1.*** First of all you need to clone to this repository to your Local Machine by using the commands

```bash
   git clone https://github.com/hemanthraghava/JunkMailGuard.git
   cd JunkMailGuard
```
***2.*** Install the required the python packages. Open your termial and run the following commands using pip.

```bash
   pip install numpy  
   pip install Flask
   pip install pandas
   pip install scikit-learn
```

***3.*** Run the flask Server by running the following command in the terminal
```bash
  python flaskk.py
```
***4.***  Now Access the Web Interface by 
Navigating  to http://localhost:5000 in your browser


    
## Acknowledgements

 - [Dataset by Ashfak Yeafi on Kaggle.](https://www.kaggle.com/datasets/ashfakyeafi/spam-email-classification)
 
 - Inspired by the traditional concepts of Machine learning and  various classification techniques that aims to enhance email spam detection through effective model implementation

 
## Contributing

Contributions are always welcome! feel free to If you'd like to improve the project and feel free to fork the repository, make changes, 
 and submit a pull request


## Contact
For more suggestions and queries, feel free to contact  Hemanth Raghava.
