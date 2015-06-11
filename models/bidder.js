Auction.Bidder = DS.Model.extend({
  name: DS.attr(),
  bid_amount: DS.attr(),
  item: DS.belongsTo('item', {async: true})
});
