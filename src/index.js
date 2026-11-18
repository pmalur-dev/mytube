import 'dotenv/config';
import connectDB from './db/db.js';
import app from './app.js';
const PORT = process.env.PORT || 8000;



connectDB()
.then((res) => {
    app.listen(PORT, () => {
        console.log(`Server is running at PORT ${PORT}`);
    })
})
.catch((err) => {
    console.log(`MongoDB connection failed ${err}`);
})