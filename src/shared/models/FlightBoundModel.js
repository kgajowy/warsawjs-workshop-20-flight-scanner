export  class FlightBoundModel {
    airline;
    airportFrom;
    airportTo;
    length;
    startHour;

    static fromBackendData(data){
        return Object.assign(new FlightBoundModel(), data);
    }
}