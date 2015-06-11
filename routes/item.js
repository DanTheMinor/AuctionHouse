Auction.ItemRoute = Ember.Route.extend ({
  model: function(params) {
    return this.store.find('item', params.item_id);
  }
  // This is attempting to load add-bid into template
  // renderTemplate: function() {
  //   this.render('new-bid', {
  //     into: 'item', //Name of template the outlet to render into
  //     outlet: 'new-bid', //Name of outlet
  //     controller: 'new-bid' // the controller to use for the template
  //   });
  // }
});
