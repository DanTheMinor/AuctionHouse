Auction.NewCatalogController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newCatalog = this.store.createRecord('catalog', {
        title: this.get('title'),
        description: this.get('description')
      });

      newCatalog.save();
      this.transitionToRoute('catalogs');
    }
  }
})
