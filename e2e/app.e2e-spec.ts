import { PwrsrgProjectPage } from './app.po';

describe('pwrsrg-project App', () => {
  let page: PwrsrgProjectPage;

  beforeEach(() => {
    page = new PwrsrgProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
