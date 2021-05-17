2.0 in development with express/postgre/JWT back and typescript

# Application for testing sales personal
Application develops as a pet-project, later become usable in retail store, where i work.
The main task is control salers by knowlege level products and services of shop. Secondary is raitings of results, for additional motivation to learn products.


## Functionality (will update)
In this moment include:
  1. Adding tests (arbitrary number of questions and unswer)
  2. All added tests will available at tests page (/tests)
  3. Any test сan be passed (click on any test for it) 
  4. For submit unswer select checkbox and click submit-button
  5. During testing 'next' button will disabled until at least one answer is selected
  6. After testing become available results-page, where you can see all questions, with your unswers and correct unswers
  7. Loginization. You can logIn and LogOut. You can try it with:
      - Admin email: vlad@gmail.com 
              password: 1234
      - User  email: vasia@gmail.com
              password: 1111
  

## Instalation

1. Use `git clone https://github.com/VladMoskov/testing-app.git` to your folder
2. Use `npm install` to get all dependent packages
3. For save test used json-server, so after instaling use `json-server db-develop.json` for starting server. Important, server must work at 3000 port.
4. Use `npm start` to run an aplication.


## Used libraries

1. React
2. Redux
3. axios
4. redux-thunk
5. final-form
6. final-form-arrays
7. react-router-dom
8. react-textarea-autosize
9. json-server

## Screenshots

#FIRT RUN will with logined user
![image](https://user-images.githubusercontent.com/67361609/115563344-18e4cb00-a2c0-11eb-9453-0485b8c4b43d.png)


#If you log out - you can see the tests, but you can't use they
![image](https://user-images.githubusercontent.com/67361609/115563704-7f69e900-a2c0-11eb-9c23-15a452f64334.png)

#if you is not admin - u can't see 'users' and 'create test' pages
![image](https://user-images.githubusercontent.com/67361609/115564896-93fab100-a2c1-11eb-83f2-091049de4fdb.png)

#in 'create test' page u can add questions and unswers by click buttons. Whe all will done click save and go to tests page (save feedback in develop)
![image](https://user-images.githubusercontent.com/67361609/115564476-28b0df00-a2c1-11eb-945a-5933b31893dd.png)

#when u passing the test you need chose unswers and click 'submit'. Only after submiting the 'next' button will active
![image](https://user-images.githubusercontent.com/67361609/115565288-eb991c80-a2c1-11eb-8a56-869e46ce0915.png)


