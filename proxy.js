// eslint-disable-next-line @typescript-eslint/no-var-requires
const CORS_ANYWHERE = require('cors-anywhere')

// Define the port for your proxy server
const PORT = process.env.PORT || 8080

// Start the CORS Anywhere server
CORS_ANYWHERE.createServer({
    originWhitelist: [], // Allow all origins
    requireHeaders: [], // Do not require any headers
    removeHeaders: ['cookie', 'cookie2'], // Remove cookies
}).listen(PORT, () => {
    console.log(`CORS Anywhere server is running on port ${PORT}`)
})
