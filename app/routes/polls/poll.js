import Ember from 'ember';

export default Ember.Route.extend({
	 model(params) {
    	{ 
  			id: params.poll_id, 
  			question: 'This is poll #' + params.poll_id
		};
  	}
});