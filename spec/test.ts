import { calculator } from '../pages/calculator';
import{input} from '../data/input';

describe('Protractor Demo App', async () => {

  it('1:Login into url', async () => {
    await calculator.login();
  })

  it('2:should have a title', async () => {
    await expect(calculator.assertTitle()).toMatch(input.assertData);
  });

  it('3:should add one and two', async () => {
    await calculator.calculateResult(input.value1, input.value2);
    await expect(calculator.assertText(calculator.latestResult)).toMatch(input.result);
  });
  
});