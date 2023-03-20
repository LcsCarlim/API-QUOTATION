import app from './index.js'
try {
    app.listen(3333, () => console.log("Server is running!"));
} catch (error) {
    console.log(error.message)
}
