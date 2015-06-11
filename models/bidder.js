Auction.Bidder = DS.Model.extend({
  name: DS.attr(),
  item: DS.belongsTo('item', {async: true})
});
