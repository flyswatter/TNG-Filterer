import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  num: DS.attr('string'),
  title: DS.attr('string'),
  url: DS.attr('string'),
  airdate: DS.attr('date'),
  prodno: DS.attr('string'),
  stardate: DS.attr('string'),

  tags: DS.hasMany('tag'),

  link: Ember.computed('url', function(){
    var url = this.get('url');
    return 'http://en.memory-alpha.wikia.com' + url;
  }),
});
