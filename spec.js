
describe('this is a simple check for angular websites', function() { 
    beforeEach(function() {
        browser.driver.get("https://vivofy.co/home");
    });
           
    it('automatic redirection to /home when location hash is empty', function() {
        expect(browser.driver.getCurrentUrl()).toContain("/home");
    });
     
    it('should also contain title', function() {
        //expect(browser.title()).toBe("Vivofy - Vive Smart")
        expect(browser.driver.getTitle()).toEqual('Vivofy - Vive Smart');
    });
        
});
    