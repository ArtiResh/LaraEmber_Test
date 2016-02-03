import DS from 'ember-data';

export default DS.Model.extend({
    test_id: DS.attr("number"),
    title: DS.attr('string'),
    text: DS.attr('string')
});
