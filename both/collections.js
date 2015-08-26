JobTitleName = new Mongo.Collection('jobtitlename');

MySchema = new SimpleSchema({
    title: {
        type: String,
        label : 'Job Title',
        max: 200,
        autoform: {
            'label-type': 'floating',
            placeholder : 'Job Title'
        }
    }
});
