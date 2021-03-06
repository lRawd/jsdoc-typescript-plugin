// Type definitions for OpenLayers v3.20.0
// Project: http://openlayers.org/
// Definitions by: Jackie Ng <https://github.com/jumpinjackie>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

//
// This file is automatically generated by jsdoc-typescript-plugin (https://github.com/jumpinjackie/jsdoc-typescript-plugin). 
//
// Do not edit this file unless you know what you're doing. Where possible, consult the plugin documentation for options to
// augment and customize the content of this generated file
//

/**
 * This is an alias for the HTML5 geolocation position options
 */
type GeolocationPositionOptions = PositionOptions;

// These types normally resolve to number[] by the plugin, which is fine, but TypeScript lets us define
// tuple types (ie. Arrays of specific size and item types) which is much more expressive 
// and clearer than what the plugin generates
//
// For example, instead of number[] for ol.Coordinate, we can express this as [number, number], ie. A
// 2-item array of numbers, which is more clearer as it communicates the maximum number of allowed elements
// that number[] does not
//
// We have to define these types manually, as there is no JSDoc analogue for this plugin to translate from

declare module ol {
    /**
     * A color represented as a short array [red, green, blue, alpha].
     * red, green, and blue should be integers in the range 0..255 inclusive.
     * alpha should be a float in the range 0..1 inclusive. If no alpha value is
     * given then `1` will be used.
     */
    type Color = [number, number, number, number];
    /**
     * An array of numbers representing an xy coordinate. Example: `[16, 48]`.
     */
    type Coordinate = [number, number];
    /**
     * An array of numbers representing an extent: `[minx, miny, maxx, maxy]`.
     */
    type Extent = [number, number, number, number];
    /**
     * An array with two elements, representing a pixel. The first element is the
     * x-coordinate, the second the y-coordinate of the pixel.
     */
    type Pixel = [number, number];
    /**
     * An array of numbers representing a size: `[width, height]`.
     */
    type Size = [number, number];
    /**
     * An array of three numbers representing the location of a tile in a tile
     * grid. The order is `z`, `x`, and `y`. `z` is the zoom level.
     */
    type TileCoord = [number, number, number];
}