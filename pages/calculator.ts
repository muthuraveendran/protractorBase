import { browser, element, by} from 'protractor';
import{input} from '../data/input';

export class calculator{
     public static firstNumber = element(by.model('first'));
     public static  secondNumber = element(by.model('second'));
     public static goButton = element(by.id('gobutton'));
     public static  latestResult = element(by.binding('latest'));

   /*
    login() fuction is used to hit url in the browser
    */
   public static async login(){
    await browser.get(input.url);
   };

   /* 
    for calculating value use the function calculateResult()
   */
   public static async calculateResult(value1, value2){
    await this.firstNumber.sendKeys(value1);
    await this.secondNumber.sendKeys(value2);
    await this.goButton.click();
   };

   /*assertTitle() is a function used to assert a title value 
    */
   public static async assertTitle(){
    return await browser.getTitle();
   };

   /* assertText() is a fuction used to assert value for a particular element 
    */
   public static async assertText(input){
        return await input.getText();
   };
};