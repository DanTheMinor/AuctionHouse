Auction.CatalogRoute = Ember.Route.extend ({
  model: function(params) {
    return this.store.find('catalog', params.catalog_id);
  }
});
