import { ReactiveFormDemoPage } from './app.po';

describe('reactive-form-demo App', () => {
  let page: ReactiveFormDemoPage;

  beforeEach(() => {
    page = new ReactiveFormDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
