module.exports = class Order {
    #total
    #items
    #user

    constructor(items, user){
        items.forEach(({ product, quantity}) => {
            if(quantity > product.InStrock){
                throw new Error('Quantidade em estoque insuficiente')
            }
        })
        this.#items = items
        this.#user = user
        this.#total = items.reduce((total, { product, quantity}) => total + (product.price * quantity), 0)
    }

    get data(){
        return {
            user: this.#user,
            items: this.#items,
            total: this.#total
        }
    }
}