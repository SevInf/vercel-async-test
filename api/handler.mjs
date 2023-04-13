const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

await delay(3000)

export default async function handler(req, res) {
    res.status(200).send({ hello: 'world' })
};