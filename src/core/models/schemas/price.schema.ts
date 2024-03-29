import { Schema } from "mongoose";
import { Price } from "../../interfaces/contracts";
import { CollectionName } from "../../../constants";

export const priceSchema: Schema<Price> = new Schema<Price>({
    price_name: {
        type: String,
        required: true,
    },
    fixed_price: {
        type: String,
        required: true
    },
    price_type: {
        type: String,
        enum: ['advance', 'premium'],
        default: 'advance'
    },
    feature: {
        type: [String],
    }
}, {
    timestamps: true,
    collection: CollectionName.Price
})