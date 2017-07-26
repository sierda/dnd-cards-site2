import { DndAngularClientPage } from './app.po';

describe('dnd-angular-client App', () => {
  let page: DndAngularClientPage;

  beforeEach(() => {
    page = new DndAngularClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
