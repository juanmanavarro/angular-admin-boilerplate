describe('the dashboard screen', function() {

    it('should navigate to the dashboard url', function() {
        browser.get('#');
        expect(browser.getLocationAbsUrl()).toEqual('/home');
    });

});
