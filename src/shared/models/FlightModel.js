export class FlightModel {
    id;
    price;
    startHour;
    length;
    airline;

    static fromBackendData(data){
        return Object.assign(new FlightModel(), data)
    }

    toString(){
        return `(${this.id}) $ ${this.price} > ${this.startHour} [duration=${this.length}]`;
    }
}