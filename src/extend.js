/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import utils from "./utils";
import prefix from "react-prefixer";

export default function(...styles) {
    utils.forEach(styles, (style) => {
        utils.forIn(style, (value, prop) => {
            if (!utils.isObject(this[prop])) {
                this[prop] = {};
            }

            this[prop] = utils.isFunction(value) ? style : utils.merge(this[prop], prefix(value));
        });
    });

    return this;
}