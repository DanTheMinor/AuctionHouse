Auction.Catalog = DS.Model.extend({
  title: DS.attr(),
  items: DS.hasMany('item', {async: true})
});
