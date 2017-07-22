import { LocadoraPage } from './app.po';

describe('locadora App', () => {
  let page: LocadoraPage;

  beforeEach(() => {
    page = new LocadoraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
