export interface Station {
    code: string;
    name: string;
}

export interface TrainStation {
    code: string;
    name: string;
    arrivalTime: string;
    departureTime: string;
    halt: string;
    day: number;
    distance: string;
}

export interface Train {
    number: string;
    name: string;
    from: string;
    to: string;
    departureTime: string; // HH:MM
    arrivalTime: string; // HH:MM
    duration: string;
    runsOn: string[]; // ['M','T','W','T','F','S','S']
    stations: TrainStation[];
}

export const STATIONS: Station[] = [
    { code: 'NDLS', name: 'New Delhi' },
    { code: 'MAS', name: 'MGR Chennai Central' },
    { code: 'BCT', name: 'Mumbai Central' },
    { code: 'HWH', name: 'Howrah Jn' },
    { code: 'SBC', name: 'KSR Bengaluru' },
    { code: 'TVC', name: 'Thiruvananthapuram Central' },
    { code: 'CSMT', name: 'Chhatrapati Shivaji Maharaj Terminus' },
    { code: 'LTT', name: 'Lokmanya Tilak Terminus' },
    { code: 'PUNE', name: 'Pune Jn' },
    { code: 'ADI', name: 'Ahmedabad Jn' },
    { code: 'JP', name: 'Jaipur Jn' },
    { code: 'LKO', name: 'Lucknow Charbagh NR' },
    { code: 'CNB', name: 'Kanpur Central' },
    { code: 'MMCT', name: 'Mumbai Central' },
    { code: 'ERS', name: 'Ernakulam Jn' },
    { code: 'CLT', name: 'Kozhikode' },
    { code: 'TCR', name: 'Thrissur' },
    { code: 'CAN', name: 'Kannur' },
    { code: 'KTYM', name: 'Kottayam' },
    { code: 'MYS', name: 'Mysuru Jn' },
    { code: 'ALLP', name: 'Alappuzha' }
];

// Sample station timeline for Kerala Express
const keralaExpressStations: TrainStation[] = [
    { code: 'NDLS', name: 'New Delhi', arrivalTime: '---', departureTime: '11:25', halt: '---', day: 1, distance: '0 km' },
    { code: 'MTJ', name: 'Mathura Jn', arrivalTime: '13:08', departureTime: '13:10', halt: '2m', day: 1, distance: '141 km' },
    { code: 'KOTA', name: 'Kota Jn', arrivalTime: '16:00', departureTime: '16:10', halt: '10m', day: 1, distance: '465 km' },
    { code: 'TVC', name: 'Thiruvananthapuram Central', arrivalTime: '14:30', departureTime: '---', halt: '---', day: 3, distance: '3031 km' },
];

export const MOCK_TRAINS: Train[] = [
    {
        number: '12626',
        name: 'Kerala Express',
        from: 'NDLS',
        to: 'TVC',
        departureTime: '11:25',
        arrivalTime: '14:30',
        duration: '51h 05m',
        runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        stations: keralaExpressStations
    },
    {
        number: '12432',
        name: 'Trivandrum Rajdhani',
        from: 'NDLS',
        to: 'TVC',
        departureTime: '10:50',
        arrivalTime: '05:25',
        duration: '42h 35m',
        runsOn: ['T', 'W', 'S'],
        stations: []
    },
    {
        number: '12625',
        name: 'Kerala Express',
        from: 'TVC',
        to: 'NDLS',
        departureTime: '14:00',
        arrivalTime: '13:45',
        duration: '47h 45m',
        runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        stations: []
    },
    {
        number: '12007',
        name: 'Shatabdi Express',
        from: 'MAS',
        to: 'MYS',
        departureTime: '06:00',
        arrivalTime: '13:00',
        duration: '7h 00m',
        runsOn: ['M', 'T', 'W', 'T', 'F', 'S'],
        stations: []
    },
    {
        number: '22639',
        name: 'Alleppey Express',
        from: 'MAS',
        to: 'ALLP',
        departureTime: '20:55',
        arrivalTime: '10:40',
        duration: '13h 45m',
        runsOn: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        stations: []
    }
];

export function searchTrains(from: string, to: string): Train[] {
    const fromCode = from.toUpperCase();
    const toCode = to.toUpperCase();
    return MOCK_TRAINS.filter(t =>
        (t.from === fromCode || fromCode === '') &&
        (t.to === toCode || toCode === '')
    );
}

export function getTrainDetails(trainNo: string): Train | undefined {
    return MOCK_TRAINS.find(t => t.number === trainNo);
}

export function getStationName(code: string): string {
    const s = STATIONS.find(stat => stat.code === code);
    return s ? s.name : code;
}
