namespace ChangeJSDOC {
    // =========================================================================
    /**
     * 
     * Class representing a single point coordinate in 2D Space
     * 
     */
    // =========================================================================
    class Point {

        // =====================================================================
        // MEMBERS
        // =====================================================================

        private _x: number;
        private _y: number;

        // =====================================================================
        // PUBLIC METHODS
        // =====================================================================

        /**
         * @param x numerical representation of the horizontal position 
         * @param y numerical representation of the vertical position
         */
        public constructor(x: number, y: number) {
            this._x = x;
            this._y = y;
        }


        /**
         * calculates the distance between two points in 2D space
         * 
         * @param secondPoint the other coordinate to calculate distance from
         * 
         * @example 
         * const point1 = new Point(0,0);
         * point1.calculateDistance(new Point(1,1)); // returns sqrt 2
         * 
         * @returns the numerical representation of the distance between the two
         * given points
         */
        public calculateDistance(secondPoint: Point) {
            return Math.abs(
                Math.sqrt(
                    Math.pow(this.x - secondPoint.x, 2) +
                    Math.pow(this.y - secondPoint.y, 2)
                )
            );
        }

        // =====================================================================
        // GETTERS / SETTERS
        // =====================================================================

        /**
         * get the horizontal position
         * @returns the x position
         */
        get x() {
            return this._x;
        }

        /**
         * get the vertical position
         * @returns the y position
         */
        get y() {
            return this._y;
        }
    }

    // =========================================================================
    /**
     * 
     * Class representing a circle within 2D space
     * @extends Point
     * 
     */
    // =========================================================================
    class Circle extends Point {

        // =====================================================================
        // MEMBERS
        // =====================================================================
        private _radius: number;

        // =====================================================================
        // PUBLIC METHODS
        // =====================================================================

        /**
         * Constructor requires x,y coordinate since it operates in this plane, 
         * see {@link Point}
         * 
         * @param x numerical representation of the horizontal position 
         * @param y numerical representation of the vertical position 
         * @param radius the distance between the x,y coordinate and the edge of 
         * the circle
         */
        public constructor(x: number, y: number, radius: number) {
            super(x, y);
            this._radius = radius;
        }

        // =====================================================================
        // GETTERS / SETTERS
        // =====================================================================

        /**
         * get the radius of the circle
         * @returns the distance between the x,y coordinate and the edge of the 
         * circle
         */
        get radius(): number {
            return this._radius;
        }

        /**
         * get the area of the circle
         * @returns the numerical representation of the space within the circle
         */
        get area(): number {
            return Math.PI * Math.pow(this.radius, 2);
        }
    }
}