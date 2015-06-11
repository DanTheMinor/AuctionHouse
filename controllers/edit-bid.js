Auction.EditBidController = Ember.Controller.extend({
  needs: ['item'],
  actions: {
    save: function() {
      var item = this.get('controllers.item.model');
      current_bid = item.get('current_bid');
      bid_amount = this.get('bid_amount');

      current_bid_int = parseInt(current_bid)
      bid_amount_int = parseInt(bid_amount)


      if (bid_amount_int <= current_bid_int) {
        alert("Your bid must be higher than current bid.")
      }
      else {
        item.set('current_bid', this.get('bid_amount'));
      }
      item.save();
      this.set('name', '');
      this.set('bid_amount', '');
      this.transitionToRoute('item', item.id);

      }
    }
});
