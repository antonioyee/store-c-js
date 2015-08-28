var store = {
	"VOUCHER": {
		code: "VOUCHER",
		name: "Cabify Voucher",
		price: 5
	},
	"TSHIRT": {
		code: "TSHIRT",
		name: "Cabify T-Shirt",
		price: 20
	},
	"MUG": {
		code: "MUG",
		name: "Cafify Coffee Mug",
		price: 7.5
	}
};

var Checkout = function () {
	this.shoppingCart 	= [];
};

var validScanProduct = function(product, rows, shoppingCart, catalog) {
	if ( rows == 0 ) { // initial
		shoppingCart.push(catalog);
		shoppingCart[rows].count = 1;
	}else{
		var exist = false;

		shoppingCart.forEach(function(item, index) {
			if ( item.code == product ) { // already exists and adds one more
				item.count++;
				exist = true;
			}
		});

		if ( ! exist ) { // Products exist but not the wanted and added
			shoppingCart.push(catalog);
			shoppingCart[rows].count = 1;
		}
	}

	return shoppingCart;
};

Checkout.prototype.scan = function (product) {
	var rows = this.shoppingCart.length;

	switch (product) {
		case 'VOUCHER':
			this.shoppingCart = validScanProduct(product, rows, this.shoppingCart, store.VOUCHER);
			break;
		case 'TSHIRT':
			this.shoppingCart = validScanProduct(product, rows, this.shoppingCart, store.TSHIRT);
			break;
		case 'MUG':
			this.shoppingCart = validScanProduct(product, rows, this.shoppingCart, store.MUG);
			break;
	}

	return this;
};

Checkout.prototype.total = function () {
	var totalCart = 0;

	this.shoppingCart.forEach(function(item, index) {

		if ( item.count == 1 ) { // normal

			totalCart += (item.count * item.price);

		}else if( item.count == 2 ){ // 2 x 1

			totalCart += item.price;

		}else{ // More than 3 items, apply 2 x 1

			if ( item.code == 'TSHIRT' ) {
				totalCart += (item.count * 19);
			}else{
				var residue = item.count % 2;

				if ( residue == 0 ) {
					totalCart += ( (item.count / 2) * item.price);
				}else{
					var count = item.count - residue;
					totalCart += ( ( (count / 2) + residue ) * item.price);
				}
			}
		}

	});

	return totalCart;
};

module.exports = Checkout;
