export const formatMinutesToHours = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
};

export const buildDictionary = (people: IPerson[]): Record<string, string[]> =>
    people.reduce((acc, person: IPerson) => {
        if (!acc[person.name]) {
            acc[person.name] = [];
        }
        acc[person.name].push(person.department);
        return acc;
    }, {} as Record<string, string[]>);

export interface IPerson {
    name: string;
    department: string;
}

export const getDominantColorFromUrl = (url: string): Promise<string> => new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (ctx) {
            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data;

            const colorCount: Record<string, number> = {};
            let maxCount = 0;
            let dominantColor = '';

            for (let i = 0; i < pixels.length; i += 4) {
                const r = pixels[i];
                const g = pixels[i + 1];
                const b = pixels[i + 2];
                const rgb = `${r},${g},${b}`;

                colorCount[rgb] = (colorCount[rgb] || 0) + 1;

                if (colorCount[rgb] > maxCount) {
                    maxCount = colorCount[rgb];
                    dominantColor = rgb;
                }
            }

            resolve(dominantColor);
        } else {
            reject(new Error('Failed to get 2D context'));
        }
    };

    img.onerror = () => {
        reject('200,200,200');
    };
    img.src = url;
});

export const getContrastColor = (bgColor: string): string => {
    const [red, green, blue] = bgColor.split(',').map((c: string): number => parseInt(c, 10));
    const brightness = 0.299 * red + 0.587 * green + 0.114 * blue;

    return brightness > 128 ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
};