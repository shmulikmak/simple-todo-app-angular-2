import { ToDoWebNewsPage } from './app.po';

describe('to-do-web-news App', () => {
  let page: ToDoWebNewsPage;

  beforeEach(() => {
    page = new ToDoWebNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
