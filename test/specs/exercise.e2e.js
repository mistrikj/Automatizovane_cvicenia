import { username, password } from './fixtures.js'

describe('Czechitas Login Page', () => {

    it('should open login page', () => {

        browser.reloadSession();

        browser.url('/prihlaseni');

        /* const windowSize = browser.getWindowSize();
        console.log(windowSize);

            browser.saveScreenshot('login_page.png');


        browser.pause(5000); */


        const emailField = $('#email');
        console.log('Email field s displayed: ' + emailField.isDisplayed());
        console.log('Email field s enabled: ' + emailField.isEnabled());


        const passwordField = $('#password');
        console.log('Password field s displayed: ' + passwordField.isDisplayed());
        console.log('Password field s enabled: ' + passwordField.isEnabled());


        const loginButton = $('.btn-primary');
        console.log('Login button text: ' + loginButton.getText());


         const odkaz = $('.btn-link');
         console.log('Talčítko má text: ' + odkaz.getAttribute('href')); 


        emailField.setValue('Mat_Team_admin@gmail.com');
        passwordField.setValue('Mat1234');
        loginButton.click();


        $('=Přihlášky').click();

        // výpis přihlášených kurzů
        const rows = $('.dataTable').$('tbody').$$('tr')
        console.log('There are ' + rows.length + ' rows in the table');
        rows.forEach(row => {
            console.log(row.getText());
        })



    })})
