import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;
  const msg = 'I love Kavin School';
  const expectedTitle = 'Kavin School Quote';

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual(expectedTitle);
  });

  it('should display What Quote is on your mind ?', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('What Quote is on your mind ?');
  });

  it('should type a quote', () => {
    page.typeQuote(msg);
  });

  it('should click on create a quote button', () => {
    page.clickCreateAQuoteButton();
  });

  it('should msg entered should be visible', () => {
    expect(page.getQuoteText()).toEqual(msg);
  });

});
