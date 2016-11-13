import { EMBrewMasterPage } from './app.po';

describe('embrew-master App', function() {
  let page: EMBrewMasterPage;

  beforeEach(() => {
    page = new EMBrewMasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
