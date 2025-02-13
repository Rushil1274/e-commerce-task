from flask import request, jsonify
from models import Product, CartItem

def register_routes(app):
    
    @app.route('/api/products', methods=['GET'])
    def get_products():
        from database import db  # Lazy import to avoid circular import
        products = Product.query.all()
        return jsonify([product.to_dict() for product in products])

    @app.route('/api/products', methods=['POST'])
    def create_product():
        from database import db  # Lazy import
        data = request.json
        if not data or not data.get('name') or not data.get('price'):
            return jsonify({'error': 'Invalid product data'}), 400
        
        product = Product(
            name=data['name'],
            price=data['price'],
            image_url=data.get('image_url', '')
        )
        db.session.add(product)
        db.session.commit()
        return jsonify(product.to_dict()), 201

    @app.route('/api/products/<int:id>', methods=['DELETE'])
    def delete_product(id):
        from database import db  # Lazy import
        product = Product.query.get_or_404(id)
        CartItem.query.filter_by(product_id=id).delete()
        db.session.delete(product)
        db.session.commit()
        return jsonify({'message': 'Product deleted successfully'})

    @app.route('/api/cart', methods=['GET'])
    def get_cart():
        cart_items = CartItem.query.all()
        return jsonify([item.to_dict() for item in cart_items])

    @app.route('/api/cart/add/<int:product_id>', methods=['POST'])
    def add_to_cart(product_id):
        from database import db  # Lazy import
        product = Product.query.get_or_404(product_id)
        cart_item = CartItem.query.filter_by(product_id=product_id).first()
        
        if cart_item:
            cart_item.quantity += 1
        else:
            cart_item = CartItem(product_id=product_id)
            db.session.add(cart_item)
            
        db.session.commit()
        return jsonify(cart_item.to_dict()), 201

    @app.route('/api/cart/<int:id>', methods=['DELETE'])
    def remove_from_cart(id):
        from database import db  # Lazy import
        cart_item = CartItem.query.get_or_404(id)
        
        if cart_item.quantity > 1:
            cart_item.quantity -= 1
        else:
            db.session.delete(cart_item)
            
        db.session.commit()
        return jsonify({'message': 'Item removed from cart'})
