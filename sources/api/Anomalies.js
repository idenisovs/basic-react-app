export class Anomalies {
    static getAll() {
        const response = {
            rate: 0.33,
            items: [
                { name: 'A' },
                { name: 'B' },
                { name: 'C' }
            ],
            others: {
                rate: 0.44,
                items: [
                    { name: 'D' },
                    { name: 'E' },
                    { name: 'F' },
                    { name: 'G' },
                ],
                others: {
                    rate: 0.22,
                    items: [
                        { name: 'Q' },
                        { name: 'W' },
                    ]
                }
            }
        };

        return Promise.resolve(response);
    }
}