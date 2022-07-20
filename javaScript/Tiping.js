class Tiping {
    constructor() {
    }

    async writeHeader(elementId, header, delay) {
        for (let i = 1; i < header.length + 1; i++) {
            const x = await this.getLetter(header, i - 1, Math.pow(i + delay, 2));
            document.getElementById(elementId + [i]).innerHTML += x
        }
    }

    async deleteHeader(elementId, header, delay) {
        for (let i = header.length; i > 0; i--) {
            const x = await this.getLetter(header, i - 1, delay);
            document.getElementById(elementId + [i]).innerHTML = ""
        }
    }

    getLetter(message, i, delay) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(message[i]);
            }, delay);
        });
    }
}
