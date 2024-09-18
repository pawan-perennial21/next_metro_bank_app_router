import mongoose from "mongoose";

export async function connect() {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error(
                "MongoDB URI not found in environment variables."
            );
        }
        mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongDB is Connected");
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        connection.on("error", (err: any) => {
            console.log(
                `MongDB connection error. Please Make sure mongoDB is running... ${err}`
            );
            process.exit();
        });
    } catch (error) {
        console.log(`Something Wrong! ${error}`);
    }
}
