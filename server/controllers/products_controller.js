module.exports = {
    create: (request, response) => {

        const { name, description, price, image_url } = request.body

        const db = request.app.get('db')

        db.create_product([name, description, price, image_url]).then((product) => {
            response.status(200).send(product)
        }).catch(error => {
            response.status(500).send({ errorMessage: "There was a problem creating your product" })
            console.log(error)
        })
    },


    getOne: (request, response) => {

        const { id } = request.params

        const db = request.app.get('db')

        db.read_product([id]).then((product) => {
            response.status(200).send(product)
        }).catch(error => {
            response.status(500).send({ errorMessage: "There was a problem with your request" })
            console.log(error)
        })
    },


    getAll: (request, response) => {

        const db = request.app.get('db')

        db.read_products().then((products) => {
            response.status(200).send(products)
        }).catch(error => {
            response.status(500).send({ errorMessage: "There was a problem with your request" })
            console.log(error)
        })
    },


    update: (request, response) => {
        const { id } = request.params

        const { description } = request.body

        const db = request.app.get('db')

        db.update_product([id]).then((product) => {
            response.status(200).send(product)
        }).catch(error => {
            response.status(500).send({ errorMessage: "There was a problem updating the description" })
            console.log(error)
        })
    },


    delete: (request, response) => {
        const { id } = request.params

        const db = request.app.get

        db.delete_product([id]).then((product) => {
            response.status(200).send(product)
        }).catch(error => {
            response.status(500).send({ errorMessage: "Something went wrong with your request" })
            console.log(error)
        })

    }
}