import { TravgamePage } from './app.po';

describe('travgame App', function() {
  let page: TravgamePage;

  beforeEach(() => {
    page = new TravgamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
