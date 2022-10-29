let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome'+" "+ login:
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';
console.log(message);