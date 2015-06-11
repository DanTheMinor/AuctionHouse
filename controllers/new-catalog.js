Auction.NewCatalogController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newCatalog = this.store.createRecord('catalog', {
        title: this.get('title'),
        description: this.get('description')
      });

      newCatalog.save();
      this.set('title', '');
      this.set('description', '')
      this.transitionToRoute('catalogs');
    }
  }
})
