/*
 * Mercantile API
 * Programmatic access to the Mercantile service
 *
 * OpenAPI spec version: v1
 * Contact: gurleen.singh@drexel.edu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CartItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartItem'));
  } else {
    // Browser globals (root is window)
    if (!root.MercantileApi) {
      root.MercantileApi = {};
    }
    root.MercantileApi.Order = factory(root.MercantileApi.ApiClient, root.MercantileApi.CartItem);
  }
}(this, function(ApiClient, CartItem) {
  'use strict';

  /**
   * The Order model module.
   * @module model/Order
   * @version v1
   */

  /**
   * Constructs a new <code>Order</code>.
   * @alias module:model/Order
   * @class
   * @param address {Number} 
   */
  var exports = function(address) {
    this.address = address;
  };

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Order} obj Optional instance to populate.
   * @return {module:model/Order} The populated <code>Order</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'Number');
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [CartItem]);
      if (data.hasOwnProperty('subtotal'))
        obj.subtotal = ApiClient.convertToType(data['subtotal'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {Number} address
   */
  exports.prototype.address = undefined;

  /**
   * @member {Array.<module:model/CartItem>} items
   */
  exports.prototype.items = undefined;

  /**
   * @member {String} subtotal
   */
  exports.prototype.subtotal = undefined;

  return exports;

}));