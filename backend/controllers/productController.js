import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = async (req, res) =>{
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    const products = await Product.find({ ...keyword })

    res.json(products)
}

// @desc Fetch single products
// @route GET /api/products:id
// @access Public
const getProductById = async (req, res) =>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
}

// @desc Delete a product
// @route DELETE /api/products:id
// @access Private/Admin
const deleteProduct = async (req, res) =>{
    const product = await Product.findById(req.params.id)
    if(product){
        await product.remove()
        res.json({ message: 'Product removed'})
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
}

// @desc Create a product
// @route POST /api/products
// @access Private/Admin 
const createProduct = async (res, res) =>{
    const product = new Product({
        name: 'Sample Name', 
        price: 0, 
        user: req.user._id,
        image: '/images/sample.jpg', 
        brand: 'Sample brand', 
        category: 'Sample category', 
        countInStock: 0, 
        numReviews: 0,
        description: 'Sample Description'
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
}

// @desc Update a product
// @route Put /api/products/:id
// @access Private/Admin 
const updateProduct = async (res, res) =>{
    const {
        name, 
        price, 
        description, 
        image,
        brand, 
        category,
        countInStock
    } = req.body

    const product = await product.save()

    if(product){
        product.name = name 
        product.price = price
        product.description = description
        product.image = image
        product.brand = brand 
        product.category = category
        product.countInStock = countInStock 

        const createdProduct = await product.save()
        res.json(updatedProduct)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
}

// @desc Create new review
// @route Post /api/products/:id/review
// @access Private
const createProductReview = async (res, res) =>{
    const {
       rating,
       comment
    } = req.body

    const product = await product.save()

    if(product){
        const alreadyReviewed = products.reviews.find(r => r.user.toString() === req.user._id.toString())

        if(alreadyReviewed){
            res.status(400)
            throw new Error('Product already reviewed')
        }

        await product.save()
        const review ={
            name: req.user.name, 
            rating: Number(rating),
            comment, 
            user: req.user._id
        }

        products.reviews.push(review)

        product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0)/product.reviews.length 
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
}

export { 
    getProducts, 
    getProductById, 
    deleteProduct, 
    createProduct, 
    updateProduct,
    createProductReview 
}