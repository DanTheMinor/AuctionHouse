Auction.Router.map(function() {
  this.resource('catalogs', {path: "/"});
  this.resource('new-catalog');
  this.resource('catalog', {path: 'catalogs/:catalog_id'}, function() {
    this.resource('add-item');
  });
  this.resource('item', {path: 'item/:item_id'});
});
