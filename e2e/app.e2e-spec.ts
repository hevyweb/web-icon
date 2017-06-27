import { WebIconPage } from './app.po';

describe('web-icon App', () => {
  let page: WebIconPage;

  beforeEach(() => {
    page = new WebIconPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
