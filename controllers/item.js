Auction.ItemController = Ember.ObjectController.extend({
  isEditing: false,
  isEditingBid: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      this.get('model').save();    //this line will allow the edited post to be saved and show edited version when page refreshes
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        id = this.get('catalog.id')
        //debugger;
        this.get('model').destroyRecord();
        this.transitionToRoute('/catalogs/' + id);
        //catalogs/9c63h
      }
    },
    addingBidder: function() {
      this.set('isAddingBidder', true);
    },
    saveNewBid: function() {
      this.set('isAddingBidder', false);
      this.get('model').save();
    }
  }
});
