export default function handler(req, res) {
  res.status(200).json({ 
    message: 'Hello from ' + 'france' + ' API!',
    timestamp: new Date().toISOString(),
    method: req.method,
    app: 'france'
  })
}