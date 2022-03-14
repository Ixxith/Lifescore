import e from "express";
import { Biome, Country, Town, Location, Race, Person } from "./Classes";

function ra(array : Array<any>) : any {
    return array[Math.floor(Math.random() * array.length)];
};

const biomes : Array<Biome> = [new Biome("Plains"), new Biome("Snow"), new Biome("Forest"), new Biome("Desert"), new Biome("Coastal")];
const races : Array<Race> = [new Race("Human"), new Race("Elf"), new Race("Dwarf")]

export function generate() : string {
    let locationDict : {[key : number] : Location} = {}
    let country = new Country();
    let town = new Town(country, ra(biomes));
    locationDict[town.LocationId] = town

    for (let i = 0; i < 10; i++) {
        new Person(country, town, ra(races))
    };

    let dataString : string = printProperties(country);

    dataString += "<br/><br/>"

    dataString += printProperties(town);

    dataString += "<br/><br/>"
    
    for (const person of town.Occupants) {
        dataString += printProperties(person)
        dataString += "<br/><br/>"
    };	
    
    return dataString;
};


function printProperties(obj : Object, dataString: string="", indents: number=0) : string {
    for (const [k, v] of Object.entries(obj)) { 
        dataString += `<p>`;
        for (let i = 0; i < indents; i++) {
            dataString += '&nbsp;&nbsp;&nbsp;&nbsp;';
        };
        dataString += `<b>${k}:</b>`
        if (typeof(v) == 'object') {
            if (v.Key != undefined) {
                dataString += ` ${v.Key} </p>`;
            }
            else {
                dataString += `</p>`;        
                dataString = printProperties(v, dataString, indents+1);
            }
            
        }
        else {
            dataString += ` ${v} </p>`;
        };
        
        
    }
    return dataString;
};




