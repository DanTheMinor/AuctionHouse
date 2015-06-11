Auction.Router.map(function() {
  this.resource('catalogs', {path: "/"});
  this.resource('new-catalog');
  this.resource('catalog', {path: 'catalogs/:catalog_id'}, function() {
    this.resource('add-item');
  });
  this.resource('item', {path: 'item/:item_id'}, function() {
    this.resource('new-bid');
    this.resource('edit-bid');
  });
  // this.resource('item', {path: 'item/:item_id'});
  // this.resource('new-bid');
  // this.resource('edit-bid');
});
