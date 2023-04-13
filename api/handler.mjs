const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

await delay(3000)

export const handler = async(req, res) => {
    res.send({ hello })
};