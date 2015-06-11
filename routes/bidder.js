Auction.BidderRoute = Ember.Route.extend ({
  model: function(params) {
    return this.store.find('bidder', params.bidder_id);
  }
});
