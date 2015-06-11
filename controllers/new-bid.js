Auction.NewBidController = Ember.Controller.extend({
  needs: ['item'],
  actions: {
    save: function() {
      var bidder = this.store.createRecord('bidder', {
          name: this.get('name')
      });
      bidder.save();

      var item = this.get('controllers.item.model');
      item.get('bidders').pushObject(bidder);
      item.save();

      this.transitionToRoute('item', item.id);
    }
  }
});
