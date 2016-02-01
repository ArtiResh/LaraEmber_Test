import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    text_news: DS.attr('string'),
    url: DS.attr('string'),
    id: DS.attr('number'),
    created_at: DS.attr('string'),
});
