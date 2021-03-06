module.exports = (app)=>{
    var apiView = app.api.view;
    var apiUser = app.api.user;
    app.get('/sign-up', apiView.signUp);
    app.post('/sign-up', apiUser.register);
    app.get('/profile/:id', apiUser.findById);
    app.post('/update-profile', apiUser.update);
    app.post('/finish-order', apiUser.makeOrder);
}