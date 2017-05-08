import { MinersGamePage } from './app.po';

describe('miners-game App', () => {
  let page: MinersGamePage;

  beforeEach(() => {
    page = new MinersGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
