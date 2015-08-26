Template.forms.onCreated(function () {

});

Template.forms.onRendered(function () {
    Meteor.typeahead.inject();
});

Template.forms.helpers({
    searchTitle : function(query, sync, callback) {
        Meteor.call('searchTitle', query, {}, function(err, res) {
            if (err) {
                console.log(err);
                return;
            }
            callback(res.map(function(v){ return {value: v.name}; }));
        });
    }
});

Template.forms.events({

});

Template.forms.onDestroyed(function () {

});
