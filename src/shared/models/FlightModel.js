export class FlightModel {
    id;
    price;
    startHour;
    inboundPath;
    outboundPath;

    static fromBackendData(data){
        return Object.assign(new FlightModel(), data)
    }

    toString(){
        return `(${this.id}) $ ${this.price} > ${this.inboundPath} ${this.outboundPath}`;
    }
}