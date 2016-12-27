import { VinkelstonePage } from './app.po';

describe('vinkelstone App', function() {
  let page: VinkelstonePage;

  beforeEach(() => {
    page = new VinkelstonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
