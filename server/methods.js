/**
 * Created by himadri on 25/8/15.
 */

Meteor.methods({
    searchTitle : function(query, options){
        if (!query) return [];

        options = options || {};

        // guard against client-side DOS: hard limit to 50
        if (options.limit) {
            options.limit = Math.min(50, Math.abs(options.limit));
        } else {
            options.limit = 50;
        }

        // TODO fix regexp to support multiple tokens
        var regex = new RegExp("^" + query);
        return JobTitleName.find({name: {$regex:  regex, $options: "i"}}, options).fetch();
    }
});