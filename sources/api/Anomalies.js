export class Anomalies {
    static getAll() {
        const response = {
            price: 0.28,
            items: [
                { name: 'A' },
                { name: 'B' },
                { name: 'C' }
            ],
            others: {
                rate: 0.35,
                items: [
                    { name: 'D' },
                    { name: 'E' },
                    { name: 'F' },
                    { name: 'G' },
                ],
                others: {
                    rate: 0.12, 
                    items: [
                        { name: 'Q' },
                        { name: 'W' },
                        { name: 'E' }
                    ]
                }
            }
        };

        return Promise.resolve(response);
    }
}