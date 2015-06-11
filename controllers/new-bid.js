Auction.NewBidController = Ember.Controller.extend({

  needs: ['item'],
  actions: {
    save: function() {
      var bidder = this.store.createRecord('bidder', {
          name: this.get('name'),
          bid_amount: this.get('bid_amount')
      });
      bidder.save();

      var item = this.get('controllers.item.model');
      item.get('bidders').pushObject(bidder);
      item.save();


      bidder_bid = this.get('bid_amount');
      //debugger
      current_bid = item.get('current_bid')
      current_bid_int = parseInt(current_bid)
      bidder_bid_int = parseInt(bidder_bid)
      if (bidder_bid_int <= current_bid_int) {
        alert("Your bid must be higher than current bid.")
      }
      else {
        item.set('current_bid', bidder_bid);
      }

      this.set('bid_amount', '');
      this.transitionToRoute('item', item.id);
    }
  }
});
