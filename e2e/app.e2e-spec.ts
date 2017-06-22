import { NavigatorPage } from './app.po';

describe('navigator App', () => {
  let page: NavigatorPage;

  beforeEach(() => {
    page = new NavigatorPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
