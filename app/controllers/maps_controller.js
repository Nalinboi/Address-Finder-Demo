import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["fields", "map", "latitude", "longitude"]

    connect() {
        if (typeof (google) != "undefined"){
            this.initializeMap()
        }
    }

    initializeMap() {
        window.alert('gummon')
        console.log('nalin its doing something')
        this.map()
        this.marker()
        this.autocomplete()
    }

    map() {
        if (this._map == undefined) {  // if the map does not exist then create it 
            this._map = new google.maps.Map(this.mapTarget, {
                center: new google.maps.LatLng(
                    this.latitudeTarget.value,
                    this.longitudeTarget.value
                ), 
                zoom: 17
            })
        }
        return this._map  // if the map does exist then we simply return it 
    }

    marker() {
        if (this._marker == undefined) {
        }
        return this._marker
    } 

    autocomplete() {
        if (this._autocomplete == undefined) {
            this._autocomplete = new google.maps.places.Autocomplete(this.fieldTarget)
            this._autocomplete.bindTo('bounds', this.map())
            this._autocomplete.setFields(['address_components', 'geometry', 'icon', 'name'])
            this._autocomplete.addListener('place_changed', this.locationChanged.bind(this))
        }
        return this._autocomplete
        
    }

    locationChanged() {
        let place = this.autocomplete().getPlace()

        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }
        this.map().fitBounds(place.geometry.viewport)
        this.map().setCenter(place.geometry.location)
        this.marker().setPosition(place.geometry.location)
        this.marker().setVisible(true)

        this.latitudeTarget.value = place.geometry.location.lat()
        this.latitudeTarget.value = place.geometry.location.lng()
    }


    preventSubmit(e) {
        if (e.key == "Enter") { e.preventDefault() }
    }

}