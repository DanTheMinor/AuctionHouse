Auction.Item = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  grade: DS.attr(),
  bid: DS.attr(),
  catalog: DS.belongsTo('catalog', {async: true}),
  bidders: DS.hasMany('bidder', {async: true})
});
