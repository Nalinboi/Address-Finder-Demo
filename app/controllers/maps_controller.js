import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["fields", "map", "latitude", "longitude"]

    connect() {
        if (typeof (google) != "undefined"){
            this.initializeMap()
        }
    }

    initializeMap() {
        this.map()
        this.marker()
        this.autocomplete()
    }

    map() {
        if (this._map == undefined) {  // if the map does not exist then create it 
            this._map = new google.maps.Map(this.mapTarget, {
                center: new google.maps.LatLng(
                    this. Target.value,
                    this.longitudeTarget.value
                ), 
                zoom: 17
            })
        }
        return this._map  // if the map does exist then we simply return it 
    }

    marker() {

    } 

    autocomplete() {

    }


}