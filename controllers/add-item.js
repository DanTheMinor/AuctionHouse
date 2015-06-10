Auction.AddItemController = Ember.Controller.extend({
  needs: ['catalog'],
  actions: {
    save: function() {
      var item = this.store.createRecord('item', {
          title: this.get('title'),
          grade: this.get('grade'),
          bid: this.get('bid'),
          description: this.get('description')
      });
      item.save();

      var catalog = this.get('controllers.catalog.model');
      catalog.get('items').pushObject(item);
      catalog.save();

      this.transitionToRoute('catalog', catalog.id);
    }
  }
});
