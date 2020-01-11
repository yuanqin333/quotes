import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }

  getHeaderText() {
    return element(by.css('h5')).getText();
  }

  typeQuote(msg: string) {
    element(by.name('quoteText')).sendKeys(msg);
  }

  clickCreateAQuoteButton() {
    element(by.css('.btn')).click();
  }

  getQuoteText() {
    return element(by.css('h6')).getText();
  }

}
