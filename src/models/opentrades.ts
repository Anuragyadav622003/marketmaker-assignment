import mongoose, {Model, Schema} from 'mongoose'; 
import { IOpenTrade } from '../types';

const openTradeSchema: Schema<IOpenTrade> = new mongoose.Schema({
    walletAddress: {
        type: String,
        required: true
    },
    solBalance: {
        type: Number,
        required: true
    },
    tokenBalance: {
        type: Number,
        required: true
    },
    openTradeType: {
        type: String,
        enum: ['BUY', 'SELL'],
        required: true
    },
    tokenAmount: {
        type: Number,
        required: true
    },
    solAmount: {
        type: Number,
        required: true
    },
    timeStamp: {
        type: Number,
        required: true
    }
}, {
    timestamps: true  
});

const OpenTrades: Model<IOpenTrade> = mongoose.model<IOpenTrade>('opentrades', openTradeSchema);

export default OpenTrades;
