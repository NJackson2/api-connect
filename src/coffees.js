import dbConnect from "./dbConnect.js";


export function createCoffee(req, res) {
    // connect to firestore
    const db = dbConnect()
    // add a new doc to coffees collection
    db.collection('coffees').add(req.body)
    // send back a response(err / not)
        .then(doc => res.status(201).send({ success: true, message: 'Created coffee: ' + doc.id }))
        .catch(err => res.send.status(500).send({success: false, message: err}))

}

export function getAllCoffees(req, res) {
    const db = dbConnect()
    db.collection('coffees').get()
        .then(collection => {
            const coffeeList = collection.docs.map(doc => doc.data)
        })
        .catch(err => res.send.status(500).send({success: false, message: err}))
}
