import {FlightBoundModel} from "./FlightBoundModel";

export class FlightModel {
    id;
    price;
    inboundPath = [];
    outboundPath = [];

    static fromBackendData(data){
        const flight = Object.assign(new FlightModel(), data);
        console.log(data);
        flight.inboundPath = data.inboundPath.map(path => FlightBoundModel.fromBackendData(path));
        flight.outboundPath = data.outboundPath.map(path => FlightBoundModel.fromBackendData(path));
        return flight;
    }

    toString(){
        return `(${this.id}) $ ${this.price} > ${this.inboundPath} ${this.outboundPath}`;
    }
}