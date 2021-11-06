export default class transactionContrller {
    static async getAllTransactions(req, res) {
        try {
            res.status(200).json({ message: 'Transactions found successfully!', data: {} });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error!', dev_error: error.message});
        }
    };
};