import app from './app.js';
import config from './app/config/index.js';
import mongoose from 'mongoose';
async function main() {
    try {
        // এই নিচের ২টা লাইন যোগ করে দেখুন টার্মিনালে কি আসে
        console.log('Database URL Check:', config.database_url);
        console.log('Port Check:', config.port);
        if (!config.database_url) {
            throw new Error('Database URL pawa jacche na! .env file check korun.');
        }
        await mongoose.connect(config.database_url);
        console.log('✅ Database connected successfully!');
        app.listen(config.port, () => {
            console.log(`🚀 App listening on port ${config.port}`);
        });
    }
    catch (error) {
        console.error('❌ Connection Error:', error);
    }
}
main();
//# sourceMappingURL=server.js.map