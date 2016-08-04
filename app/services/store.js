import Ember from 'ember';
import LineItem from 'ember-store/models/line-item';
import Order from 'ember-store/models/order';
import Product from 'ember-store/models/product';

const products = [
	Product.create({title: 'Tent', price: 10, description: 'This is a tent'}),
	Product.create({title: 'Sleeping Bag', price: 5, description: 'This is a sleeping bag'}),
	Product.create({title: 'Flashlight', price: 2, description: 'This is a flashlight'}),
	Product.create({title: 'First-Aid-Kit', price: 3, description: 'This is a first-aid-kit'}),
];

const orders = [
	Order.create({id: '1234', name: 'Blaise Blobfish',
		items: [
			LineItem.create({product: products[0], quantity: 1}),
			LineItem.create({product: products[1], quantity: 2}),
			LineItem.create({product: products[2], quantity: 0}),
			LineItem.create({product: products[3], quantity: 0}),
		]
	}),
	Order.create({id: '4321', name: 'John Doe',
		items: [
			LineItem.create({product: products[0], quantity: 2}),
			LineItem.create({product: products[1], quantity: 3}),
			LineItem.create({product: products[2], quantity: 1}),
			LineItem.create({product: products[3], quantity: 0}),
		]
	})
];

export default Ember.Service.extend({
	getOrderById(id) {
		return orders.findBy('id', id);
	},
	getOrders() {
		return orders;
	},
	getPollById(id){
		const polls = this.getPolls();
		return polls.findBy('id', id);
	},
	getPolls() {
		return [
      		{ id: '1', question: 'Which Poisonous Plant Are You?' },
      		{ id: '2', question: 'Which Is Your Favorite Woodland Wanderer Way? ' }
    	]
	},
	getProducts() {
		return products;
	}
});
